import React from 'react';
import { useQuery } from 'react-query';

import PhotosInterface from './types';
import client, { BASE_API_URL } from '../../services/api';

function useReactQueryPhotos(page = 1) {
  return useQuery<PhotosInterface[]>(
    'photos',
    () => client.get(`/photos?_page=${page}&_limit=10`).then((response) => response.data),
    {
      staleTime: 10000,
    }
  );
}

function useFetchPhotos(page = 1) {
  const [data, setData] = React.useState<PhotosInterface[]>([]);
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<unknown>(null);
  const BASE_URL = `${BASE_API_URL}/photos?_page=${page}&_limit=10`;

  React.useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();

        setData((prevState: PhotosInterface[]) => [...prevState, ...json]);
      } catch (e: unknown) {
        setError(e);
      }
      setLoading(false);
    };
    fetchPhotos();
  }, [page]);

  return { data, isLoading, error };
}

export { useFetchPhotos, useReactQueryPhotos };
