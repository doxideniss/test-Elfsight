import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import PhotoItem from "../PhotoItem";
import api from "../../api";
import './album.scss';
import Spin from "../Spin";

const Album = ({ dispatch, isLoading, photos }) => {
  const { id } = useParams();
  const history = useHistory();

  React.useEffect(() => {
    dispatch({
      type: 'ALBUMS:SET_LOADING',
      payload: true
    });
    api.getPhotosById(id)
      .then(({ data: photosData }) => {
        dispatch({
          type: 'PHOTOS:SET_DATA',
          payload: photosData
        });
        dispatch({
          type: 'ALBUMS:SET_LOADING',
          payload: false
        });
      });
  }, [id]);

  const handleClickPhoto = (id) => {
    dispatch({
      type: 'PHOTOS:SET_CURRENT',
      payload: photos.findIndex(photo => photo.id === id)
    })
  };

  const handleClickBack = () => {
    history.goBack();
  };

  return (
    <div className="album">
      {
        isLoading ? (
          <Spin/>
        ) : (
          <>
            <button onClick={handleClickBack}>Назад</button>
            <div>Список фото:</div>
            <div className="album__photos-box">
              {
                photos.map(photo => <PhotoItem key={photo.key} photo={photo} handleClickPhoto={handleClickPhoto}/>)
              }
            </div>
          </>
        )
      }

    </div>
  );
};

export default Album;
