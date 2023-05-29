import React from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/logo.svg';

export default function Header(props) {
  const { userEmail, handleSetLoggedOut, loggedIn } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const navigate = useNavigate();

  const onSignOut = () => {
    localStorage.removeItem('mesto-react-token');
    handleSetLoggedOut();
    navigate('/sign-in');
    setIsOpen(false);
  };

  React.useEffect(() => {
    const resize = () => {
      const mobileWidth = document.body.clientWidth < 420;
      if (mobileWidth) {
        setIsMobile(true);
      } else {
        setIsOpen(false);
        setIsMobile(false);
      }
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener("resize", resize);
  }, [setIsMobile]);

  const toggleMenu = () => setIsOpen(isOpen => !isOpen);

  const menuButtonClassName = `button header__menu-button ${isOpen ? 'header__menu-button_type_closed' : ''}`;
  const linksContainerClassName = `header__links-container ${isOpen ? 'header__links-container_type_closed' : ''}`;

  const navForLoggedIn = () =>
    <nav className={linksContainerClassName}>
      <span className="header__login" title={userEmail}>{userEmail}</span>
      <button className="button header__out-button" onClick={onSignOut}>Выйти</button>
    </nav>;

  return (
    <header className="header">
      {(isOpen && loggedIn) &&
        <div className='header__login-container'>
          {navForLoggedIn()}
        </div>
      }

      <div className='header__container'>
        <NavLink to="/">
          <img src={logo} alt="Логотип: Место" className="header__logo" />
        </NavLink>

        <Routes>
          <Route path="/" element={(loggedIn && !isMobile) && navForLoggedIn()} />
          <Route path="/sign-up" element={<NavLink className="link header__link" to="/sign-in">Войти</NavLink>} />
          <Route path="/sign-in" element={<NavLink className="link header__link" to="/sign-up">Регистрация</NavLink>} />
        </Routes>

        {(loggedIn && isMobile) && <button
          className={menuButtonClassName}
          type="button"
          title={isOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-label="Кнопка меню"
          onClick={toggleMenu}
        />}
      </div>
    </header >
  );
}