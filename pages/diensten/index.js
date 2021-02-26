import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Head from "next/head";

export default function Diensten() {
  return (
    <>
      <Head>
        <title>Diensten | Byte24</title>
        <meta
          name="description"
          content="Byte24 is de bestemming voor al uw benodigdheden op het gebied van app- en webdevelopment."
        />
        <meta property="og:title" content="Diensten | Byte24" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://byte24.nl/diensten" />
        <meta property="og:image" content="/byteDienstenThumb.jpg" />
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
      </header>

      <div class="block-12 space-between-blocks">
        <div class="container">
          <h1 className="block__title mb-3">
            Onze core <span className="gradientText">services</span>
          </h1>
          <p className="block__paragraph block__paragraph--big mb-3">
            Heb jij een idee? Wij voeren het uit! We leveren hoge kwaliteit en
            maatwerk tegen betaalbare prijzen!
          </p>
        </div>
      </div>

      <div class="block-8-iph space-between-blocks">
        <div class="container position-relative">
          <div class="row px-2 align-items-center flex-column-reverse flex-lg-row">
            <div class="col-lg-6 my-5 my-lg-0 text-center position-relative">
              <motion.div
                class="iphone-mockup"
                style={{ width: 500 }}
                layoutId="image"
              >
                <img
                  style={{ width: "100%" }}
                  class="iphone-mockup__img"
                  src={require("../../assets/macScreenshot.png")}
                />
              </motion.div>
              <svg
                class="block-8-iph-iph-blob-svg"
                viewBox="0 0 330 340"
                style={{ color: "#26a9e0" }}
              >
                <path
                  d="M36.2776 135.15C56.2778 60.5085 140.989 18.3532 225.485 40.9939C309.981 63.6345 313.366 129.395 293.366 204.037C273.366 278.678 237.553 333.936 153.058 311.295C68.5616 288.655 16.2774 209.792 36.2776 135.15Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div class="col-lg-6 position-relative">
              <motion.h2
                layoutId="title"
                class="block__title block__title--big mb-3"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <span class="highlight" style={{ color: "#26a9e0" }}>
                  Websites & Webshops
                </span>
              </motion.h2>
              <motion.p
                class="block__paragraph block__paragraph--big mb-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                layoutId="sub"
              >
                Of je nou een blog of een webshop wil, alles is mogelijk. Wij
                kiezen de juiste CMS, betalingsystemen en design voor jouw
                project.
              </motion.p>
              <ul class="block-8-iph__list list-unstyled mb-0">
                <li class="block-8-iph__li d-flex align-items-center">
                  <span class="block-8-iph__li-icon">
                    <svg
                      class="plan-features__icon mx-1"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                      ></path>
                    </svg>
                  </span>
                  <div class="px-2"></div>
                  <span class="block-8-iph__li-text">Snelle levertijd.</span>
                </li>
                <li class="block-8-iph__li d-flex align-items-center">
                  <span class="block-8-iph__li-icon">
                    <svg
                      class="plan-features__icon mx-1"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                      ></path>
                    </svg>
                  </span>
                  <div class="px-2"></div>
                  <span class="block-8-iph__li-text">Responsive.</span>
                </li>
                <li class="block-8-iph__li d-flex align-items-center">
                  <span class="block-8-iph__li-icon">
                    <svg
                      class="plan-features__icon mx-1"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                      ></path>
                    </svg>
                  </span>
                  <div class="px-2"></div>
                  <span class="block-8-iph__li-text">Op maat.</span>
                </li>
              </ul>
              <div class="mt-4 pb-4">
                <Link href="/diensten/websites">
                  <motion.a
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{ color: "#fff" }}
                    class="btn btn-primary"
                  >
                    Ontdek wat we nog meer bieden.
                  </motion.a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="block-8-iph space-between-blocks">
        <div class="container position-relative">
          <div class="row px-2 align-items-center flex-column-reverse flex-lg-row">
            <div class="col-lg-6 position-relative">
              <motion.h2
                layoutId="title1"
                class="block__title block__title--big mb-3"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <span class="highlight">Apps</span>
              </motion.h2>
              <motion.p
                class="block__paragraph block__paragraph--big mb-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                layoutId="sub1"
              >
                Apps zijn voor 89% verantwoordelijk voor de totale mobiele
                mediatijd. Het is daarom van belang om je klanten de beste
                mobiele ervaring te bieden.
              </motion.p>
              <ul class="block-8-iph__list list-unstyled mb-0">
                <li class="block-8-iph__li d-flex align-items-center">
                  <span class="block-8-iph__li-icon">
                    <svg
                      class="plan-features__icon mx-1"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                      ></path>
                    </svg>
                  </span>
                  <div class="px-2"></div>
                  <span class="block-8-iph__li-text">Snelle levertijd.</span>
                </li>
                <li class="block-8-iph__li d-flex align-items-center">
                  <span class="block-8-iph__li-icon">
                    <svg
                      class="plan-features__icon mx-1"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                      ></path>
                    </svg>
                  </span>
                  <div class="px-2"></div>
                  <span class="block-8-iph__li-text">
                    Nieuwste technologieën.
                  </span>
                </li>
                <li class="block-8-iph__li d-flex align-items-center">
                  <span class="block-8-iph__li-icon">
                    <svg
                      class="plan-features__icon mx-1"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                      ></path>
                    </svg>
                  </span>
                  <div class="px-2"></div>
                  <span class="block-8-iph__li-text">Op maat.</span>
                </li>
              </ul>
              <div class="mt-4 pb-4">
                <Link href="/diensten/apps">
                  <motion.a
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{ color: "#fff" }}
                    class="btn btn-primary"
                  >
                    Ontdek wat we nog meer bieden.
                  </motion.a>
                </Link>
              </div>
            </div>
            <div class="col-lg-6 my-5 my-lg-0 text-center position-relative">
              <motion.div class="iphone-mockup" layoutId="image1">
                <img
                  class="iphone-mockup__img"
                  src={require("../../assets/iphoneMockup.png")}
                />
              </motion.div>

              <svg class="block-8-iph-iph-blob-svg" viewBox="0 0 330 340">
                <path
                  d="M36.2776 135.15C56.2778 60.5085 140.989 18.3532 225.485 40.9939C309.981 63.6345 313.366 129.395 293.366 204.037C273.366 278.678 237.553 333.936 153.058 311.295C68.5616 288.655 16.2774 209.792 36.2776 135.15Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="block-8-iph space-between-blocks">
        <div class="container position-relative">
          <div class="row px-2 align-items-center flex-column-reverse flex-lg-row">
            <div class="col-lg-6 my-5 my-lg-0 text-center position-relative">
              <div class="iphone-mockup">
                <img
                  style={{ width: 300, borderRadius: 20 }}
                  class="iphone-mockup__img"
                  src={require("../../assets/designs.png")}
                />
              </div>
              <svg
                class="block-8-iph-iph-blob-svg"
                viewBox="0 0 330 340"
                style={{ color: "#26a9e0" }}
              >
                <path
                  d="M36.2776 135.15C56.2778 60.5085 140.989 18.3532 225.485 40.9939C309.981 63.6345 313.366 129.395 293.366 204.037C273.366 278.678 237.553 333.936 153.058 311.295C68.5616 288.655 16.2774 209.792 36.2776 135.15Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div class="col-lg-6 position-relative">
              <h2 class="block__title block__title--big mb-3">
                <span class="highlight" style={{ color: "#26a9e0" }}>
                  Design
                </span>
              </h2>
              <p class="block__paragraph block__paragraph--big mb-0">
                Design is het eerste wat mensen zien bij een bedrijf. Kleuren,
                vormen en tekst spreken mensen onbewust of bewust aan.
              </p>
              <ul class="block-8-iph__list list-unstyled mb-0">
                <li class="block-8-iph__li d-flex align-items-center">
                  <span class="block-8-iph__li-icon">
                    <svg
                      class="plan-features__icon mx-1"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                      ></path>
                    </svg>
                  </span>
                  <div class="px-2"></div>
                  <span class="block-8-iph__li-text">Snelle levertijd.</span>
                </li>
                <li class="block-8-iph__li d-flex align-items-center">
                  <span class="block-8-iph__li-icon">
                    <svg
                      class="plan-features__icon mx-1"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                      ></path>
                    </svg>
                  </span>
                  <div class="px-2"></div>
                  <span class="block-8-iph__li-text">
                    Alle bestanden die je nodig hebt.
                  </span>
                </li>
                <li class="block-8-iph__li d-flex align-items-center">
                  <span class="block-8-iph__li-icon">
                    <svg
                      class="plan-features__icon mx-1"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                      ></path>
                    </svg>
                  </span>
                  <div class="px-2"></div>
                  <span class="block-8-iph__li-text">Perfecte kleuren.</span>
                </li>
              </ul>
              <div class="mt-4 pb-4">
                <a href="#" class="btn btn-primary">
                  Meer weten
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
