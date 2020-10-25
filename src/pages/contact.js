import React, { useState } from "react";
import Contact from "../components/ContactForm";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import NavbarPages from "../components/NavbarPages";

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarPages toggle={toggle} />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
