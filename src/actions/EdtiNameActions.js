export const updateUserProfile = (userData, token) => {
    return async (dispatch) => {
      try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(userData)
        });
  
        const data = await response.json();
  
        if (response.ok) {
          dispatch({ type: 'UPDATE_USERNAME', payload: userData.userName });
        } else {
          dispatch({ type: 'UPDATE_USER_PROFILE_FAILURE', payload: data.message });
        }
      } catch (error) {
        dispatch({ type: 'UPDATE_USER_PROFILE_FAILURE', payload: error.message });
      }
    };
  };