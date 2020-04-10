import styled from "styled-components";
import PropTypes from "prop-types";

import { setFlex, setBackground } from "../../styles";

const Hero = styled.header`
  min-height: 100vh;

  ${(props) =>
    setBackground({
      img: props.img,
      color: "rgba(0,0,0,0.5)",
      position: "center",
      repeat: "no-repeat",
      size: "cover",
      attachment: "fixed",
    })};

  ${setFlex()};
`;

Hero.propTypes = {
  img: PropTypes.string.isRequired,
};

export default Hero;
