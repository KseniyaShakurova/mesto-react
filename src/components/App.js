import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  return (
    <div className="page">
      <div className="conteiner">
        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />

        <Footer />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name="profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
        >
          <fieldset className="popup__input">
            <label className="popup__form-input">
              <input
                className="popup__info popup__info_input_name"
                name="name"
                id="profile-name"
                type="text"
                placeholder="Ваше имя"
                value="Жак-Ив Кусто"
                minlength="2"
                maxlength="40"
                required
              />
              <span className="popup__error profile-name-error"></span>
            </label>
            <label className="popup__form-input">
              <input
                className="popup__info popup__info_input_job"
                name="job"
                id="job"
                type="text"
                placeholder="Интересное о Вас"
                value="Исследователь океана"
                minlength="2"
                maxlength="200"
                required
              />
              <span className="popup__error job-error"></span>
            </label>
          </fieldset>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name="card"
          title="Новое место"
          buttonText="Сохранить"
        >
          <fieldset class="popup__input">
            <label className="popup__form-input">
              <input
                className="popup__info"
                id="popup__name-card"
                name="card"
                type="text"
                placeholder="Название"
                minlength="2"
                maxlength="30"
                required
              />
              <span className="popup__error popup__name-card-error"></span>
            </label>
            <label className="popup__form-input">
              <input
                className="popup__info"
                id="popup__link-card"
                name="url"
                type="url"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__error popup__link-card-error"></span>
            </label>
          </fieldset>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          name="avatar"
          onClose={closeAllPopups}
          title="Обновить аватар"
          buttonText="Сохранить"
        >
          <fieldset className="popup__input">
            <label className="popup__form-input">
              <input
                className="popup__info"
                id="popup__avatar-card"
                name="avatar"
                type="url"
                placeholder="Ссылка на Ваш аватар"
                required
              />
              <span className="popup__error popup__avatar-card-error"></span>
            </label>
          </fieldset>
        </PopupWithForm>
      </div>
    </div>
  );
}

export default App;
