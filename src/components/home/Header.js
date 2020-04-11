import React from "react";
import Hero from "../globals/Hero";
import Banner from "../globals/Banner";

import homeImg from "../../images/homeBcg.jpeg";
import { PrimaryButton } from "../globals/Button";

const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting="welcome to"
        title="beachwalk resort"
        text="Minim incididunt sint eu officia commodo aliquip. Ut tempor sint 
        excepteur cillum. Enim labore laboris eiusmod cillum laborum in aute est. 
        Tempor et officia ipsum excepteur sunt sunt nulla veniam fugiat aliqua 
        mollit nulla laborum quis."
      >
        <PrimaryButton top={20}>view details</PrimaryButton>
        {/* <PrimaryButton as="href" href="http://www.google.com" top={20}>
          view google
        </PrimaryButton> */}
      </Banner>
    </Hero>
  );
};

export default Header;
