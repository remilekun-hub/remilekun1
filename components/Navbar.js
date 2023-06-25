function Navbar() {
  return (
    <header className="header">
      <nav className="container navbar">
        <div
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          REMILEKUN
        </div>
        <div className="nav_menu">
          <ul>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
