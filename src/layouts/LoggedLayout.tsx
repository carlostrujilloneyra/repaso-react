interface Props {
  children: React.ReactNode;
}

export const LoggedLayout = ({ children }: Props) => {
  const handleLogout = () => {
    localStorage.removeItem('isLogged');
    window.location.reload();
  };

  return (
    <>
      <nav className='navbar'>
        <p>Soy el Navbar</p>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </nav>
      {children}
    </>
  );
};
