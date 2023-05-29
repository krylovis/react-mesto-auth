import PopupWithForm from './PopupWithForm';

export default function DeleteConfirmationPopup(props) {
  const { isOpen, onClose, onConfirmation } = props;

  function handleSubmit(e) {
    e.preventDefault();
    onConfirmation(true);
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      popupType="delete-confirmation"
      popupTitle="Вы уверены?"
      formName="deleteConfirmation"
      inactiveButton={false}
      ariaLabel="Удалить место"
      buttonText="Да"
    />
  );
}