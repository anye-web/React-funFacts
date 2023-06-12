import logo from "../React-icon.svg.png";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-logo">
          <img src={logo} alt="react logo " className="img-logo" />
          <h1 className="title">ReactFacts</h1>
        </div>
        <ul className="nav-items">
          <li className="nav-list">React Course - Project 1</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
