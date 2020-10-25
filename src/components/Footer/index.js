import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FaGithub,
  FaMail,
} from "./FooterElements";
import logo from "../../images/LUCOM-02-01.png";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLink to="/signin">Home</FooterLink>
              <FooterLink to="/signin">Services</FooterLink>
              <FooterLink to="/signin">Projecten</FooterLink>
              <FooterLink to="/signin">Over Ons</FooterLink>
              <FooterLink to="/signin">Contact</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              <img src={logo} alt="logo" width="auto" height="100" />
            </SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href="https://github.com/lucswart"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="mailto:info@luccomn.nl"
                target="_blank"
                aria-label="Mail"
              >
                <FaMail />
              </SocialIconLink>
            </SocialIcons>
            <WebsiteRights>
              LUCCOM {new Date().getFullYear()} Alle rechten voorbehouden.
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
