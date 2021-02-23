import React, { useEffect } from "react";

const Nav = (props) => {
  const logo = require("../assets/logo1.png");
  const bodyScrollLock = require("body-scroll-lock");

  useEffect(() => {
    var showDropdown = function (e) {
      e.currentTarget.classList.add("hero-nav__item--show-dropdown");
    };

    var hideDropdown = function (e) {
      e.currentTarget.classList.remove("hero-nav__item--show-dropdown");
    };

    var toggleDropdown = function (e) {
      e.currentTarget.classList.toggle("hero-nav__item--show-dropdown");
    };

    function setupDropdowns(mediaQuery) {
      document
        .querySelectorAll(".hero-nav__item--with-dropdown")
        .forEach(function (liElement) {
          if (mediaQuery.matches) {
            var liElclassList = liElement.classList;
            if (
              !liElclassList.contains("hero-nav__item--dropdown-left") ||
              !liElclassList.contains("hero-nav__item--dropdown-right")
            ) {
              var linkWidth = liElement.getBoundingClientRect().width;
              liElement.querySelector(".dropdown").style.transform =
                "translateX(calc(-50% + " + linkWidth / 2 + "px))";
            }

            liElement.addEventListener("mouseenter", showDropdown);
            liElement.addEventListener("mouseleave", hideDropdown);

            /* If someone resize his browser to small screen */
            var heroNavLink = liElement.querySelector(".hero-nav__link");
            heroNavLink.removeEventListener("click", toggleDropdown);
          } else {
            /* if someone resize his browser to large screen */
            liElement.removeEventListener("mouseenter", showDropdown);
            liElement.removeEventListener("mouseleave", hideDropdown);
            liElement.querySelector(".dropdown").style.transform = "";

            liElement.addEventListener("click", toggleDropdown);
          }
        });
    }

    var mediaQuery = window.matchMedia("(min-width: 992px)");
    /* setup dropdowns on page load */
    setupDropdowns(mediaQuery);
    mediaQuery.addListener(function (mediaQuery) {
      setupDropdowns(mediaQuery);

      if (mediaQuery.matches) {
        var heroMenu = document.querySelector("#hero-menu");
        heroMenu.style.height = "";
        bodyScrollLock.disableBodyScroll(heroMenu);
      }
      bodyScrollLock.enableBodyScroll(heroMenu);
    });

    /* Toggle Menu on mobile */
    var heroMenu = document.querySelector("#hero-menu");
    document.querySelector("[close-nav-menu]").onclick = function (e) {
      heroMenu.classList.toggle("ft-menu--js-show");
      bodyScrollLock.enableBodyScroll(heroMenu);
    };

    document.querySelector("[open-nav-menu]").onclick = function (e) {
      heroMenu.classList.toggle("ft-menu--js-show");
      heroMenu.style.height = window.innerHeight + "px";
      bodyScrollLock.disableBodyScroll(heroMenu);
    };
    /* Close mobile Menu & scroll smoothly */
    function closeMenuAndGoTo(query) {
      document.querySelector("#hero-menu").classList.toggle("ft-menu--js-show");
      setTimeout(() => {
        const element = document.querySelector(query);
        window.scrollTo({
          top: element.getBoundingClientRect().top,
          behavior: "smooth",
        });
      }, 250);
    }

    document
      .querySelector("#hero-menu")
      .querySelectorAll("[href*='#']")
      .forEach(function (link) {
        link.onclick = function (event) {
          event.preventDefault();
          closeMenuAndGoTo(link.getAttribute("href"));
        };
      });

    /* Make the navigation sticky */
    var nav = document.querySelector(".hero-nav");
    window.onscroll = function (e) {
      var logoElement = document.querySelector("[change-src-onscroll]");
      if (window.scrollY > nav.getBoundingClientRect().height) {
        nav.classList.add("hero-nav--is-sticky");
      } else if (window.scrollY === 0) {
        nav.classList.remove("hero-nav--is-sticky");
      }
    };
  }, []);

  return (
    <div class="fixed-nav-container">
      <nav class="hero-nav position-relative container mx-auto px-0">
        <ul class="nav w-100 list-unstyled align-items-center p-0">
          <li class="hero-nav__item">
            <a href="/">
              <img class="hero-nav__logo" src={logo} alt="logo" />
            </a>
            <span class="mx-2"></span>
          </li>
          <li
            id="hero-menu"
            class="flex-grow-1 hero__nav-list hero__nav-list--mobile-menu ft-menu"
          >
            <ul class="hero__menu-content nav flex-column flex-lg-row ft-menu__slider animated list-unstyled p-2 p-lg-0">
              <li class="flex-grow-1">
                <ul class="nav nav--lg-side flex-column-reverse flex-lg-row-reverse list-unstyled align-items-center p-0">
                  <li class="flex-grow-1">
                    <ul class="nav nav--lg-side flex-column-reverse flex-lg-row-reverse list-unstyled align-items-center p-0">
                      <li class="hero-nav__item">
                        <a href="/contact" class="btn btn-primary">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="hero-nav__item">
                    <a href="/overons" class="hero-nav__link">
                      Over ons
                    </a>
                  </li>
                  <li class="hero-nav__item hero-nav__item--with-dropdown">
                    <span class="hero-nav__link" tabindex="1" role="button">
                      <span class="flex-grow-1 mr-2">Diensten</span>
                      <svg
                        class="hero-nav__item-chevron bi bi-chevron-down"
                        width=".8em"
                        height=".8em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        ></path>
                      </svg>
                    </span>
                    <div class="hero-nav__dropdown dropdown dropdown--of-1-columns">
                      <div class="row flex-wrap">
                        <div class="col-lg-12">
                          <span class="dropdown__title mt-0">
                            ONZE DIENSTEN
                          </span>
                          <a href="/diensten/websites" class="dropdown__link">
                            <div>
                              <span class="dropdown__icon">
                                <i class="fas fa-window-maximize"></i>
                              </span>
                            </div>
                            <span class="mx-2"></span>
                            <div class="dropdown__item">
                              <span class="dropdown__item-title">
                                Websites & webshops
                              </span>
                              <p class="dropdown__item-description">
                                Een persoonlijke website of een webshop nodig?
                                Bekijk wat we voor je kunnen doen.
                              </p>
                            </div>
                          </a>
                          <a href="/diensten/apps" class="dropdown__link">
                            <div>
                              <span class="dropdown__icon">
                                <i class="fas fa-mobile"></i>
                              </span>
                            </div>
                            <span class="mx-2"></span>
                            <div class="dropdown__item">
                              <span class="dropdown__item-title">
                                Web & native apps
                              </span>
                              <p class="dropdown__item-description">
                                Ontdek de verschillen tussen native apps en web
                                apps en zie welke het beste bij jouw use-case
                                past.
                              </p>
                            </div>
                          </a>
                          <a href="/diensten/design" class="dropdown__link">
                            <div>
                              <span class="dropdown__icon">
                                <i class="fas fa-pencil-ruler"></i>
                              </span>
                            </div>
                            <span class="mx-2"></span>
                            <div class="dropdown__item">
                              <span class="dropdown__item-title">Design</span>
                              <p class="dropdown__item-description">
                                Design is het eerste wat mensen zien bij een
                                bedrijf. Kleuren, vormen en tekst spreken mensen
                                onbewust of bewust aan.
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="hero-nav__item hero-nav__item--with-dropdown">
                    <span class="hero-nav__link" tabindex="1" role="button">
                      <span class="flex-grow-1 mr-2">Producten</span>
                      <svg
                        class="hero-nav__item-chevron bi bi-chevron-down"
                        width=".8em"
                        height=".8em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        ></path>
                      </svg>
                    </span>
                    <div class="hero-nav__dropdown dropdown dropdown--of-1-columns">
                      <div class="row flex-wrap">
                        <div class="col-lg-12">
                          <span class="dropdown__title mt-0">
                            ONZE PRODUCTEN
                          </span>
                          <a
                            href="/producten/voorraadbeheer"
                            target="_blank"
                            class="dropdown__link"
                          >
                            <div>
                              <span class="dropdown__icon">
                                <i class="fas fa-boxes"></i>
                              </span>
                            </div>
                            <span class="mx-2"></span>
                            <div class="dropdown__item">
                              <span class="dropdown__item-title">
                                Voorraad beheer systeem
                              </span>
                              <p class="dropdown__item-description">
                                Voorraad beheer voor bollenboeren en
                                akkerbouwers.
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="navTriangles">
              <div
                style={{
                  bottom: "15%",
                  transform: "rotate(90deg)",
                  left: 10,
                  position: "absolute",
                  fill: "#fff",
                  opacity: "30%",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="174.462"
                  height="124.886"
                  viewBox="0 0 174.462 124.886"
                >
                  <g>
                    <path d="M0 42.821l81.5 48.07L80.117 0zm2.763 0L78.736 2.252 80.117 88.4zm133.767-12.86l.815 45.777 37.116-23.483zm1.381 2.431l33.856 19.836-33.082 20.982zm-47.7 89.731l29.464 2.763-11.047-27.447zm2.569-1.146l15.457-20.72 9.31 23.068z"></path>
                    <path
                      d="M101.6 22.58L44.63 41.407 68.444 61.63l23.828 20.223z"
                      transform="translate(17.019 8.61)"
                    ></path>
                  </g>
                </svg>
              </div>
              <div
                style={{
                  bottom: "15%",
                  right: 10,
                  position: "absolute",
                  fill: "#fff",
                  opacity: "30%",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="174.462"
                  height="124.886"
                  viewBox="0 0 174.462 124.886"
                >
                  <g>
                    <path d="M0 42.821l81.5 48.07L80.117 0zm2.763 0L78.736 2.252 80.117 88.4zm133.767-12.86l.815 45.777 37.116-23.483zm1.381 2.431l33.856 19.836-33.082 20.982zm-47.7 89.731l29.464 2.763-11.047-27.447zm2.569-1.146l15.457-20.72 9.31 23.068z"></path>
                    <path
                      d="M101.6 22.58L44.63 41.407 68.444 61.63l23.828 20.223z"
                      transform="translate(17.019 8.61)"
                    ></path>
                  </g>
                </svg>
              </div>
              <div
                style={{
                  bottom: "5%",
                  right: "30%",
                  position: "absolute",
                  fill: "#fff",
                  opacity: "30%",
                  transform: "rotate(180deg)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="174.462"
                  height="124.886"
                  viewBox="0 0 174.462 124.886"
                >
                  <g>
                    <path d="M0 42.821l81.5 48.07L80.117 0zm2.763 0L78.736 2.252 80.117 88.4zm133.767-12.86l.815 45.777 37.116-23.483zm1.381 2.431l33.856 19.836-33.082 20.982zm-47.7 89.731l29.464 2.763-11.047-27.447zm2.569-1.146l15.457-20.72 9.31 23.068z"></path>
                    <path
                      d="M101.6 22.58L44.63 41.407 68.444 61.63l23.828 20.223z"
                      transform="translate(17.019 8.61)"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <button close-nav-menu="" class="ft-menu__close-btn animated">
              <svg
                class="bi bi-x"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          <li class="hero-nav__item d-lg-none d-flex flex-row-reverse">
            <button open-nav-menu="" class="text-center px-2">
              <i class="fas fa-bars"></i>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
