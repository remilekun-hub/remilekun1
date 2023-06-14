import React, { useEffect, useState } from "react";
import "@fontsource/montserrat/500.css";

function Navbar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    console.log({ scroll });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <nav className="container navbar">
        <div>Remilekun</div>
        <div className="nav_menu">
          <ul>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
