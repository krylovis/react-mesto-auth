import { Link } from 'react-router-dom';

export default function SignWithForm(props) {
  const { signTitle, signName, ariaLabel, buttonText, isLink, children, onSubmit } = props;

  return (
    <main className="content">
      <section className="sign">
        <div className="sign__container">
          <h2 className="sign__title">{signTitle}</h2>

          <form action={`${signName}Action`} onSubmit={onSubmit} name={signName} className="sign__form">
            {children}
            <button className="button sign__submit-button" type="submit" aria-label={ariaLabel}>{buttonText}</button>
          </form>

          {isLink &&
            <div className="sign__enter">
              <p className="sign__text">Уже зарегистрированы?&nbsp;</p>
              <Link className="link sign__link" to="/sign-in">Войти</Link>
            </div>}
        </div>
      </section>
    </main>
  );
};