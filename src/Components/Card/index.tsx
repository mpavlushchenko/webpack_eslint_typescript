import React from 'react';
import { Card as AntCard } from 'antd';

import IPhotos from '../../Pages/Photos/types';
import './styles.scss';

interface Props {
  photo: IPhotos;
}

const Index = ({ photo }: Props) => {
  const { Meta } = AntCard;

  const { title, url, thumbnailUrl } = photo;
  return (
    <AntCard className="item" hoverable cover={<img alt="example" src={thumbnailUrl} />}>
      <Meta title={title} description={url} />
    </AntCard>
  );
};

export default Index;
