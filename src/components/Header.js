import logoheader from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logoheader}
        alt="логотим страницы - Место"
      />
    </header>
  );
}

export default Header;
