import styled from "styled-components";
import PropTypes from "prop-types";

import {
  setColor,
  setRem,
  setLetterSpacing,
  setFont,
  setBorder,
  setMargin,
  setTransition,
} from "../../styles";

const Button = styled.button`
  display: inline-block;
  text-transform: capitalize;
  outline: none;
  text-decoration: none;

  background: ${setColor.primaryColor};
  color: ${setColor.mainWhite};
  font-size: ${setRem(18)};
  padding: ${setRem(17)} ${setRem(36)};
  ${setTransition()};
  ${setBorder({ color: setColor.primaryColor })};
  ${setLetterSpacing(3)};
  ${setFont.main};

  ${(props) =>
    setMargin({
      top: setRem(props.top),
      right: setRem(props.right),
      bottom: setRem(props.bottom),
      left: setRem(props.left),
    })};

  &:hover {
    background: transparent;
    color: ${setColor.primaryColor};
  }
`;

Button.propTypes = {
  /* top in px */
  top: PropTypes.number,
  /* right in px */
  right: PropTypes.number,
  /* bottom in px */
  bottom: PropTypes.number,
  /* left in px */
  left: PropTypes.number,
};

Button.defaultProps = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

export default Button;
