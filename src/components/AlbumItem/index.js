import React from 'react';

import './albumItem.scss';

const AlbumItem = ({ album, handleClickAlbum }) => {
  const onClick = () => {
    handleClickAlbum(album.id)
  };

  return (
    <div className="album-item" onClick={onClick}>
      <div className="album-item__content">
        <img src={album.cover} alt="Album cover"/>
        <div className="album-item__info">
          <p className="album-item__title">{album.title}</p>
          <span className="album-item__count">{album.countPhotos}</span>
        </div>
      </div>
    </div>
  );
};

export default AlbumItem;
