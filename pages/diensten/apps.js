import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Head from "next/head";

export default function Apps() {
  return (
    <>
      <Head>
        <title>Apps | Byte24</title>
        <meta
          name="description"
          content="Wil jij een app laten maken? Byte24 is de bestemming voor al uw benodigdheden op het gebied van app- en webdevelopment."
        />
        <meta property="og:title" content="Websites | Byte24" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://byte24.nl/diensten/apps" />
        <meta property="og:image" content="/byteAppsThumb.jpg" />
        <meta
          property="og:description"
          content="Wil jij een app laten maken? Byte24 is de bestemming voor al uw benodigdheden op het gebied van app- en webdevelopment."
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
        <div class="hero__body text-center col-lg-8 px-0 mx-auto">
          <motion.h1 layoutId="title1" className="hero__title mb-3">
            <span class="highlight">Apps</span>
          </motion.h1>
          <motion.p
            class="block__paragraph block__paragraph--big mb-0"
            layoutId="sub1"
          >
            Apps zijn voor 89% verantwoordelijk voor de totale mobiele
            mediatijd. Het is daarom van belang om je klanten de beste mobiele
            ervaring te bieden.
          </motion.p>
        </div>
        <motion.div
          class="hero__img-container col-11 col-lg-8 mx-auto p-0 mt-5"
          layoutId="image1"
          style={{ width: "30%" }}
        >
          <img
            alt="appMockup"
            style={{ width: "100%" }}
            class="iphone-mockup__img"
            src={require("../../assets/iphoneMockup.png")}
          />
        </motion.div>
      </header>

      <div class="block-13 space-between-blocks" style={{ marginTop: 100 }}>
        <div class="block-12__shape-for-background"></div>
        <div class="container">
          <div class="col-lg-8 col-xl-7 mx-auto text-center mb-5">
            <h1 class="block__title mb-3">
              Een bouwproces die je verwacht van{" "}
              <span class="gradientText">professionals</span>
            </h1>
            <p class="block__paragraph pb-4">
              Afgeleverd tot op de kleinste puntjes. We gaan door tot je
              tevreden bent.
            </p>
          </div>
          <div class="row px-2 justify-content-center">
            <div class="col-lg-4 mb-2-1rem">
              <div class="block-12-card-1">
                <div class="block-12-card-1__content">
                  <div class="block-12-card-1__icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-cpu"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"
                      ></path>
                    </svg>
                  </div>
                  <h3 class="block-12-card-1__title">Gebouwd voor snelheid</h3>
                  <p class="block-12-card-1__paragraph">
                    Niemand houdt van wachten. Je website wordt op de meest
                    efficiëntste manier gebouwd.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-2-1rem">
              <div class="block-12-card-1">
                <div class="block-12-card-1__content">
                  <div class="block-12-card-1__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-tag"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
                      <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586l7 7L13.586 9l-7-7H2v4.586z" />
                    </svg>
                  </div>
                  <h3 class="block-12-card-1__title">Scherpe prijs</h3>
                  <p class="block-12-card-1__paragraph">
                    Je betaald voor wat je krijgt. Wij zullen daarom altijd
                    goedkoper blijven dan de concurrent.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-2-1rem">
              <div class="block-12-card-1">
                <div class="block-12-card-1__content">
                  <div class="block-12-card-1__icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-briefcase"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"
                      ></path>
                    </svg>
                  </div>
                  <h3 class="block-12-card-1__title">
                    Professionele uitstraling voor uw bedrijf
                  </h3>
                  <p class="block-12-card-1__paragraph">
                    Betere conversie van bezoeker naar klant door eye-catching
                    designs en interactie.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-2-1rem">
              <div class="block-12-card-1">
                <div class="block-12-card-1__content">
                  <div class="block-12-card-1__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-phone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                  </div>
                  <h3 class="block-12-card-1__title">Cross platform</h3>
                  <p class="block-12-card-1__paragraph">
                    Je app is op beide platformen (iOS & Android) te besturen.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-2-1rem">
              <div class="block-12-card-1">
                <div class="block-12-card-1__content">
                  <div class="block-12-card-1__icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-lightning"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"
                      ></path>
                    </svg>
                  </div>
                  <h3 class="block-12-card-1__title">Snelle levertijd</h3>
                  <p class="block-12-card-1__paragraph">
                    Geen maanden wachten totdat je website af is. We streven
                    ernaar om het binnen 1 maand af te ronden.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-2-1rem">
              <div class="block-12-card-1">
                <div class="block-12-card-1__content">
                  <div class="block-12-card-1__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-rulers"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z" />
                    </svg>
                  </div>
                  <h3 class="block-12-card-1__title">Alles op maat</h3>
                  <p class="block-12-card-1__paragraph">
                    Unieke backend en frontend afgestemd op jouw eisen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="block-22 space-between-blocks">
        <div class="container">
          <div class="row px-2">
            <div class="col-lg-10 mx-auto">
              <div class="testimonial-card-3 text-center">
                <svg
                  class="testimonial-card-3__quote-svg"
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9 10.537c1.147.22 2.095.727 2.844 1.52.75.75 1.124 1.83 1.124 3.24 0 1.543-.507 2.777-1.52 3.703-1.015.881-2.27 1.322-3.77 1.322-1.807 0-3.217-.639-4.23-1.917-1.015-1.278-1.522-2.931-1.522-4.959 0-3.041.948-5.487 2.843-7.339C17.565 4.257 20.342 3.22 24 3v2.182c-1.983.264-3.548.837-4.694 1.719-1.102.837-1.741 2.05-1.918 3.636h2.513zm-12.76 0c1.102.22 2.028.727 2.777 1.52.75.75 1.124 1.83 1.124 3.24 0 1.543-.507 2.777-1.52 3.703-1.014.881-2.27 1.322-3.769 1.322-1.807 0-3.218-.639-4.231-1.917C.507 17.127 0 15.474 0 13.446c0-3.041.948-5.487 2.843-7.339C4.783 4.257 7.581 3.22 11.24 3v2.182c-1.984.264-3.549.837-4.695 1.719-1.146.837-1.807 2.05-1.983 3.636H7.14z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p class="testimonial-card-3__paragraph mb-3 mt-4">
                  Byte24 helpt je door het hele proces en haalt het beste uit je
                  ideeën. Samen met jou maken we de best mogelijke app op elk
                  vlak.
                </p>
                <p class="block-22-person mt-4 mb-0">
                  <span>Luc Swart, Byte24</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container" style={{ marginTop: 100 }}>
        <div class="col-lg-8 col-xl-7 mx-auto text-center mb-5">
          <h2 class="block__title mb-3">
            <span class="gradientText">Waarom een app?</span>
          </h2>
          <p class="block__paragraph pb-4">
            Als ondernemer, bedrijf of organisatie wil je de best mogelijke
            service bieden aan jouw doelgroep. Zowel offline als online. Een app
            biedt hier nieuwe kansen; notificaties, toegankelijkheid en veel
            meer.
          </p>
        </div>
        <h3>Verbeterde zichtbaarheid</h3>
        <p>
          De naam van jouw bedrijf in de app store. Bied mensen de mogelijkheid
          om op meerdere manieren met jouw product of dienst in aanraking te
          komen.
        </p>
        <h3>Nieuw klantencontact</h3>
        <p>
          Notificaties zorgen ervoor dat u opvalt bij u klanten en ze meteen op
          de hoogte zijn van de laatste aanbiedingen of nieuws.
        </p>
      </div>

      <div class="container" style={{ marginTop: 100 }}>
        <div class="col-lg-8 col-xl-7 mx-auto text-center mb-5">
          <h2 class="block__title mb-3">
            <span class="gradientText">Web, native of hybride?</span>
          </h2>
          <p class="block__paragraph pb-4">
            Er zijn veel technieken om een mobiele app te ontwikkelen, maar de
            drie hoofdgroepen zijn web apps, native apps en hybride apps. Alle
            drie hebben ze hun voordelen en nadelen. We leggen je uit wat deze
            zijn.
          </p>
        </div>
        <h3>Web apps</h3>
        <p>
          Een web app, ook wel PWA (Progressive Web App) genoemd, is zoals de
          naam al zegt een app gebaseerd op web technologie. Het is in feite een
          website en je kan ook van elke website een web app maken. Daarnaast
          heeft het net zoals een 'echte' app een splashscreen en een icon als
          je het installeert op je apparaat. Echter zijn er ook een hoop
          restricties, de app voelt niet zo snel en toegankelijk aan als een
          native of hybride app en je kan weinig functies van de telefoon zelf
          oppakken zoals In App Purchases en notificaties.
        </p>
        <h3>Native apps</h3>
        <p>
          Native apps zijn apps die gemaakt zijn specifiek voor de
          desbetreffende OS. Android gebruikt C++ en iOS Swift. Het grootste
          voordeel hiervan is dat je alle beschikbare functionaliteiten van het
          apparaat hebt. Echter bevatten Hybride apps de meeste
          functionaliteiten ook en wordt hier vaker voor gekozen, omdat het een
          codebase is in plaat van twee.
        </p>
        <h3>Hybride apps</h3>
        <p>
          De meest gekozen techniek om apps te maken tegenwoordig is gebruik
          maken van een hybride framework zoals React Native. Met een codebase
          kunnen we voor beide platformen een app maken die vrijwel 'native' is.
        </p>
        <h3>Welke techniek moet jij kiezen?</h3>
        <p>
          Dit hangt af van de eisen die jij stelt en verschilt dus per project.
          Neem contact met ons op, zodat wij je hierin kunnen adviseren.
        </p>
      </div>

      <div class="block-29 my-lg-5 px-4 px-sm-5 container space-between-blocks overflow-hidden">
        <div class="row justify-content-center px-lg-5">
          <div class="col-lg-8 mx-auto mb-3 mb-lg-0">
            <h4 class="block-29__title m-0">Overtuigd? Of meer info nodig?</h4>
            <p class="block-29__paragraph mt-3">
              Neem contact met ons op. We staan klaar om je te helpen.
            </p>
          </div>
          <div class="col-lg-4 mx-auto mt-4 mt-xl-0 d-flex flex-row-reverse align-items-center justify-content-center justify-content-lg-start">
            <div class="text-center">
              <a
                class="btn btn-secondary"
                href="/contact"
                style={{ color: "#fff" }}
              >
                <span class="mx-1">Naar contact</span>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="mx-1 bi bi-arrow-right"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
