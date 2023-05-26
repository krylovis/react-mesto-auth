import SignWithForm from './SignWithForm';
import { useForm } from '../../hooks/useForm';
import { register } from '../../utils/Auth';
import { useNavigate } from 'react-router-dom';

export default function Register(props) {
  const { handleTooltipOpen } = props;
  const { values, handleChange } = useForm({ email: '', password: '' });
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    register(values)
      .then((data) => {
        handleTooltipOpen(true);
        navigate('/sign-in');
      })
      .catch(err => {
        handleTooltipOpen(false);
        console.log(err)
      });
  };

  return (
    <SignWithForm
      onSubmit={handleSubmit}
      signTitle="Регистрация"
      signName="register"
      ariaLabel="Зарегистрироваться"
      buttonText="Зарегистрироваться"
      isLink={true}
    >
      <label className="sign__label" htmlFor="inputRegisterEmail">
        <input className="sign__input"
          id="inputRegisterEmail"
          placeholder="Email"
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}"
          value={values.email}
          onChange={handleChange}
          required minLength="2"
          maxLength="40"
        />
        <span className="sign__input-error inputRegisterEmail-error"></span>
      </label>

      <label className="sign__label" htmlFor="inputRegisterPassword">
        <input
          className="sign__input"
          id="inputRegisterPassword"
          placeholder="Пароль"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          required minLength="6"
          maxLength="200"
        />
        <span className="sign__input-error inputRegisterPassword-error"></span>
      </label>
    </SignWithForm>
  );
};