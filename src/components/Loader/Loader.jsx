import React from 'react';
import { LoaderBackdrop } from './Loader.styled';
import CircleLoader from 'react-spinners/CircleLoader';

export const Loader = () => {
  return (
    <LoaderBackdrop>
      <CircleLoader
        color="#ed07d2"
        size={150}
        cssOverride={{ position: 'absolute', top: '25%', left: '45%' }}
      />
    </LoaderBackdrop>
  );
};
