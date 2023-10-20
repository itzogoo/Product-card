

import React from 'react';

const Image = ({ imageUrl, altText }) => {
  return (
    <div>
      <img src={imageUrl} alt={altText} />
    </div>
  );
};

export default Image;