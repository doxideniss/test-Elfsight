export default (state, { type, payload }) => {
  switch (type) {
    case "APP:IS_LOADING":
      return {
        ...state,
        isLoading: payload
      };
    case "USERS:SET_DATA":
      return {
        ...state,
        users: payload
      };
    case "ALBUMS:SET_DATA":
      return {
        ...state,
        albums: {
          ...state.albums,
          data: payload
        }
      };
    case "ALBUMS:SET_LOADING":
      return {
        ...state,
        albums: {
          ...state.albums,
          isLoading: payload
        }
      };
    case "PHOTOS:SET_DATA":
      return {
        ...state,
        photos: {
          arrowAvailable: {
            left: false,
            right: false
          },
          data: payload,
          currentPhotoIndex: null
        }
      };
    case "PHOTOS:SET_CURRENT":
      return {
        ...state,
        photos: {
          ...state.photos,
          currentPhotoIndex: payload,
          arrowAvailable: {
            left: payload !== 0,
            right: state.photos.data.length - 1 !== payload
          }
        }
      };
    default:
      return state;
  }
};
