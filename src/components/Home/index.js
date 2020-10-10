import React from 'react';
import { useHistory } from 'react-router-dom';

import UserContainer from '../UserContainer/UserContainer';

const Home = ({ users, albums, dispatch }) => {
  const history = useHistory();
  const handleClickAlbum = (id) => {
    history.push(`album/${id}`);
  };

  return (
    <div>
      <div>Список пользователей: </div>
      {users.map((user) => {
        const userAlbums = albums.filter(album => album.userId === user.id);
        return <UserContainer key={user.id} user={user} albums={userAlbums} handleClickAlbum={handleClickAlbum} />
      })}
    </div>
  );
};

export default Home;
