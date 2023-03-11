import React, { Component, useEffect, useState } from 'react';
import {
  SearchBar,
  getImages,
  Gallery,
  ButtonStyled,
  Loader,
  Modal,
} from './index';

export class App extends Component {
  state = {
    query: 'React',
    page: 1,
    images: [],
    isLOading: false,
    isEmpty: false,
    showBtn: false,
    error: '',
    openModal: false,
    largeImg: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ isLOading: true });
      getImages(query, page)
        .then(({ hits, totalHits }) => {
          if (!hits.length) {
            this.state({ isEmpty: true });
            return;
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            showBtn: page < Math.ceil(totalHits / 12),
          }));
        })
        .catch(error => {
          this.setState({
            error: error.message,
          });
        })
        .finally(this.setState({ isLOading: false }));
    }
  }

  onSubmit = query => {
    this.setState({ query, images: [], showBtn: false });
  };

  handleClickMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onClickImg = e => {
    this.setState({
      largeImg: e.target.name,
      openModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      openModal: false,
    });
  };
  render() {
    return (
      <>
        <SearchBar onSubmit={this.onSubmit} />
        <Gallery images={this.state.images} onClick={this.onClickImg} />
        {this.state.showBtn && <ButtonStyled onClick={this.handleClickMore} />}
        {this.state.isLOading && <Loader />}
        {this.state.openModal && (
          <Modal
            selectedImage={this.state.largeImg}
            alt = 'Hello'
            onClose={this.closeModal}
          />
        )}
      </>
    );
  }
}
