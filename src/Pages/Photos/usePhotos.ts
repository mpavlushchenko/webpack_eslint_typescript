import { useQuery } from 'react-query';
import IPhotos from './types';
import client from '../../services/api';

function useFetchPhotos(page = 1) {
  return useQuery<IPhotos[]>(
    'photos',
    () => client.get(`/photos?_page=${page}&_limit=10`).then((response) => response.data),
    {
      staleTime: 10000,
    }
  );
}

export default useFetchPhotos;
