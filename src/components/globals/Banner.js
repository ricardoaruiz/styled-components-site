import React from "react";
import PropTypes from "prop-types";
import styled, { css, keyframes } from "styled-components";
import {
  media,
  setColor,
  setRem,
  setLetterSpacing,
  setBorder,
} from "../../styles";

const fadeIn = (start, point, end) => {
  const animation = keyframes`
    0% {
      opacit: 0;
      transform: translateY(${start});
    }
    50% {
      opacit: 0.5;
      transform: translateY(${point});
    }
    100% {
      opacit: 1;
      transform: translateY(${end});
    }
  `;

  return css`
    animation: ${animation} 3s ease-in-out;
  `;
};

const Banner = (props) => {
  const { className, greeting, title, text, children } = props;

  return (
    <div className={className}>
      <h1>
        {greeting} <span>{title}</span>
      </h1>
      <div className="info">
        <p>{text}</p>
        {children}
      </div>
    </div>
  );
};

const BannerWrapper = styled(Banner)`
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  padding: ${setRem(60)} ${setRem(32)};
  ${setLetterSpacing(3)};
  color: ${setColor.mainWhite};

  h1 {
    text-transform: capitalize;
    font-size: ${setRem(48)};

    color: ${setColor.primaryColor};

    span {
      color: ${setColor.mainWhite};
    }
  }

  p {
    width: 85%;
    margin: 0 auto;
  }

  /* Media for tabled ==> styles.js */
  ${media.tablet`
    width: 70vw;
    ${setBorder({ width: "6px", color: setColor.primaryColor })};

    p {
      width: 75%;
    }
  `}

  h1 {
    ${fadeIn("100%", "-20%", "0%")};
  }
  .info {
    ${fadeIn("-100%", "20%", "0%")};
  }
`;

Banner.defaultProps = {
  className: "",
  greeting: "",
  title: "",
  text: "",
  children: "",
};

Banner.propTypes = {
  className: PropTypes.string,
  greeting: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node,
  ]),
};

export default BannerWrapper;
