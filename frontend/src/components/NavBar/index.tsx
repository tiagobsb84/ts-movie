import { ReactComponent as GitHub } from "assets/img/gitHub.svg";

import "./style.css";

function NavBar() {
  return (
    <header>
      <nav className="container">
        <div className="tsmovie-nav-content">
          <h1>TSmovie</h1>
          <a href="https://github.com/tiagobsb84">
            <div className="tsmovie-contact-container">
              <GitHub />
              <p className="tsmovie-contact-link">/TiagoSilva</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
