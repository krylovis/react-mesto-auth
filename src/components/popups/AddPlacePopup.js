import React from 'react';
import PopupWithForm from './PopupWithForm';
import { useForm } from '../../hooks/useForm';

export default function AddPlacePopup(props) {
  const { isOpen, onClose, onAddPlace, isLoading } = props;
  const { values, handleChange, setValues } = useForm({ name: '', link: '' });

  React.useEffect(() => {
    setValues({ name: '', link: '' });
  }, [setValues, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(values);
  };


  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      popupType="new-place"
      popupTitle="Новое место"
      formName="newPlaceForm"
      ariaLabel="Создать новое место"
      buttonText={isLoading ? "Сохранение..." : "Сохранить"}
      inactiveButton={false}
    >
      <label className="popup__label" htmlFor="inputPlaceName">
        <input className="popup__input" id="inputPlaceName" value={values.name} onChange={handleChange} type="text" name="name" placeholder="Название" required minLength="2" maxLength="30" />
        <span className="popup__input-error inputPlaceName-error"></span>
      </label>
      <label className="popup__label" htmlFor="inputPlaceLink">
        <input className="popup__input" id="inputPlaceLink" value={values.link} onChange={handleChange} type="url" name="link" placeholder="Ссылка на картинку" required pattern="https://.*" />
        <span className="popup__input-error inputPlaceLink-error"></span>
      </label>
    </PopupWithForm>
  );
}