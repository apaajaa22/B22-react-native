const initPhoto = {
  uri: '',
  type: '',
  name: '',
  isUpload: false,
};

export const photoReducer = (state = initPhoto, action) => {
  switch (action.type) {
    case 'SET_PHOTO':
      return {
        ...state,
        uri: action.payload.uri,
        type: action.payload.type,
        name: action.payload.name,
      };
    case 'SET_UPLOAD_STATUS':
      return {
        ...state,
        isUpload: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
