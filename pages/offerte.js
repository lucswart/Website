import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Offerte() {
  const StepOne = () => {
    return <div></div>;
  };

  const StepTwo = () => {
    return <div></div>;
  };

  const StepThree = () => {
    return <div></div>;
  };

  return (
    <>
      <Head>
        <title>Offerte | Byte24</title>
        <meta
          name="description"
          content="Byte24 is de bestemming voor al uw benodigdheden op het gebied van app- en webdevelopment. Vraag direct een offerte aan."
        />
        <meta property="og:title" content="Offerte | Byte24" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://byte24.nl/offerte" />
        <meta property="og:image" content="/byteContactThumb.jpg" />
        <meta
          property="og:description"
          content="Byte24 is de bestemming voor al uw benodigdheden op het gebied van app- en webdevelopment. Vraag direct een offerte aan."
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
            <span class="gradientText">Offerte aanvragen</span>
          </h1>
        </div>
      </header>

      <div
        className="container text-center"
        style={{ minHeight: "60vh", marginTop: -20 }}
      >
        <h3>Kies jouw soort opdracht</h3>
      </div>

      <Footer />
    </>
  );
}
