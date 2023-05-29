import Popup from '../../components/popups/Popup';

export default function PopupWithForm(props) {
  const { popupType, isOpen, onClose, popupTitle, formName, inactiveButton, ariaLabel, buttonText, children, onSubmit } = props;

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      popupType={popupType}
    >
      <h2 className="popup__title">{popupTitle}</h2>

      <form action={`${formName}Action`} onSubmit={onSubmit} name={formName} className="popup__form">
        {children}
        <button className={`button popup__submit-button ${inactiveButton ? "popup__submit-button_inactive" : ''}`} type="submit" aria-label={ariaLabel}>{buttonText}</button>
      </form>
    </Popup>
  );
}