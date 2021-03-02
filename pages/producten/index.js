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
        <title>Producten | Byte24</title>
        <meta
          name="description"
          content="Byte24 is de bestemming voor al uw benodigdheden op het gebied van app- en webdevelopment."
        />
        <meta property="og:title" content="Producten | Byte24" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://byte24.nl/producten" />
        <meta property="og:image" content="/byteProductenThumb.jpg" />
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
      </Head>
      <header className="hero container-fluid">
        <Nav />
      </header>

      <div class="block-12 space-between-blocks">
        <div class="container">
          <h1 className="block__title mb-3">
            Onze <span className="gradientText">producten</span>
          </h1>
          <p className="block__paragraph block__paragraph--big mb-3">
            Applicaties waar we trots op zijn.
          </p>
        </div>
      </div>

      <div class="block-8-iph space-between-blocks" style={{ height: "60vh" }}>
        <div class="container position-relative">
          <div class="row px-2 align-items-center flex-column-reverse flex-lg-row">
            <div class="col-lg-6 my-5 my-lg-0 text-center position-relative">
              <motion.div
                class="iphone-mockup"
                style={{ width: "100%" }}
                layoutId="image"
              >
                <img
                  alt="websiteImg"
                  style={{ width: "80%" }}
                  class="iphone-mockup__img"
                  src={require("../../assets/voorraadTablet.png")}
                />
              </motion.div>
              <svg class="block-8-iph-iph-blob-svg" viewBox="0 0 330 340">
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
                <span class="highlight">Voorraadbeheer</span>
              </motion.h2>
              <motion.p
                class="block__paragraph block__paragraph--big mb-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                layoutId="sub"
              >
                Beheer gemakkelijk de voorraad van jouw kisten. Zie in een
                overzicht waar de kisten staan, welke partijen erin zitten en
                nog veel meer.
              </motion.p>

              <div class="mt-4 pb-4">
                <motion.a
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  style={{ color: "#fff" }}
                  class="btn btn-primary"
                >
                  Nog niet beschikbaar
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
