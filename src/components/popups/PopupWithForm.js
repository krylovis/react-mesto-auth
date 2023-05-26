import usePopupClose from '../../hooks/usePopupClose';

export default function PopupWithForm(props) {
  const { popupClass, isOpen, onClose, popupTitle, formName, inactiveButton, ariaLabel, buttonText, children, onSubmit } = props;
  usePopupClose(isOpen, onClose);

  return (
    <section className={`popup popup_type_${popupClass} ${isOpen ? "popup_opened" : ''}`}>
      <div className="popup__container">
        <h2 className="popup__title">{popupTitle}</h2>

        <form action={`${formName}Action`} onSubmit={onSubmit} name={formName} className="popup__form">
          {children}
          <button className={`button popup__submit-button ${inactiveButton ? "popup__submit-button_inactive" : ''}`} type="submit" aria-label={ariaLabel}>{buttonText}</button>
        </form>

        <button className="button popup__close-button" type="button" aria-label="Закрыть форму" onClick={onClose} />
      </div>
    </section >
  );
}