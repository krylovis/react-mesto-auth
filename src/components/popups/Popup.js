
import usePopupClose from '../../hooks/usePopupClose';

export default function Popup(props) {
  const { isOpen, onClose, popupType, children, containerType } = props;
  const containerTypeClass = containerType ? containerType : '';
  usePopupClose(isOpen, onClose);

  return (
    <section className={`popup popup_type_${popupType} ${isOpen ? "popup_opened" : ''}`}>
      <div className={`popup__container ${containerTypeClass}`}>
        {children}
        <button className="button popup__close-button" type="button" aria-label="Закрыть форму" onClick={onClose} />
      </div>
    </section>
  );
};