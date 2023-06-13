import React from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";

function Main({ onEditAvatar, onAddPlace, onEditProfile, onCardClick }) {
  const [nameInput, setNameInput] = React.useState("");
  const [aboutInput, setAboutInput] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([data, cards]) => {
        setNameInput(data.name);
        setAboutInput(data.about);
        setUserAvatar(data.avatar);
        setCards(cards);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img
            className="profile__image"
            onClick={onEditAvatar}
            style={{ backgroundImage: `url(${userAvatar})` }}
            
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{nameInput}</h1>
          <button
            className="profile__button-edit"
            onClick={onEditProfile}
            type="button"
            aria-label="Редактировать"
          ></button>
          <p className="profile__subtitle">{aboutInput}</p>
        </div>
        <button
          className="profile__button-add"
          onClick={onAddPlace}
          type="button"
        ></button>
      </section>
      <section className="card">
        {cards.map((card) => {
          return <Card key={card._id} card={card} onCardClick={onCardClick} />;
        })}
      </section>
    </main>
  );
}

export default Main;
