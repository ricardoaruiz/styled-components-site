import React from "react";
import styled from "styled-components";
import {
  setColor,
  setRem,
  setFlex,
  setBackground,
  setBorder,
  setTransition,
  setLetterSpacing,
} from "../../styles";

import { SmallButton } from "../globals/Button";

const Room = (props) => {
  const { className, img, title, price, children } = props;
  return (
    <div className={className}>
      <div className="room-image-container">
        <img className="room-image" src={img} alt={title} />

        <div className="room-price">
          <div className="room-price__value">$ {price}</div>
        </div>
      </div>

      <h3 className="room-title">{title}</h3>
      <div className="room-content">{children}</div>

      <div className="room-actions">
        <SmallButton>more info</SmallButton>
      </div>
    </div>
  );
};

const StyledRoom = styled(Room)`
  display: grid;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 2px 4px 6px rgba(0, 0, 0, 0.5);
  ${setTransition()};

  .room-image-container {
    position: relative;

    .room-image {
      width: 100%;
      display: block;
    }

    .room-price {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;

      visibility: hidden;

      ${setBackground({ color: "rgba(0, 0, 0, 0.2)" })};
      ${setFlex()}

      .room-price__value {
        color: ${setColor.mainWhite};
        ${setBorder({ color: setColor.mainWhite })};
        padding: ${setRem(10)} ${setRem(20)};
        font-size: ${setRem(25)};
      }
    }
  }

  .room-title {
    text-transform: capitalize;
    margin-top: ${setRem(20)};
    padding: 0 ${setRem(10)};
    ${setLetterSpacing(3)};
  }

  .room-content {
    padding: 0 ${setRem(10)} ${setRem(10)};
  }

  .room-actions {
    align-self: self-end;
  }

  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4), 2px 4px 6px rgba(0, 0, 0, 0.8);

    .room-price {
      visibility: visible;
    }
  }
`;

export default StyledRoom;
