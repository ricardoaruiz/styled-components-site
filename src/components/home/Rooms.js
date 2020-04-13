import React from "react";
import styled from "styled-components";

import Section from "../globals/Section";
import Title from "../globals/Title";
import Room from "./Room";

import { setColor, media, setRem } from "../../styles";

import roomsData from "./rooms-data";

const Rooms = () => {
  const renderRooms = () => {
    return roomsData.map((room) => (
      <Room key={room.id} img={room.img} title={room.title} price={room.price}>
        <p>{room.info}</p>
      </Room>
    ));
  };

  return (
    <Section color={setColor.lightGray}>
      <Title title="our rooms" center />
      <RoomsCenter>{renderRooms()}</RoomsCenter>
    </Section>
  );
};

const RoomsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: ${setRem(30)};

  ${media.desktop` 
    width: 100%;
    padding: 0 ${setRem(50)};
    /* grid-template-columns: repeat(3, 1fr); */
  `};
`;

export default Rooms;
