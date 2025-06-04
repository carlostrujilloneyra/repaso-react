export const LoginPage = () => {
  const handleLogin = () => {
    localStorage.setItem('isLogged', 'true');
    window.location.reload();
  };

  return (
    <>
      <div className='login'>
        <nav className='navbar'>
          <h2>Login</h2>
          <button onClick={handleLogin}>Ingresar</button>
        </nav>
      </div>
    </>
  );
};
