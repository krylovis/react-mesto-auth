
import Popup from '../../components/popups/Popup';

export default function ImagePopup(props) {
  const { card, onClose } = props;
  const { name, link } = card;
  const isData = name && link ? true : false;
  const popupType = 'place-photo';
  const containerType = 'popup__container_type_place-photo';

  return (
    <Popup
      isOpen={isData}
      onClose={onClose}
      popupType={popupType}
      containerType={containerType}
    >
      <img src={link} alt={`Фото: ${name}`} className="popup__photo" />
      <figcaption className="popup__figcaption">{name}</figcaption>
    </Popup>
  );
}