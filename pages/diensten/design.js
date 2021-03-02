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

      <div class="block-10 position-relative space-between-blocks">
        <div class="block-10__row d-block d-lg-flex row mx-0">
          <div class="block-10__image-column container col-lg-6"></div>
        </div>
        <div class="container">
          <div class="row px-2 flex-row-reverse">
            <div class="col-lg-8">
              <div class="block-10__card">
                <h2 class="block__title mb-3">
                  De huisstijl van je bedrijf is een van de belangrijkste dingen
                </h2>
                <p class="block__paragraph mb-5">
                  Je logo, nieuwsbrief, briefpapier, visitekaartjes en meer zijn
                  belangrijk dat die er goed uit zien. Zorg voor een
                  professionele uitstraling voor je bedrijf.
                </p>
                <div class="row">
                  <div class="col-lg-6">
                    <ul class="list-unstyled p-0 pb-3 pb-lg-0 mb-4 mb-lg-0">
                      <li class="block-10__li d-flex align-items-center">
                        <span class="fr-icon m-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-palette2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5.277l4.147-4.131a.5.5 0 0 1 .707 0l3.535 3.536a.5.5 0 0 1 0 .708L10.261 10H15.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H3a2.99 2.99 0 0 1-2.121-.879A2.99 2.99 0 0 1 0 13.044m6-.21l7.328-7.3-2.829-2.828L6 7.188v5.647zM4.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM15 15v-4H9.258l-4.015 4H15zM0 .5v12.495z" />
                            <path d="M0 12.995V13a3.07 3.07 0 0 0 0-.005z" />
                          </svg>
                        </span>
                        <div class="px-2"></div>
                        <div>
                          <p class="block-10__li-text m-0">Geweldige designs</p>
                        </div>
                      </li>
                      <li class="block-10__li d-flex align-items-center">
                        <span class="fr-icon m-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-palette"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z" />
                          </svg>
                        </span>
                        <div class="px-2"></div>
                        <div>
                          <p class="block-10__li-text m-0">Kleurenpalette</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul class="list-unstyled p-0">
                      <li class="block-10__li d-flex align-items-center">
                        <span class="fr-icon m-0">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            class="bi bi-braces"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z"></path>
                          </svg>
                        </span>
                        <div class="px-2"></div>
                        <div>
                          <p class="block-10__li-text m-0">
                            Volledige gebruikersrechten
                          </p>
                        </div>
                      </li>
                      <li class="block-10__li d-flex align-items-center">
                        <span class="fr-icon m-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-layout-text-window-reverse"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13 6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z" />
                            <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM2 1a1 1 0 0 0-1 1v1h14V2a1 1 0 0 0-1-1H2zM1 4v10a1 1 0 0 0 1 1h2V4H1zm4 0v11h9a1 1 0 0 0 1-1V4H5z" />
                          </svg>
                        </span>
                        <div class="px-2"></div>
                        <div>
                          <p class="block-10__li-text m-0">
                            Alles wat je nodig hebt
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
