const initialState = {
    userProfile: {},
    error: null
  };
  
  const editNameReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_USER_PROFILE_SUCCESS':
        return {
          ...state,
          userProfile: action.payload,
          error: null
        };
      case 'UPDATE_USER_PROFILE_FAILURE':
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default editNameReducer;