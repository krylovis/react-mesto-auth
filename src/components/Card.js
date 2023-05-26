import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const likeButtonClassName = `button element__button element__like ${isLiked && 'element__like_active'}`;
  const { link, name, likes } = card;
  const counter = likes.length;

  const handleClick = () => { onCardClick(link, name); }
  const handleLikeClick = () => { onCardLike(card); }
  const handleDeleteClick = () => { onCardDelete(card); }

  return (
    <div className="element">
      {isOwn && <button className="button element__button element__trash" type="button" aria-label="Удалить место" onClick={handleDeleteClick} />}
      <img src={link} alt={`Фото: ${name}`} className="element__image" onClick={handleClick} />
      <div className="element__container">
        <p className="element__title">{name}</p>
        <div className="element__like-container">
          <button className={likeButtonClassName} type="button" aria-label="Поставить лайк" onClick={handleLikeClick} />
          <span className="element__counter">{counter}</span>
        </div>
      </div>
    </div>
  );
}