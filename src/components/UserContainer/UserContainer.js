import React from 'react';

import AlbumItem from "../AlbumItem";
import './userContainer.scss';

const UserContainer = ({ user, albums, handleClickAlbum }) => {
  return (
    <div className="user">
      <h3 className="user__name">{user.name}</h3>
      <div className="user__albums-box">
        {albums.map(album => <AlbumItem key={album.id} album={album} handleClickAlbum={handleClickAlbum}/>)}
      </div>
      <hr/>
    </div>
  );
};

export default UserContainer;
