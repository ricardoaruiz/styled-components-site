import styled from "styled-components";
import PropTypes from "prop-types";

const Hero = styled.header`
  min-height: 100vh;
  background: url(${(props) => props.img}) center/cover fixed no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Hero.propTypes = {
  img: PropTypes.string.isRequired,
};

export default Hero;
