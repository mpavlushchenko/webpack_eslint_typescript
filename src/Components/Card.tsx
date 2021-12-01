import React from 'react';
import { Card as AntCard } from 'antd';

import IPhotos from '../Pages/Photos/types';

interface Props {
  photo: IPhotos;
}
const Card = ({ photo }: Props) => {
  const { Meta } = AntCard;

  const { title, url, thumbnailUrl } = photo;
  return (
    <AntCard hoverable cover={<img alt="example" src={thumbnailUrl} />}>
      <Meta title={title} description={url} />
    </AntCard>
  );
};

export default Card;
