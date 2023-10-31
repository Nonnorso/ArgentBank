const initialState = {
    userProfile: {userName: ''},
    error: null
  };
  
  const editNameReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_USERNAME':
        return {
            ...state,
            userProfile: {
                ...state.userProfile.action,
                userName: action.payload
            }
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