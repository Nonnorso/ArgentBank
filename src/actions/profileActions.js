export const setUserProfile = (userData) => ({
    type: 'SET_USER_PROFILE',
    payload: userData,
  });
  
  export const fetchUserProfile = (token) => {
    return async (dispatch) => {
      try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({})
        });
  
        const data = await response.json();
        
        if (data.status === 200) {
          const { firstName, lastName, userName } = data.body;
          dispatch(setUserProfile({ firstName, lastName, userName }));

        } else if (data.status === 401) {
            console.error('ACCESS DENIED !');
            sessionStorage.removeItem("authToken");
            sessionStorage.removeItem("username");
            sessionStorage.removeItem("password");
            dispatch({ type: 'LOGOUT' }); 
        } 
        
        else {
            console.error('Unexpected error occurred');
        }
      } catch (error) {
        console.error('Fetch error:', error);
    }
    };
  };