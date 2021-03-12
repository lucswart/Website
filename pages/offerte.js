import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "next/head";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Offerte() {
  const [view, setView] = useState("");
  const [email, setEmail] = useState("");
  const [naam, setNaam] = useState("");
  const [bericht, setBericht] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [budget, setBudget] = useState("1000");
  const recaptchaRef = React.createRef();
  const [success, setSuccess] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();

    if (bericht.length < 100) {
      toast.error(
        "Zorg ervoor dat je bericht alle benodigde details bevat. Het moet minimaal 100 karakters zijn.",
        {
          position: "top-center",
          style: { backgroundColor: "#A93226" },
          progressStyle: { backgroundColor: "#092f57" },
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } else {
      fetch("/api/offerte", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: naam,
          email: email,
          budget: budget,
          telefoon: telefoon,
          text: bericht,
          type: view,
        }),
      }).then((res) => {
        res.status === 200
          ? setSuccess(true)
          : toast.error(
              "Error! Als dit probleem blijft, neem dan contact op met onze email of telefoonnummer.",
              {
                position: "top-center",
                style: { backgroundColor: "#A93226" },
                progressStyle: { backgroundColor: "#092f57" },
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
      });
    }
  };

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setTelefoon(value);
  };

  if (success) {
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
        </header>
        <div className="container text-center" style={{ minHeight: "60vh" }}>
          <div id="success-box">
            <div class="dot"></div>
            <div class="dot two"></div>
            <div class="face">
              <div class="eye"></div>
              <div class="eye right"></div>
              <div class="mouth happy"></div>
            </div>
            <div class="shadow scale"></div>
            <div class="message">
              <h1 class="alert">Gelukt!</h1>
              <p>
                Bedankt voor je interesse in onze services. We zullen zo snel
                mogelijk contact met je opnemen.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }

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
      </header>
      <div className="container text-center" style={{ minHeight: "60vh" }}>
        <h1 layoutId="title2">
          <span class="gradientText">Offerte aanvragen</span>
        </h1>
        {view === "" && (
          <>
            <h3>Kies jouw soort opdracht</h3>

            <div className="cardRow mt-5" onClick={() => setView("appsite")}>
              <div class="cardWidth mb-2-1rem">
                <div class="card-1 card-1--selected">
                  <div class="card-1__content">
                    <h3 class="card-1__title">App en/of website</h3>
                    <p class="card-1__paragraph">
                      App of website nodig met bijvoorbeeld een headless CMS of
                      compleet custom backend? Vraag gelijk een offerte aan.
                    </p>
                    <div class="card-1__button-container">
                      <span class="card-1__cta-text">Aanvragen</span>
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

              <div
                class="cardWidth mb-2-1rem"
                onClick={() => setView("design")}
              >
                <div class="card-1 card-1--selected">
                  <div class="card-1__content">
                    <h3 class="card-1__title">Design</h3>
                    <p class="card-1__paragraph">
                      Een huisstijl of logo nodig voor je nieuwe project? Vraag
                      het dan gelijk aan!
                    </p>
                    <div class="card-1__button-container">
                      <span class="card-1__cta-text">Aanvragen</span>
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
            </div>
          </>
        )}
        {view != "" && (
          <>
            <h3>
              {view === "appsite"
                ? "App en/of website aanvragen"
                : "Design aanvragen"}
            </h3>
            <form
              onSubmit={(e) => {
                //recaptchaRef.current.execute();
                handleForm(e);
              }}
              class="contact-form text-center"
              style={{ marginTop: 20, height: "auto", paddingBottom: 100 }}
            >
              <h3>Naam*</h3>
              <input
                type="text"
                class="contact-form__input"
                placeholder="Naam"
                onChange={(e) => setNaam(e.target.value)}
                value={naam}
                required
              />
              <h3>Email*</h3>
              <input
                type="email"
                class="contact-form__input"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <h3>Telefoonnummer</h3>
              <input
                type="text"
                class="contact-form__input"
                placeholder="Telefoonnummer"
                onChange={(e) => handleChange(e)}
                value={telefoon}
                maxlength="10"
              />
              <h3>Budget*</h3>
              <select
                name="budget"
                class="contact-form__input"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="1000">Tot €1000</option>
                <option value="5000">Tot €5000</option>
                <option value="10000">Tot €10000</option>
                <option value="10000+">€10000 of meer</option>
              </select>
              <h3>Beschrijving*</h3>
              <textarea
                class="contact-form__input"
                placeholder="Beschrijf je wensen zo zorgvuldig mogelijk."
                value={bericht}
                onChange={(e) => setBericht(e.target.value)}
                required
              ></textarea>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LdG9nwaAAAAAAV0iU52wD74h3UtNMzLSoPaCKwf"
              />
              <button id="submit-btn" class="btn btn-primary w-100 mt-3">
                Verstuur
              </button>
            </form>
          </>
        )}
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
}
