import React from "react";
import Icon1 from "../../images/projecten/website.png";
import Icon2 from "../../images/projecten/mockupkistenreg.png";
import Icon3 from "../../images/projecten/appmockup.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesP1,
  Button,
} from "./ServicesElements";

const Services = ({ primary, dark, dark2 }) => {
  return (
    <ServicesContainer id="projecten">
      <ServicesH1>Projecten</ServicesH1>
      <ServicesP1>Een overzicht van onze projecten op dit moment.</ServicesP1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Website</ServicesH2>
          <ServicesP>De website van LUCCOM. Gemaakt met React.</ServicesP>
          <Button
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary={primary ? 1 : 0}
            dark={dark ? 1 : 0}
            dark2={dark2 ? 1 : 0}
          >
            Meer weten
          </Button>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Voorraad registratie</ServicesH2>
          <ServicesP>
            Kistenregistratie systeem voor een gemakkelijk overzicht van de
            voorraad en plek waar de kisten staan.
          </ServicesP>
          <Button
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary={primary ? 1 : 0}
            dark={dark ? 1 : 0}
            dark2={dark2 ? 1 : 0}
          >
            Meer weten
          </Button>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Gym app</ServicesH2>
          <ServicesP>Genereer een workout naar jouw keuze.</ServicesP>
          <Button
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary={primary ? 1 : 0}
            dark={dark ? 1 : 0}
            dark2={dark2 ? 1 : 0}
          >
            Meer weten
          </Button>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
