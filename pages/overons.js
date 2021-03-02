import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Overons() {
  return (
    <>
      <Head>
        <title>Over ons | Byte24</title>
        <meta
          name="description"
          content="Byte24 is de bestemming voor al uw benodigdheden op het gebied van app- en webdevelopment."
        />
        <meta property="og:title" content="Design | Byte24" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://byte24.nl/overons" />
        <meta property="og:image" content="/byteOveronsThumb.jpg" />
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
        <div class="hero__body text-center col-lg-8 px-0 mx-auto">
          <h1 layoutId="title2" className="hero__title mb-3">
            <span class="gradientText">Over ons</span>
          </h1>
          <p
            class="block__paragraph block__paragraph--big mb-0"
            layoutId="sub2"
          >
            Je bent bij ons aan het juiste adres als je een website, webshop,
            app of design op maat zou willen laten maken. Door onze ervaring op
            deze gebieden weten we altijd een passende oplossing te vinden. Geen
            enkel project is te gek voor ons!
          </p>
        </div>
      </header>

      <div class="text-center col-lg-8 px-0 mx-auto">
        <h3 layoutId="title2" className="hero__title mb-3">
          <span class="highlight">Waar wij voor staan</span>
        </h3>
      </div>

      <div className="block-8-scr space-between-blocks">
        <div className="container position-relative">
          <div className="row px-2 align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6 my-5 my-lg-0 p-lg-5 text-center">
              <div className="block-8-scr__img-container position-relative">
                <img
                  className="block-8-scr__img"
                  src={require("../assets/overons1.svg")}
                />
              </div>
            </div>
            <div className="col-lg-6 position-relative mt-4 mt-lg-0">
              <h1 className="block__title mb-3">Klantgedrevenheid</h1>
              <p className="block__paragraph block__paragraph--big mb-0">
                De klant staat bij ons te allen tijde voorop wij stoppen pas als
                de klant tevreden is met het resultaat en een goed gevoel hebben
                bij het eindproduct. Communicatie met de klant staat hier voorop
                wij geven wekelijkse updates en houden de klanten op de hoogte
                waar hun project staat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="block-8-scr space-between-blocks">
        <div className="container position-relative">
          <div className="row px-2 align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6 position-relative mt-4 mt-lg-0">
              <h1 className="block__title mb-3">Eerlijke prijs</h1>
              <p className="block__paragraph block__paragraph--big mb-0">
                Wij rekenen altijd een eerlijke prijs voor het product of een
                van onze designs. Wel zullen mensen denken dat wij duurder zijn
                dit komt omdat wij in tegenstelling tot veel bedrijven ieder
                product, website of app vanaf niets creëren. Dus geen standaard
                Wix site of Wordpress, nee volledig custom naar al uw wensen.
              </p>
            </div>
            <div className="col-lg-6 my-5 my-lg-0 p-lg-5 text-center">
              <div className="block-8-scr__img-container position-relative">
                <img
                  className="block-8-scr__img"
                  src={require("../assets/overons2.svg")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block-8-scr space-between-blocks">
        <div className="container position-relative">
          <div className="row px-2 align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6 my-5 my-lg-0 p-lg-5 text-center">
              <div className="block-8-scr__img-container position-relative">
                <img
                  className="block-8-scr__img"
                  src={require("../assets/overons3.svg")}
                />
              </div>
            </div>
            <div className="col-lg-6 position-relative mt-4 mt-lg-0">
              <h1 className="block__title mb-3">Snelle levering</h1>
              <p className="block__paragraph block__paragraph--big mb-0">
                Onze levertijd hangt af van de grote van het project, wel zijn
                wij altijd reëel en zullen de levertijd van te voren met je
                overleggen.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="hero__body text-center col-lg-8 px-0 mx-auto">
        <h3 layoutId="title2" className="hero__title mb-3">
          <span class="highlight">Het team</span>
        </h3>
        <p class="block__paragraph block__paragraph--big mb-0" layoutId="sub2">
          Byte24 is begonnen door Luc Swart en Lucas Fuhrmann. Samen willen wij
          de hoge prijzen en onduidelijke communicatie in de app en web
          development bestrijden. Door eerlijk te zijn met de klanten en een
          realistisch offerte te maken. Samen met de klant een prachtig
          resultaat neerzetten drijft ons in dit werk. Als wij een project
          sneller moeten afronden hebben wij verschillende freelancers in ons
          netwerk die ons in specifieke stukken van het project kunnen
          ondersteunen. Omdat wij geen vast extra personeel hebben kunnen wij
          zulke scherpe prijzen aanbieden.
        </p>
      </div>

      <div class="block-29 my-lg-5 px-4 px-sm-5 container space-between-blocks overflow-hidden">
        <div class="row justify-content-center px-lg-5">
          <div class="col-lg-8 mx-auto mb-3 mb-lg-0">
            <h4 class="block-29__title m-0">We staan klaar om je te helpen.</h4>
            <p class="block-29__paragraph mt-3">
              Neem contact met ons op of vraag direct een offerte aan.
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
