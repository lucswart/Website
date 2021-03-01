import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Head from "next/head";

export default function Websites() {
  return (
    <>
      <Head>
        <title>Websites | Byte24</title>
        <meta
          name="description"
          content="Logo of andere designs nodig? Byte24 is de bestemming voor al uw benodigdheden op het gebied van app- en webdevelopment."
        />
        <meta property="og:title" content="Design | Byte24" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://byte24.nl/diensten/design" />
        <meta property="og:image" content="/byteDesignThumb.jpg" />
        <meta
          property="og:description"
          content="Logo of andere designs nodig? Byte24 is de bestemming voor al uw benodigdheden op het gebied van app- en webdevelopment."
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
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <header className="hero container-fluid">
        <Nav />
        <div class="hero__body text-center col-lg-8 px-0 mx-auto">
          <motion.h1 layoutId="title2" className="hero__title mb-3">
            <span class="highlight" style={{ color: "#26a9e0" }}>
              Design
            </span>
          </motion.h1>
          <motion.p
            class="block__paragraph block__paragraph--big mb-0"
            layoutId="sub2"
          >
            Design is het eerste wat mensen zien bij een bedrijf. Kleuren,
            vormen en tekst spreken mensen onbewust of bewust aan.
          </motion.p>
        </div>
        <motion.div
          class="hero__img-container col-11 col-lg-8 mx-auto p-0 mt-5"
          layoutId="image2"
        >
          <img
            alt="designImg"
            style={{ borderRadius: 20 }}
            class="iphone-mockup__img"
            src={require("../../assets/designs.png")}
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
                  <h3 class="block-12-card-1__title">
                    Staat goed op elk apparaat
                  </h3>
                  <p class="block-12-card-1__paragraph">
                    Of je de site nou op mobiel of desktop bezoekt, de website
                    zal er altijd piek fijn uitzien.
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
                    ernaar om het binnen 2 weken af te hebben.
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
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </div>
                  <h3 class="block-12-card-1__title">Goede SEO</h3>
                  <p class="block-12-card-1__paragraph">
                    Wordt gevonden in elke zoekmachine met de keywords die
                    belangrijk zijn voor jou.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container" style={{ marginTop: 100 }}>
        <div class="col-lg-8 col-xl-7 mx-auto text-center mb-5">
          <h2 class="block__title mb-3">
            <span class="gradientText">Use cases</span>
          </h2>
          <p class="block__paragraph pb-4">
            Waarom is een goede website voor mijn bedrijf zo belangrijk? En hoe
            kan ik daarvan profiteren?
          </p>
        </div>
        <h3>Verbeterde zichtbaarheid</h3>
        <p>
          Door een goed gestructureerde site te laten bouwen, ben je in staat om
          je online zichtbaarheid drastisch te verbeteren. Een
          gebruiksvriendelijke en waardevolle site, die aansluit op de behoeften
          van de doelgroep zal ervoor zorgen dat meer en meer mensen uit je
          doelgroep jouw website en daarmee jouw onderneming vinden. Hiermee
          speelt een site een essentiële rol bij de groei.
        </p>
        <h3>Opbouwen van een relatie met de doelgroep</h3>
        <p>
          Een direct gevolg van een goede site laten maken, is dat je hierdoor
          het contact met de doelgroep kan uitbreiden. Door bijvoorbeeld
          bezoekers te laten inschrijven voor een nieuwsbrief of door te
          reageren op berichten van bezoekers. Ben je in staat om beter in te
          spelen op feedback. Hoe beter de website in elkaar zit. Hoe
          makkelijker en waardevoller het contact is.
        </p>
        <h3>Positioneren als autoriteit op jouw gebied</h3>
        <p>
          Een website waar veel tijd en moeite in is en wordt gestoken, zal zich
          blijven ontwikkelen naarmate de tijd vordert. Door de toenemende
          bezoekersaantallen, die bijvoorbeeld door social media ook zichtbaar
          worden. Positioneer je je als onderneming zijnde steeds meer als
          autoriteit op jouw gebied. Door dit bewijs hebben bezoekers
          automatisch meer vertrouwen in dat waar je als bedrijf voor staat. Wat
          opnieuw de nodige positieve effecten met zich meebrengt.
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
