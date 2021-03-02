import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Lottie from "react-lottie";
import Link from "next/link";
import TextTransition from "react-text-transition";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TEXTS = ["Website", "App", "Design", "Webshop"];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [telefoonNr, setTelefoonNr] = useState("");
  const [emailAdres, setEmailAdres] = useState("");

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "ceb61c49-5547-48fd-8e08-983e04bd4ca3";

    (function () {
      var d = document;
      var s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []);

  function clearFields() {
    setEmailAdres("");
    setTelefoonNr("");
  }

  async function sendMail(n) {
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Contact opnemen",
        email: emailAdres,
        text: telefoonNr,
        type: "Home",
      }),
    }).then((res) => {
      console.log("Fetch: ", res);
      res.status === 200
        ? toast.success(
            "Verzonden! We nemen zo snel mogelijk contact met je op.",
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              style: { backgroundColor: "#00a69c" },
              progressStyle: { backgroundColor: "#26a9e0" },
              draggable: true,
              progress: undefined,
            }
          ) &&
          n.classList.remove("btn--loading") &&
          clearFields()
        : toast.error("Error!", {
            position: "top-center",
            style: { backgroundColor: "#A93226" },
            progressStyle: { backgroundColor: "#092f57" },
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }) && n.classList.remove("btn--loading");
    });
  }

  function submitForm(t) {
    t.preventDefault();
    if (emailAdres != "") {
      var n = t.target.querySelector("button");
      if (n.classList.contains("btn--loading")) return !1;
      n.classList.add("btn--loading");
      try {
        sendMail(n);
      } catch (t) {
        console.log(t), n.classList.remove("btn--loading");
      }
    } else {
      toast.error(
        "Vul een email in, zodat wij contact met je kunnen opnemen.",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          style: { backgroundColor: "#A93226" },
          progressStyle: { backgroundColor: "#092f57" },
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  }

  const animationData = require("../assets/heroAni.json");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Head>
        <title>Home | Byte24</title>
        <meta
          name="description"
          content="Byte24 is de bestemming voor al uw benodigdheden op het gebied van app- en webdevelopment."
        />
        <meta property="og:title" content="Home | Byte24" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://byte24.nl" />
        <meta property="og:image" content="/logo3.jpg" />
        <meta
          property="og:description"
          content="Byte24 is de bestemming voor al uw benodigdheden op het gebied van app- en webdevelopment."
        />
        <meta name="theme-color" content="#092f57" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <header className="hero container-fluid">
        <Nav />
        <div className="hero__content container mx-auto">
          <div className="hero__body">
            <div className="row px-0 mx-0">
              <div className="col-lg-6 px-0 mx-0">
                <h2 className="hero__title mb-4">
                  Wij zijn jouw eindbestemming voor een{" "}
                  <TextTransition
                    className="underlineText"
                    inline={true}
                    text={TEXTS[index % TEXTS.length]}
                  />
                </h2>
                <p className="hero__paragraph mb-5">
                  Jouw online project start hier. Van web- tot appdevelopment.
                  BYTE24 brengt jouw online project tot leven.
                </p>
                <div className="hero__btns-container">
                  <a
                    className="hero__btn btn btn-primary mb-2 mb-lg-0 mx-1 mx-lg-2"
                    href="/diensten"
                  >
                    Bekijk onze services
                  </a>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="hero__img-container">
                  <Lottie
                    options={defaultOptions}
                    className="hero__img w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="block-13 space-between-blocks">
        <div class="container-xl">
          <h2 className="block__title mb-3">
            Onze core <span className="gradientText">services</span>
          </h2>
          <p className="block__paragraph block__paragraph--big mb-3">
            Heb jij een idee? Wij voeren het uit! We leveren hoge kwaliteit en
            maatwerk tegen betaalbare prijzen!
          </p>
          <div class="row">
            <Link href="/diensten/websites">
              <div class="col-lg-4 mb-2-1rem">
                <div class="card-1">
                  <div class="card-1__content">
                    <h3 class="card-1__title">Websites & webshops</h3>
                    <p class="card-1__paragraph">
                      Of je nou een blog of een webshop wil, alles is mogelijk.
                      Wij kiezen de juiste CMS, betalingsystemen en design voor
                      jouw project.
                    </p>
                    <div class="card-1__button-container">
                      <span class="card-1__cta-text">Meer weten</span>
                      <span class="mx-1"></span>
                      <svg
                        class="card-1__cta-icon"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="card-1__shapes">
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
              </div>
            </Link>
            <Link href="/diensten/apps">
              <div class="col-lg-4 mb-2-1rem">
                <div class="card-1 card-1--selected">
                  <div class="card-1__content">
                    <h3 class="card-1__title">Web & native apps</h3>
                    <p class="card-1__paragraph">
                      Apps zijn voor 89% verantwoordelijk voor de totale mobiele
                      mediatijd. Het is daarom van belang om je klanten de beste
                      mobiele ervaring te bieden.
                    </p>
                    <div class="card-1__button-container">
                      <span class="card-1__cta-text">Meer weten</span>
                      <span class="mx-1"></span>
                      <svg
                        class="card-1__cta-icon"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="card-1__shapes">
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
              </div>
            </Link>
            <Link href="/diensten/design">
              <div class="col-lg-4 mb-2-1rem">
                <div class="card-1">
                  <div class="card-1__content">
                    <h3 class="card-1__title">Design</h3>
                    <p class="card-1__paragraph">
                      Design is het eerste wat mensen zien bij een bedrijf.
                      Kleuren, vormen en tekst spreken mensen onbewust of bewust
                      aan.
                    </p>
                    <div class="card-1__button-container">
                      <span class="card-1__cta-text">Meer weten</span>
                      <span class="mx-1"></span>
                      <svg
                        class="card-1__cta-icon"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="card-1__shapes">
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
              </div>
            </Link>
          </div>
        </div>
        <div class="block-12__shape-for-background"></div>
      </div>

      <div className="block-8-scr space-between-blocks">
        <div className="container position-relative">
          <div className="row px-2 align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6 my-5 my-lg-0 p-lg-5 text-center">
              <div className="block-8-scr__img-container position-relative">
                <img
                  className="block-8-scr__img"
                  src={require("../assets/maatwerk.svg")}
                />
              </div>
            </div>
            <div className="col-lg-6 position-relative mt-4 mt-lg-0">
              <h1 className="block__title mb-3">Maatwerk</h1>
              <p className="block__paragraph block__paragraph--big mb-0">
                Je maakt deel uit van het bouwproces en wordt op de hoogte
                gehouden van elke stap die genomen wordt.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="block-8-scr space-between-blocks"
        style={{ background: "#edecef" }}
      >
        <div className="container position-relative">
          <div className="row px-2 align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6 position-relative mt-4 mt-lg-0">
              <h1 className="block__title mb-3">Van ontwerp tot realisatie</h1>
              <p className="block__paragraph block__paragraph--big mb-5">
                Wij houden het graag simpel en doen waar we goed in zijn. Wij
                ontwikkelen al jouw digitale wensen.
              </p>
            </div>
            <div className="col-lg-6 my-5 my-lg-0 p-lg-5 text-center">
              <div className="block-8-scr__img-container position-relative">
                <img
                  className="block-8-scr__img"
                  src={require("../assets/ontwerp.svg")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block-3 space-between-blocks">
        <div class="container">
          <div class="row px-2 align-items-center">
            <div class="col-lg-3">
              <div class="card-3 mb-5">
                <span class="fr-icon mx-auto mb-4 dropdown__icon">
                  <i class="far fa-comment-alt"></i>
                </span>
                <h3 class="card-3__title mb-2">Schaalbaar</h3>
                <p class="card-3__paragraph">
                  Applicaties gebouwd met schaalbaarheid in gedachte. Geen
                  zorgen over servers die overvol raken.
                </p>
              </div>
              <div class="card-3 mb-5">
                <span class="fr-icon mx-auto mb-4 dropdown__icon">
                  <i class="far fa-comment-alt"></i>
                </span>
                <h3 class="card-3__title mb-2">Toegankelijkheid</h3>
                <p class="card-3__paragraph">
                  Websites gemaakt voor elk platform. Of je het nou op een
                  mobiel of desktop bekijkt, je website is altijd toegankelijk.
                </p>
              </div>
            </div>
            <div class="col-lg-5 mx-auto">
              <div class="col-lg-7 px-0 pb-5 mx-auto">
                <div class="card-3 mb-lg-0">
                  <span class="fr-icon mx-auto mb-4 dropdown__icon">
                    <i class="fas fa-shield-alt"></i>
                  </span>
                  <h3 class="card-3__title mb-2">Veilig</h3>
                  <p class="card-3__paragraph">
                    Beveiliging staat op nummer 1. Al onze websites/applicaties
                    zijn gemaakt met beveiliging voorop.
                  </p>
                </div>
              </div>
              <div class="col-lg-11 px-0 my-5 mx-auto text-center">
                <h1 class="block__title mb-3">Waarom Byte24?</h1>
                <p class="block__paragraph mb-5">
                  We hebben een lange lijst aan redenen waarom je voor ons moet
                  kiezen. Dit zijn er een paar. Ontdek wat ons drijft om de
                  beste applicatie voor jou te maken.
                </p>
                <a
                  className="hero__btn btn btn-primary mb-2 mb-lg-0 mx-1 mx-lg-2"
                  href="/overons"
                >
                  Over ons
                </a>
              </div>
              <div class="col-lg-7 px-0 pt-5 mx-auto">
                <div class="card-3 mb-lg-0">
                  <span class="fr-icon mx-auto mb-4 dropdown__icon">
                    <i class="fas fa-question"></i>
                  </span>
                  <h3 class="card-3__title mb-2">Support</h3>
                  <p class="card-3__paragraph">
                    We staan altijd klaar voor je vragen. Of dit nou voor,
                    tijdens of na aflevering is. We staan altijd voor je klaar.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="card-3 mb-5">
                <span class="fr-icon mx-auto mb-4 dropdown__icon">
                  <i class="fas fa-euro-sign"></i>
                </span>
                <h3 class="card-3__title mb-2">Betaalbaar</h3>
                <p class="card-3__paragraph">
                  Een op maat gemaakte website of app hoeft niet duur te zijn.
                </p>
              </div>
              <div class="card-3 mb-5">
                <span class="fr-icon mx-auto mb-4 dropdown__icon">
                  <i class="fas fa-bolt"></i>
                </span>
                <h3 class="card-3__title mb-2">Snelheid</h3>
                <p class="card-3__paragraph">
                  Niemand houdt van wachten. Naast dat je app of website op de
                  meest efficiëntste manier is gebouwd, hoef je ook geen maanden
                  te wachten tot het klaar is.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-13 space-between-blocks">
        <div className="container">
          <div className="col-lg-8 col-xl-7 mx-auto text-center mb-4">
            <h1 className="block__title">
              Heb jij een <span className="gradientText">project</span>? Wij
              brengen je <span className="gradientText">idee</span> tot leven.
            </h1>
          </div>
          <div className="text-center mt-1">
            <a href="/contact" className="btn btn-primary">
              Vraag gelijk een offerte aan
            </a>
            <hr style={{ marginTop: 60 }} />
            <h2 className="block__title" style={{ marginTop: 40 }}>
              Of laat ons <span className="gradientText">contact</span> met je
              opnemen.
            </h2>
            <form onSubmit={(e) => submitForm(e)} class="cta-input mt-4 mb-2">
              <input
                onChange={(e) => setEmailAdres(e.target.value)}
                value={emailAdres}
                type="email"
                class="cta-input__input flex-grow-1"
                placeholder="Email*"
              />
              <input
                onChange={(e) => setTelefoonNr(e.target.value)}
                value={telefoonNr}
                type="text"
                class="cta-input__input flex-grow-1"
                placeholder="Telefoon"
              />
              <button class="cta-input__btn">Verstuur</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}
