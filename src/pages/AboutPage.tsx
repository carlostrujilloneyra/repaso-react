import { useNavigate } from 'react-router-dom';

export const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <span>Esta es la página de About</span>

      <button onClick={() => navigate(-1)}>ATRÁS</button>
    </>
  );
};
