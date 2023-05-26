
import usePopupClose from '../../hooks/usePopupClose';

export default function ImagePopup(props) {
  const { card, onClose } = props;
  const { name, link } = card;
  const isData = name && link ? true : false;
  usePopupClose(isData, onClose);

  return (
    <section className={`popup popup_type_place-photo ${isData ? "popup_opened" : ''}`}>
      <figure className="popup__container popup__container_type_place-photo">
        <img src={link} alt={`Фото: ${name}`} className="popup__photo" />
        <figcaption className="popup__figcaption">{name}</figcaption>
        <button className="button popup__close-button" type="button" aria-label="Закрыть форму" onClick={onClose}></button>
      </figure>
    </section>
  );
}