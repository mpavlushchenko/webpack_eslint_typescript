import React from 'react';

interface Props {
  children: React.ReactNode;
  elementType?: keyof JSX.IntrinsicElements;
}

const CreateElement = ({ children, elementType: ElementType = 'h2' }: Props): JSX.Element => (
  <ElementType>{children}</ElementType>
);

export default CreateElement;
