import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../index';

test('renders a message', () => {
  const mock = {
    albumId: 1,
    id: 1,
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
  };

  const { container } = render(<Card photo={mock} />);

  expect(container.firstChild).toHaveClass(`ant-card item`);

  expect(container.querySelectorAll('.ant-card-meta-title')).toBeTruthy();
});
