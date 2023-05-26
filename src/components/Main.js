import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CardListContext } from '../contexts/CardListContext';

import Card from './Card';

export default function Main(props) {
  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete } = props;

  const currentUser = React.useContext(CurrentUserContext);
  const cardList = React.useContext(CardListContext);

  const { name, about, avatar } = currentUser;

  return (
    <main className="content">

      <section className="profile">
        <button className="profile__edit-avatar-button" type="button" aria-label="Редактировать Аватар" onClick={onEditAvatar}>
          <img src={avatar} alt="Аватар" className="profile__avatar" />
        </button>

        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{name}</h1>
            <button className="button profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={onEditProfile}></button>
          </div>
          <p className="profile__subtitle">{about}</p>
        </div>

        <button className="button profile__add-button" type="button" aria-label="Добавить место" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        {cardList.map((card) => (
          <Card key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>

    </main>
  );
}