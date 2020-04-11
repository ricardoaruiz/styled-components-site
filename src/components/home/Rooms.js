import React from "react";
import styled from "styled-components";

import Section from "../globals/Section";
import Title from "../globals/Title";
import Room from "./Room";

import { setColor, media } from "../../styles";

import roomsData from "./rooms-data";

const Rooms = () => {
  const renderRooms = () => {
    return roomsData.map((room) => (
      <Room img={room.img} title={room.title} price={room.price}>
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
  width: 100vw;
  padding: 0 10px;

  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  ${media.desktop` 
    width: 90vw;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
  `};
`;

export default Rooms;
