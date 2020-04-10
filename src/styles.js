export const setColor = {
  primaryColor: "#af9a7d",
  mainWhite: "#fff",
  mainBlack: "#222",
  mainGray: "#ececec",
  lightGray: "#f7f7f7",
};

export const setFont = {
  main: "font-family: 'Lato', sans-serif;",
  slanted: "font-family: 'Courgette', cursive;",
};

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

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `
    display: flex;
    justify-content: ${x};
    align-items: ${y};
  `;
};
