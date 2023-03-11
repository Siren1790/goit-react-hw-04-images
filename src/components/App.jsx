import React, { useEffect, useState } from 'react';
import { SearchBar, getImages, Gallery, ButtonStyled, Loader } from './index';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (query === '') {
      return;
    }
    getImages(query, page)
      .then(({ hits, totalHits }) => {
        if (!hits.length) {
          alert('Нічого не знайдено');
          return;
        }
        setImages(prevState => [...prevState, ...hits]);
        setShowBtn(page < Math.ceil(totalHits / 12));
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(setIsLoading(false));
  }, [query, page]);

  const onSubmit = newQuery => {
    if (newQuery === query) return;
    setIsLoading(true);
    setImages([]);
    setShowBtn(false);
    setQuery(newQuery);
  };

  const handleClickMore = () => {
    setPage(prevState => prevState + 1);
    setIsLoading(true);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />

      <Gallery images={images} />
      {showBtn && <ButtonStyled onClick={handleClickMore} />}
      <Loader isLoading={isLoading} />
      {error && <h2>{error}</h2>}
    </>
  );
};
