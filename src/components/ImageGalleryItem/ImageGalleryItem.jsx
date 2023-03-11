import React, { useState } from 'react';
import { Item, Img } from './ImageGalleryItem.styled';
import propTypes from 'prop-types';
import { Modal } from 'components/index';

export const ItemImg = ({ webformatURL, tags, largeImageURL }) => {
  const [openModal, setOpenModal] = useState(false);

  const openCloseModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Item onClick={openCloseModal}>
        <Img src={webformatURL} alt={tags} />
      </Item>
      {openModal && (
        <Modal
          selectedImage={largeImageURL}
          alt="Hello"
          onClose={openCloseModal}
        />
      )}
    </>
  );
};

ItemImg.propTypes = {
  webformatURL: propTypes.string.isRequired,
  tags: propTypes.string.isRequired,
  largeImageURL: propTypes.string.isRequired,
};
