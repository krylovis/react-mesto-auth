
import usePopupClose from '../../hooks/usePopupClose';
import fulfilled from '../../images/fulfilled.svg';
import rejected from '../../images/rejected.svg';

export default function InfoTooltip(props) {
  const { isOpen, onClose, isFulfilled } = props;
  usePopupClose(isOpen, onClose);
  const fulfilledText = `Вы успешно\nзарегистрировались!`;
  const rejectedText = 'Что-то пошло не так!\nПопробуйте ещё раз.';
  const tooltipImg = isFulfilled ? fulfilled : rejected;
  const tooltipText = isFulfilled ? fulfilledText : rejectedText;

  setTimeout(() => onClose(), 3000);

  return (
    <section className={`popup popup_type_info-tooltip ${isOpen ? "popup_opened" : ''}`}>
      <div className="popup__container popup__container_type_info-tooltip">
        <img src={tooltipImg} alt={tooltipText} className="popup__tooltip-img" />
        <p className="popup__tooltip-text">{tooltipText}</p>
        <button className="button popup__close-button" type="button" aria-label="Закрыть форму" onClick={onClose}></button>
      </div>
    </section>
  );
}