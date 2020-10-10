import React from 'react';

const PhotoItem = ({ photo, handleClickPhoto }) => {
  const onClick = (id) => e => {
    handleClickPhoto(id);
  };

  return (
    <div className="album__photo" onClick={onClick(photo.id)}>
      <img src={photo.thumbnailUrl} alt="Photo"/>
    </div>
  );
};

export default PhotoItem;
