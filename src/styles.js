import { css } from "styled-components";

/**
 * Define media queries for diferent sizes
 */
const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 769,
  phone: 576,
};

export const media = Object.keys(sizes).reduce((acumulator, label) => {
  acumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acumulator;
}, {});

/**
 * Define all colors
 */
export const setColor = {
  primaryColor: "#af9a7d",
  mainWhite: "#fff",
  mainBlack: "#222",
  mainGray: "#ececec",
  lightGray: "#f7f7f7",
};

/**
 * Define all fonts
 */
export const setFont = {
  main: "font-family: 'Lato', sans-serif;",
  slanted: "font-family: 'Courgette', cursive;",
};

/**
 * Set an background image
 * @param {*} param0
 */
export const setBackground = ({
  img = "",
  color = "rgba(0,0,0,0)",
  position = "top-left",
  repeat = "repeat",
  size = "auto",
  attachment = "scroll",
}) => {
  return `
    background: linear-gradient(${color}, ${color}), url(${img});
    background-position: ${position};
    background-repeat: ${repeat};
    background-size: ${size};
    background-attachment: ${attachment};
  `;
};

/**
 * Set flexbox in a container
 * @param {*} param0
 */
export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `
    display: flex;
    justify-content: ${x};
    align-items: ${y};
  `;
};

/**
 * Return rem value from pixel value. Pixel base is 16
 * @param {number is pixels} number
 */
export const setRem = (number = 16) => {
  return `${number / 16}rem`;
};

export const setLetterSpacing = (number = 2) => {
  return `letter-spacing: ${number}px`;
};

/**
 * Set border in a element
 * @param {*} param0
 */
export const setBorder = ({
  width = "2px",
  style = "solid",
  color = "black",
} = {}) => {
  return `border: ${width} ${style} ${color}`;
};

export const setMargin = ({
  top = "0",
  right = "0",
  bottom = "0",
  left = "0",
} = {}) => {
  return `margin: ${top} ${right} ${bottom} ${left}`;
};

export const setTransition = ({
  property = "all",
  time = "0.3s",
  timing = "ease-in-out",
} = {}) => {
  return `transition: ${property} ${time} ${timing}`;
};
