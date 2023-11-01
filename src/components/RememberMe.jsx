export default function rememberMe (formData, rememberMe) {
    if (rememberMe) {
      sessionStorage.setItem('username', formData.username);
      sessionStorage.setItem('password', formData.password);
    } else {
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('password');
    }
  };