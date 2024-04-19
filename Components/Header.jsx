import React, { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";

const Header = ({ address, setAddress, connectWallet }) => {
  const menuList = [
    { menu: "Home", link: "#home_section" },
    { menu: "About", link: "#about" },
    { menu: "Sale Plan", link: "#sale plan" },
    { menu: "Service", link: "#service" },
    { menu: "Portfolio", link: "#portfolio" },
    { menu: "Contact", link: "#contact" },
  ];

  // State for background color
  const [backgroundColor, setBackgroundColor] = useState("lightBackground");

  // Effect for changing background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setBackgroundColor("darkBackground");
      } else {
        setBackgroundColor("lightBackground");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header_wrap fixed-top ${backgroundColor}`}>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <a
            href="#home_section"
            data-animation="fadeInDown"
            data-animation-delay="1s"
            className="navbar-brand page-scroll animation"
          >
            <img
              src="assets/images/logo.png"
              alt="logo"
              className="logo_light"
            />
            <img
              src="assets/images/logo.png"
              alt="logo"
              className="logo_dark"
            />
          </a>

          <button
            className="navbar-toggler animation"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-animation="fadeInDown"
            data-animation-delay="1.1s"
          >
            <BiMenu />
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto">
              {menuList.map((menu, i) => (
                <li
                  key={i + 1}
                  className="animation"
                  data-animation="fadeInDown"
                  data-animation-delay={`1.${i + 1}s`}
                >
                  <a href={menu.link} className="nav-link">
                    {menu.menu}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="navbar-nav nav_btn align-items-center">
              <li
                className="animation"
                data-animation="fadeInDown"
                data-animation-delay="2s"
              >
                {address ? (
                  <a className="btn btn-default btn-radius nav_item">
                    <small className="new-color">
                      {""}
                      {address.slice(0, 15)}...
                    </small>
                  </a>
                ) : (
                  <a
                    onClick={() => connectWallet()}
                    className="btn btn-default btn-radius nav_item"
                  >
                    <small className="new-color">
                      {""}
                      Connect
                    </small>
                  </a>
                )}
              </li>
            </ul>
          </div>
        </nav>
        {/* Diğer içerik */}
      </div>
    </header>
  );
};

export default Header;
