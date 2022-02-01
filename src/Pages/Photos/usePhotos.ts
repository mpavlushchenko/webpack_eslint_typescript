import React from 'react';
import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import PhotosInterface from './types';
import client from '../../services/api';

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
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);

    client
      .get<PhotosInterface[]>(`/photos?_page=${page}&_limit=10`)
      .then((response: AxiosResponse) => {
        setData((prevState: PhotosInterface[]) => [...prevState, ...response.data]);
      })
      .catch((error: AxiosError) => {
        console.log('error', error);
      });

    setIsLoading(false);
  }, [page]);

  return { data, isLoading };
}

export { useFetchPhotos, useReactQueryPhotos };
