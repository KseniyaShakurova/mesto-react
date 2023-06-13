function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <div className="group__item">
      <button className="group__btn-remove" title="Удалить"></button>
      <img
        className="group__image"
        id="btnImg"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="group__text">
        <h2 className="group__title">{props.card.name}</h2>
        <div className="group__conteiner-like">
          <button className="group__btn" type="button" title="Лайк"></button>
          <p className="group__likes-calculator">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
