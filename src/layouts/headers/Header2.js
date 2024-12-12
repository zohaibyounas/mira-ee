import Link from "next/link";
import { useState, useEffect } from "react";
import appData from "@data/app.json";
import { headerSticky } from "@common/utilits";
import { useTranslate } from "@/src/contexts/TranslateContext";

const Header2 = ({ darkHeader, cartButton }) => {
  const { t, language, handleTranslate } = useTranslate();
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const languages = [
    { code: "en", label: "English" },
    { code: "de", label: "German" },
  ];

  useEffect(
    function () {
      setSelectedLanguage(language);
    },
    [language]
  );

  const handleChange = (e) => {
    setSelectedLanguage(e.target.value);
    handleTranslate(e.target.value);
  };

  const toggleLanguage = () => {
    const newLanguage = translate === "en" ? "de" : "en";
    setTranslate(newLanguage);
    handleTranslate(newLanguage);
  };

  const navItems = [];

  appData.header.menu.forEach((item, index) => {
    let s_class1 = "dropdown-link";

    if (item.children != 0) {
      s_class1 += "menu-item-has-children";
    }
    let newobj = Object.assign({}, item, { classes: s_class1 });
    navItems.push(newobj);
  });

  const [desktopMenu, desktopMenuToggle] = useState(false);

  const clickedDesktopMenu = (e) => {
    e.preventDefault();
    desktopMenuToggle(!desktopMenu);

    const menuPopup = document.querySelector(".onovo-menu-popup");
    const menuContainer = document.querySelector(".onovo-menu-container");
    const menuBody = document.querySelector("body");
    const menuHeader = document.querySelector(".onovo-header");
    const menuButton = document.querySelector(".onovo-menu-btn");

    if (desktopMenu) {
      menuBody.classList.remove("onovo--noscroll");
      menuHeader.classList.remove("header--active");
      menuPopup.classList.remove("menu--ready");
      menuContainer.classList.add("onovo--noscroll");
      menuButton.parentNode.classList.add("onovo--notouch");
      let timer1 = setTimeout(function () {
        menuPopup.classList.remove("menu--open");
      }, 300);
      let timer2 = setTimeout(function () {
        menuButton.parentNode.classList.remove("onovo--notouch");
        menuPopup.classList.remove("menu--visible");
      }, 1600);
    } else {
      menuBody.classList.add("onovo--noscroll");
      menuHeader.classList.add("header--active");
      menuPopup.classList.add("menu--visible");
      menuPopup.classList.add("menu--open");
      menuButton.parentNode.classList.add("onovo--notouch");
      let timer3 = setTimeout(function () {
        menuButton.parentNode.classList.remove("onovo--notouch");
        menuContainer.classList.remove("onovo--noscroll");
        menuPopup.classList.add("menu--ready");
      }, 600);
    }
  };
  const clickedMobileMenuItemParent = (e) => {
    e.preventDefault();
    e.target.parentNode.classList.toggle("opened");
  };

  useEffect(() => {
    headerSticky();
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className="onovo-header header--white"
        style={{ background: darkHeader && "white" }}
      >
        <div className="header--builder">
          <div className="container">
            <div className="row">
              <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-2 align-self-center">
                {/* Logo */}
                <div className="onovo-logo-image" style={{ maxWidth: "150px" }}>
                  <Link href="/">
                    <img
                      src={appData.header.logo.image}
                      alt={appData.header.logo.alt}
                    />
                    <img
                      className="logo--white"
                      src={appData.header.logo.image_white}
                      alt={appData.header.logo.alt}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-8 col-xs-8 col-sm-8 col-md-4 col-lg-8 align-self-center align-center m-align-right">
                {/* Menu Horizontal */}
                <div
                  className="onovo-menu-horizontal"
                  style={{ color: "black", fontSize: "0.9rem" }}
                >
                  <ul className="onovo-menu-nav">
                    {navItems.map((item, key) => (
                      <li
                        key={`header-nav-item-${key}`}
                        className={item.classes}
                        style={{ color: "black" }}
                      >
                        <Link
                          className={
                            item.children
                              ? ""
                              : "onovo-lnk lnk--active"
                          }
                          onClick={
                            item.children != 0
                              ? (e) => clickedMobileMenuItemParent(e)
                              : ""
                          }
                          href={item.link}
                        >
                          {t(item.label)}
                        </Link>
                        {item.children != 0 && (
                          <i className="icon fas fa-chevron-down" />
                        )}
                        {item.children != 0 && (
                          <ul className="sub-menu">
                            {item.children.map((subitem, key) => (
                              <li key={`header-nav-sub-item-${key}`}>
                                <Link
                                  className="onovo-lnk lnk--active"
                                  // style={{ color: "white" }}
                                  href={subitem.link}
                                >
                                  {t(subitem.label)}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Menu Hamburger */}
                <a
                  className="onovo-menu-btn"
                  style={{ display: "none" }}
                  onClick={(e) => clickedDesktopMenu(e)}
                >
                  <span></span>
                </a>
                <div className="onovo-menu-popup align-left">
                  <div className="onovo-menu-overlay"></div>
                  <div className="onovo-menu-overlay-after"></div>
                  <div className="onovo-menu-container onovo--noscroll">
                    <div className="container">
                      <div className="onovo-menu">
                        <ul className="onovo-menu-nav">
                          {navItems.map((item, key) => (
                            <li
                              key={`header-nav-item-${key}`}
                              className={item.classes}
                            >
                              <Link
                                className={
                                  item.children
                                    ? "onovo-lnk lnk--active onovo-dropdown-toggle"
                                    : "onovo-lnk lnk--active"
                                }
                                onClick={
                                  item.children != 0
                                    ? (e) => clickedMobileMenuItemParent(e)
                                    : ""
                                }
                                href={item.link}
                              >
                                {t(item.label)}
                              </Link>
                              {item.children != 0 && (
                                <i className="icon fas fa-chevron-down" />
                              )}
                              {item.children != 0 && (
                                <ul className="sub-menu">
                                  {item.children.map((subitem, key) => (
                                    <li key={`header-nav-sub-item-${key}`}>
                                      <Link
                                        className="onovo-lnk lnk--active"
                                        href={subitem.link}
                                      >
                                        {t(subitem.label)}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-2 align-self-center align-right hide-on-mobile-extra">
                <div >
                  <img src="/assets/lang.png"    alt={`flag`}  className="h-[30px] w-[30px]"  />

                  <select
                  value={selectedLanguage}
                  onChange={handleChange}
                  style={{ marginTop: "0.1rem", width: "46%" }}
                  >

                    {languages.map((language) => (
                        <option key={language.code} value={language.code}>
                          {language.label}
                        </option>
                    ))}
                  </select>
                </div>
              

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header2;
