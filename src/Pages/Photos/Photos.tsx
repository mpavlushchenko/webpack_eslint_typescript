import React from 'react';
import { useQuery } from 'react-query';

import Card from '../../Components/Card';
import filterPhotosById, { FilteredIPhotos } from '../../utils/filterPhotosById';
import IPhotos from './types';
import './styles.scss';
import client from '../../services/api';

const MIN_PHOTO_VALUE: number = 3;

const Photos = () => {
  const useFetchPhotos = (page = 1) =>
    useQuery<IPhotos[]>(
      'photos',
      () => client.get(`/photos?_page=${page}&_limit=5`).then((response) => response.data),
      { staleTime: 10000 }
    );

  const { isLoading, data } = useFetchPhotos();
  const filteredPhotos: Readonly<FilteredIPhotos[]> = filterPhotosById(data, MIN_PHOTO_VALUE);
  // console.log('data', filteredPhotos);

  const handleLoadMore = () => {};

  return (
    <>
      {isLoading && <span>Loading...</span>}
      <div className="photos-wrapper">
        {filteredPhotos && filteredPhotos.map((photo: IPhotos) => <Card key={photo.id} photo={photo} />)}
      </div>
      <div>
        <button type="button" onClick={handleLoadMore}>
          Load more
        </button>
      </div>
    </>
  );
};

export default Photos;
