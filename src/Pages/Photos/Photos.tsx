import React from 'react';

import Card from '../../Components/Card';
import filterPhotosById, { FilteredPhotos } from '../../utils/filterPhotosById';
import { useFetchPhotos } from './usePhotos';
import PhotosInterface from './types';
import './styles.scss';

const MIN_PHOTO_VALUE: number = 3;

const Photos = (): JSX.Element => {
  const [page, setPage] = React.useState<number>(1);

  const { data, isLoading } = useFetchPhotos(page);

  const filteredPhotos: Readonly<FilteredPhotos[]> = filterPhotosById(data, MIN_PHOTO_VALUE);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      {isLoading && <span>Loading...</span>}
      <div className="photos-wrapper">
        {filteredPhotos && filteredPhotos.map((photo: PhotosInterface) => <Card key={photo.id} photo={photo} />)}
      </div>
      <div>
        <button type="button" onClick={handleLoadMore}>
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      </div>
    </>
  );
};

export default Photos;
