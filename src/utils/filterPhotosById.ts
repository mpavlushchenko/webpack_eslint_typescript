import IPhotos from '../Pages/Photos/types';

export interface FilteredIPhotos extends IPhotos {
  type?: number | string;
}

const filteredPhotos = (arr: IPhotos[] = [], param: number): FilteredIPhotos[] =>
  arr.filter((photo: IPhotos) => photo.id > param);

export default filteredPhotos;
