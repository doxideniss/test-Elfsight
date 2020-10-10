import React from 'react';

import './photoDetails.scss';

const PhotoDetails = ({ photo, dispatch, currentPhotoIndex, arrowAvailable }) => {
  const containerRef = React.useRef();

  const handleClose = () => {
    dispatch({
      type: 'PHOTOS:SET_CURRENT',
      payload: null
    })
  };

  const handleChangePhoto = (direction) => () => {
    if (direction === 'left') {
      dispatch({
        type: 'PHOTOS:SET_CURRENT',
        payload: currentPhotoIndex - 1
      })
    } else if (direction === 'right') {
      dispatch({
        type: 'PHOTOS:SET_CURRENT',
        payload: currentPhotoIndex + 1
      })
    }
  };

  const handleClickOutside = (e) => {
    if (!containerRef.current.contains(e.target)) {
      handleClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [containerRef]);

  return (
    <div className="photo-details">
      <div className="photo-details__content" ref={containerRef}>
        <img src={photo.url} alt="Details"/>
        <div className="photo-details__title">{photo.title}</div>
        <button className="photo-details__btn photo-details__btn--close" onClick={handleClose}>✖</button>
        <button className="photo-details__btn photo-details__btn--arrow-left" disabled={!arrowAvailable.left} onClick={handleChangePhoto('left')}>🡸</button>
        <button className="photo-details__btn photo-details__btn--arrow-right" disabled={!arrowAvailable.right} onClick={handleChangePhoto('right')}>🡺</button>
      </div>
    </div>
  );
};

export default PhotoDetails;
