import React from 'react';

import Card from '../../Components/Card';
import filterPhotosById, { FilteredIPhotos } from '../../utils/filterPhotosById';
import IPhotos from './types';
import useFetchPhotos from './usePhotos';
import './styles.scss';

const MIN_PHOTO_VALUE: number = 3;

const Photos = (): JSX.Element => {
  const { isLoading, data } = useFetchPhotos();
  const filteredPhotos: Readonly<FilteredIPhotos[]> = filterPhotosById(data, MIN_PHOTO_VALUE);
  // console.log('data', filteredPhotos);

  // const sendFirstPhoto = (photos, send) => {
  //   const photo = photos[0];
  //   send(photo);
  // };
  const handleLoadMore = () => {
    // sendFirstPhoto(data, () => {});
  };

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
