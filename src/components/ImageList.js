import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
  const imagesToRender = props.images.map(image => {
    // key props for rendering performance of list of elements
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{imagesToRender}</div>;
};

export default ImageList;
