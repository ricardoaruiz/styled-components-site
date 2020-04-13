import styled from "styled-components";
import {
  setColor,
  setRem,
  setFlex,
  setBackground,
  setBorder,
  setTransition,
  setLetterSpacing,
} from "../../../styles";

export const RoomImageWrapper = styled.div`
  position: relative;
`;

export const RoomImage = styled.img`
  width: 100%;
  display: block;
`;

export const RoomPriceWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;

  visibility: hidden;

  ${setBackground({ color: "rgba(0, 0, 0, 0.2)" })};
  ${setFlex()}
`;

export const RoomPrice = styled.div`
  color: ${setColor.mainWhite};
  ${setBorder({ color: setColor.mainWhite })};
  padding: ${setRem(10)} ${setRem(20)};
  font-size: ${setRem(25)};
`;

export const RoomTitle = styled.h3`
  text-transform: capitalize;
  margin-top: ${setRem(20)};
  padding: 0 ${setRem(10)};
  ${setLetterSpacing(3)};
`;

export const RoomContent = styled.div`
  padding: 0 ${setRem(10)} ${setRem(10)};
`;

export const RoomActions = styled.div`
  align-self: self-end;
`;

export const RoomWrapper = styled.article`
  display: grid;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 2px 4px 6px rgba(0, 0, 0, 0.5);
  ${setTransition()};

  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4), 2px 4px 6px rgba(0, 0, 0, 0.8);

    ${RoomPriceWrapper} {
      visibility: visible;
    }
  }
`;
