import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Spin, Album, PhotoDetails } from './components';
import reducer from './reducer';
import api from "./api";

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    isLoading: true,
    users: [],
    albums: {
      isLoading: false,
      data: []
    },
    photos: {
      arrowAvailable: {
        left: false,
        right: false
      },
      currentPhotoIndex: null,
      data: []
    },
  });

  React.useEffect(() => {
    async function fetchData() {
      const { data: usersData } = await api.getUsers();
      const { data: albumsData } = await api.getAlbums();
      const albums = albumsData.map(album => ({
        userId: album.userId,
        id: album.id,
        title: album.title,
        cover: album.photos && album.photos[0].thumbnailUrl,
        countPhotos: album.photos.length
      }));
      dispatch({
        type: 'USERS:SET_DATA',
        payload: usersData
      });
      dispatch({
        type: 'ALBUMS:SET_DATA',
        payload: albums
      });
      dispatch({
        type: 'APP:IS_LOADING',
        payload: false
      })
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        {
          state.isLoading ? (
            <Spin/>
          ) : (
            <Switch>
              <Route exact path="/">
                <Home dispatch={dispatch} users={state.users} albums={state.albums.data}/>
              </Route>
              <Route exact path="/album/:id">
                <Album dispatch={dispatch} photos={state.photos.data} isLoading={state.albums.isLoading} />
              </Route>
            </Switch>
          )
        }
      </div>
      { state.photos.currentPhotoIndex !== null && <PhotoDetails dispatch={dispatch}
                                                        arrowAvailable={state.photos.arrowAvailable}
                                                        currentPhotoIndex={state.photos.currentPhotoIndex}
                                                        photo={state.photos.data[state.photos.currentPhotoIndex]}/> }
    </>
  );
}

export default App;
