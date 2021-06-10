import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => {
  const createContentLoader = () => (
    <ContentLoader
      speed={2}
      width="100%"
      height="100%"
      backgroundColor="#000000"
      foregroundColor="#878787"
    >
      <rect x="5" y="-3" rx="0" ry="0" width="100%" height="100%" />
    </ContentLoader>
  );
  return (
    <>
      {createContentLoader()}
      {createContentLoader()}
      {createContentLoader()}
      {createContentLoader()}
      {createContentLoader()}
      {createContentLoader()}
    </>
  );
};

export default Loader;
