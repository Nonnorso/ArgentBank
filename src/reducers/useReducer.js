const initialState = {
    loggedIn: !!sessionStorage.getItem("authToken"),
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, loggedIn: true, error: null };
      case 'LOGIN_FAILURE':
        return { ...state, error: "Échec de l'authentification. Vérifiez vos identifiants." };
      case 'LOGIN_ERROR':
        return { ...state, error: action.payload };
      case 'LOGOUT':
        sessionStorage.removeItem("authToken");
        return { loggedIn: false, error: null };
    default:
        return state;
    }
  };
  
  export default userReducer;