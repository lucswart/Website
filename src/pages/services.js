import React, { useState } from "react";
import ServicesDetail from "../components/ServicesDetail";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import NavbarPages from "../components/NavbarPages";

const ServicesPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarPages toggle={toggle} />
      <ServicesDetail />
      <Footer />
    </>
  );
};

export default ServicesPage;
