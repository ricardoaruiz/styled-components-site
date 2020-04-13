import React from "react";

import { SmallButton } from "../../globals/Button";

import * as S from "./styled";

const Room = (props) => {
  const { img, title, price, children } = props;
  return (
    <S.RoomWrapper>
      <S.RoomImageWrapper>
        <S.RoomImage src={img} alt={title} />

        <S.RoomPriceWrapper>
          <S.RoomPrice>$ {price}</S.RoomPrice>
        </S.RoomPriceWrapper>
      </S.RoomImageWrapper>

      <S.RoomTitle>{title}</S.RoomTitle>

      <S.RoomContent>{children}</S.RoomContent>

      <S.RoomActions>
        <SmallButton>more info</SmallButton>
      </S.RoomActions>
    </S.RoomWrapper>
  );
};

export default Room;
