import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { setRem, setFont, setLetterSpacing } from "../../styles";

const Title = (props) => {
  const { className, title } = props;
  return <h3 className={className}>{title}</h3>;
};

const TitleStyled = styled(Title)`
  font-size: ${setRem(36)};
  text-transform: capitalize;
  ${setLetterSpacing(5)};
  ${setFont.slanted};
  text-align: ${(props) => (props.center ? "center" : "left")};
`;

Title.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  center: PropTypes.bool,
};

Title.defaultProps = {
  className: "",
  title: "",
  center: false,
};

export default TitleStyled;
