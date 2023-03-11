import React from 'react';
import { Item, Img } from './ImageGalleryItem.styled';
import propTypes from 'prop-types';

export const ItemImg = ({ webformatURL, tags, largeImageURL, onClick }) => {
  return (
    <Item onClick={onClick}>
      <Img src={webformatURL} alt={tags} name={largeImageURL}/>
    </Item>
  );
};

ItemImg.propTypes = {
  webformatURL: propTypes.string.isRequired,
  tags: propTypes.string.isRequired,
  largeImageURL: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
