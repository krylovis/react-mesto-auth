
import Popup from '../../components/popups/Popup';
import fulfilled from '../../images/fulfilled.svg';
import rejected from '../../images/rejected.svg';

export default function InfoTooltip(props) {
  const { isOpen, onClose, isFulfilled } = props;
  const fulfilledText = `Вы успешно\nзарегистрировались!`;
  const rejectedText = 'Что-то пошло не так!\nПопробуйте ещё раз.';
  const tooltipImg = isFulfilled ? fulfilled : rejected;
  const tooltipText = isFulfilled ? fulfilledText : rejectedText;

  const popupType = 'info-tooltip';
  const containerType = 'popup__container_type_info-tooltip';

  // setTimeout(() => onClose(), 3000);

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      popupType={popupType}
      containerType={containerType}
    >
      <img src={tooltipImg} alt={tooltipText} className="popup__tooltip-img" />
      <p className="popup__tooltip-text">{tooltipText}</p>
    </Popup>
  );
}