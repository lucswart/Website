import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Lottie from "react-lottie";
import Link from "next/link";

export default function Home() {
  function submitForm(t) {
    t.preventDefault();
    var n = t.target.querySelector("button");
    if (n.classList.contains("btn--loading")) return !1;
    n.classList.add("btn--loading");
    try {
      setTimeout(function () {
        n.classList.remove("btn--loading");
      }, 2e3);
    } catch (t) {
      console.log(t), n.classList.remove("btn--loading");
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
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:description"
          content="Byte24 is de bestemming voor al uw benodigdheden op het gebied van app- en webdevelopment."
        />
        <meta name="theme-color" content="#ffffff" />
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
      </Head>
      <header className="hero container-fluid">
        <Nav />
        <div className="hero__content container mx-auto">
          <div className="hero__body">
            <div className="row px-0 mx-0">
              <div className="col-lg-6 px-0 mx-0">
                <h1 className="hero__title mb-4">
                  Jouw online project start hier.
                </h1>
                <p className="hero__paragraph mb-5">
                  Van web- tot appdevelopment. BYTE24 brengt jouw online project
                  tot leven.
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

      <div class="block-12 space-between-blocks">
        <div class="container-xl">
          <h1 className="block__title mb-3">Onze services</h1>
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
                Ieder project is uniek en we geven er de volle 100% voor. Je
                maakt deel uit van het bouwproces en wordt op de hoogte gehouden
                van elke stap die genomen wordt.
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
                <h3 class="card-3__title mb-2">Scalable</h3>
                <p class="card-3__paragraph">
                  We handle institutions and courses with thousands of users.
                  Eduflow is built to scale.
                </p>
              </div>
              <div class="card-3 mb-5">
                <span class="fr-icon mx-auto mb-4 dropdown__icon">
                  <i class="far fa-comment-alt"></i>
                </span>
                <h3 class="card-3__title mb-2">Toegankelijkheid</h3>
                <p class="card-3__paragraph">
                  Eduflow is built with WCAG standards in mind and can easily be
                  navigated by keyboard and screen readers.
                </p>
              </div>
            </div>
            <div class="col-lg-5 mx-auto">
              <div class="col-lg-7 px-0 pb-5 mx-auto">
                <div class="card-3 mb-lg-0">
                  <span class="fr-icon mx-auto mb-4 dropdown__icon">
                    <i class="far fa-comment-alt"></i>
                  </span>
                  <h3 class="card-3__title mb-2">Veilig</h3>
                  <p class="card-3__paragraph">
                    We take privacy as seriously as we take learning. Eduflow is
                    FERPA, CSPC and GDPR compliant.
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
                  href="/diensten"
                >
                  Over ons
                </a>
              </div>
              <div class="col-lg-7 px-0 pt-5 mx-auto">
                <div class="card-3 mb-lg-0">
                  <span class="fr-icon mx-auto mb-4 dropdown__icon">
                    <i class="far fa-comment-alt"></i>
                  </span>
                  <h3 class="card-3__title mb-2">Support</h3>
                  <p class="card-3__paragraph">
                    We have support staff covering working hours in both the US
                    and Europe. Our extensive help center supports off-hour
                    queries.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="card-3 mb-5">
                <span class="fr-icon mx-auto mb-4 dropdown__icon">
                  <i class="far fa-comment-alt"></i>
                </span>
                <h3 class="card-3__title mb-2">Betaalbaar</h3>
                <p class="card-3__paragraph">
                  Built by educators, we believe in equitable education for all.
                </p>
              </div>
              <div class="card-3 mb-5">
                <span class="fr-icon mx-auto mb-4 dropdown__icon">
                  <i class="far fa-comment-alt"></i>
                </span>
                <h3 class="card-3__title mb-2">Snelheid</h3>
                <p class="card-3__paragraph">
                  Access Eduflow from your browser. No matter what device you’re
                  using, Eduflow will work right in your browser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-32 space-between-blocks">
        <div className="container">
          <div className="col-lg-8 col-xl-7 mx-auto text-center mb-4">
            <h1 className="block__title">
              Breng de digitale uitstraling van uw bedrijf omhoog.
            </h1>
          </div>
          <div className="text-center mt-1">
            <a href="/contact" className="btn btn-primary">
              Vraag gelijk een offerte aan
            </a>
            <hr style={{ marginTop: 40 }} />
            <h2 className="block__title" style={{ marginTop: 40 }}>
              Of laat ons contact met je opnemen.
            </h2>
            <form onSubmit={(e) => submitForm(e)} class="cta-input mt-4 mb-2">
              <input
                type="email"
                class="cta-input__input flex-grow-1"
                placeholder="Email"
              />
              <button class="cta-input__btn">Verstuur</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
