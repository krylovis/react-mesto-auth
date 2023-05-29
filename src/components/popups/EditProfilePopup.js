import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useForm } from '../../hooks/useForm';

export default function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const { isOpen, onClose, onUpdateUser, isLoading } = props;
  const { values, handleChange, setValues } = useForm({ name: '', about: '' });

  React.useEffect(() => {
    setValues((state) => ({ ...state, ...currentUser, }));
  }, [currentUser, setValues, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(values);
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      popupType="profile-form"
      popupTitle="Редактировать профиль"
      formName="profileForm"
      ariaLabel="Сохранить данные"
      buttonText={isLoading ? "Сохранение..." : "Сохранить"}
      inactiveButton={false}
    >
      <label className="popup__label" htmlFor="inputName">
        <input className="popup__input" id="inputName" type="text" name="name" value={values.name} onChange={handleChange} placeholder="ФИО" required minLength="2" maxLength="40" />
        <span className="popup__input-error inputName-error"></span>
      </label>
      <label className="popup__label" htmlFor="inputJob">
        <input className="popup__input" id="inputJob" type="text" name="about" value={values.about} onChange={handleChange} placeholder="Профессия" required minLength="2" maxLength="200" />
        <span className="popup__input-error inputJob-error"></span>
      </label>
    </PopupWithForm>
  );
}