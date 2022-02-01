import PhotosInterface from '../Pages/Photos/types';

export interface FilteredPhotos extends PhotosInterface {
  type?: number | string;
}

const filteredPhotos = (arr: PhotosInterface[], param: number): FilteredPhotos[] =>
  arr.filter((photo: PhotosInterface) => photo.id > param);

export default filteredPhotos;
