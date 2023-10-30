export const loginUser = (formData, navigate, setError) => {
    return async (dispatch) => {
      try {
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.username,
            password: formData.password,
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          const token = data.body.token;
          sessionStorage.setItem("authToken", token);
          dispatch({ type: 'LOGIN_SUCCESS' });
          navigate("/user");

        } else {
          setError("Échec de l'authentification. Vérifiez vos identifiants.");
          dispatch({ type: 'LOGIN_FAILURE' });
        }
        
      } catch (error) {
        setError("Une erreur s'est produite : " + error.message);
        dispatch({ type: 'LOGIN_ERROR', payload: error.message });
      }
    };
  };