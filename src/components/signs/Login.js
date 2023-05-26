import SignWithForm from './SignWithForm';
import { authorize } from '../../utils/Auth';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export default function Login(props) {
  const { handleSetLoggedIn, handleTooltipOpen } = props;
  const { values, handleChange } = useForm({ email: '', password: '' });
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    authorize(values)
      .then((data) => {
        localStorage.setItem('mesto-react-token', data.token);
        handleSetLoggedIn();
        navigate('/');
      })
      .catch(err => {
        handleTooltipOpen(false);
        console.log(err)
      });
  };

  return (
    <SignWithForm
      onSubmit={handleSubmit}
      signTitle="Вход"
      signName="login"
      ariaLabel="Войти"
      buttonText="Войти"
    >
      <label className="sign__label" htmlFor="inputLoginEmail">
        <input
          className="sign__input"
          id="inputLoginEmail"
          placeholder="Email"
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}"
          value={values.email}
          onChange={handleChange}
          required minLength="2"
          maxLength="40"
        />
        <span className="sign__input-error inputLoginEmail-error"></span>
      </label>

      <label className="sign__label" htmlFor="inputLoginPassword">
        <input
          className="sign__input"
          id="inputLoginPassword"
          placeholder="Пароль"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          required minLength="6"
          maxLength="200"
        />
        <span className="sign__input-error inputLoginPassword-error"></span>
      </label>
    </SignWithForm>
  );
};