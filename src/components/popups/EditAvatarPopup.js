import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup(props) {
  const { isOpen, onClose, onUpdateAvatar, isLoading } = props;
  const avatarRef = React.useRef();

  React.useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    const { value } = avatarRef.current;
    onUpdateAvatar({ avatar: value, });
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      popupType="new-avatar"
      popupTitle="Обновить аватар"
      formName="newAvatarForm"
      ariaLabel="Сохранить аватар"
      buttonText={isLoading ? "Сохранение..." : "Сохранить"}
      inactiveButton={false}
    >
      <label className="popup__label" htmlFor="inputNewAvatar">
        <input ref={avatarRef} className="popup__input" id="inputNewAvatar" type="url" name="link" placeholder="Ссылка на картинку" required pattern="https://.*" />
        <span className="popup__input-error inputNewAvatar-error"></span>
      </label>
    </PopupWithForm>
  );
}