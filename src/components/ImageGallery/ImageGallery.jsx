import React from 'react';
import { GalleryUl } from './ImageGallery.styled';
import { ItemImg } from '../';
import propTypes from 'prop-types';

export const Gallery = ({ images, onClick }) => {
  return (
    <GalleryUl>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <ItemImg
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </GalleryUl>
  );
};

Gallery.propTypes = {
  images: propTypes.arrayOf(propTypes.object),
};
