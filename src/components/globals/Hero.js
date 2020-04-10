import styled from "styled-components";
import PropTypes from "prop-types";

import { setFlex, setBackground } from "../../styles";

const Hero = styled.header`
  min-height: 100vh;

  ${setFlex()};

  ${(props) =>
    setBackground({
      img: props.img,
      position: "center",
      repeat: "no-repeat",
      size: "cover",
      attachment: "fixed",
    })};
`;

Hero.propTypes = {
  img: PropTypes.string.isRequired,
};

export default Hero;
