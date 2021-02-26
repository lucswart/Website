import React, { useEffect, useState } from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [naam, setNaam] = useState("");
  const [bericht, setBericht] = useState("");

  function clearFields() {
    setEmail("");
    setNaam("");
    setBericht("");
  }

  function sendMail() {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: naam,
        email: email,
        text: bericht,
        type: "Contact",
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
          ) && clearFields()
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

  function submitForm(t) {
    t.preventDefault();
    if (email != "" && bericht != "" && naam != "") {
      sendMail();
    } else {
      toast.error("Vul alle velden in om een mail te sturen.", {
        position: "top-center",
        style: { backgroundColor: "#A93226" },
        progressStyle: { backgroundColor: "#092f57" },
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

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

  function openChat(e) {
    e.preventDefault();
    $crisp.push(["do", "chat:open"]);
  }

  return (
    <>
      <Head>
        <title>Contact | Byte24</title>
        <meta
          name="description"
          content="Byte24 is de bestemming voor al uw benodigdheden op het gebied van app- en webdevelopment. Neem gelijk contact op om je online project tot realisatie te brengen!"
        />
        <meta property="og:title" content="Contact | Byte24" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://byte24.nl/contact" />
        <meta property="og:image" content="/byteContactThumb.jpg" />
        <meta
          property="og:description"
          content="Byte24 is de bestemming voor al uw benodigdheden op het gebied van app- en webdevelopment. Neem gelijk contact op om je online project tot realisatie te brengen!"
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

      <div class="block-28">
        <div class="container">
          <div class="row h-100">
            <div class="col-lg-6 h-100 block-28__content-side">
              <div class="contact-info">
                <h5 class="contact-info__title mb-3">Kom in contact met ons</h5>
                <p class="contact-info__paragraph mb-5">
                  Wil je geen gebruik maken van het contactformulier? geen
                  probleem, je kunt ons ook bereiken op de volgende manieren.
                </p>
                <div class="mb-5">
                  <h6 class="contact-info__title-2 mb-3">Bedrijf</h6>
                  <p class="d-flex flex-column">
                    <span class="contact-info__item mb-2">
                      <span style={{ fontWeight: "bold" }}>KVK</span> KVK NR
                    </span>
                    <span class="contact-info__item mb-2">
                      <span style={{ fontWeight: "bold" }}>BTW</span> BTW NR
                    </span>
                  </p>
                </div>
                <div class="mb-5">
                  <h6 class="contact-info__title-2 mb-3">Contact</h6>
                  <p class="d-flex flex-column">
                    <span class="contact-info__item mb-2">
                      <i class="fas fa-phone"></i>
                      <span class="mx-2">0681337542</span>
                    </span>
                    <span class="contact-info__item">
                      <i class="fas fa-envelope"></i>
                      <span class="mx-2">info@byte24.nl</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 h-100 block-28__form-side">
              <form
                onSubmit={(e) => submitForm(e)}
                class="contact-form text-center"
              >
                <div class="contact-form__header mb-5">
                  <h6 class="contact-form__title mb-3">Contact Formulier</h6>
                  <p class="contact-form__paragraph mb-0 mx-auto">
                    We ontvangen graag uw bericht. Vraag ons alles, we zullen zo
                    snel mogelijk reageren.
                  </p>
                </div>
                <button
                  class="btn btn-primary w-100"
                  onClick={(e) => openChat(e)}
                >
                  Open live chat
                </button>
                <div class="hr">
                  <span class="hr__or">OF</span>
                </div>
                <input
                  type="text"
                  class="contact-form__input"
                  placeholder="Naam"
                  onChange={(e) => setNaam(e.target.value)}
                  value={naam}
                />
                <input
                  type="email"
                  class="contact-form__input"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <textarea
                  class="contact-form__input"
                  placeholder="Bericht"
                  value={bericht}
                  onChange={(e) => setBericht(e.target.value)}
                ></textarea>
                <button id="submit-btn" class="btn btn-primary w-100">
                  Verstuur
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}
