import React from "react";
import { useFlipCard } from "./hooks";
import backOfCard from "./back.png";
import "./PlayingCard.css"

function PlayingCard({ front, back = backOfCard, cardInfo }) {
  const [isFacingUp, flipIsFacingUp] = useFlipCard(true);
  return (
    <img
      src={isFacingUp ? front : back}
      alt={isFacingUp ? `${cardInfo.value} of ${cardInfo.suit}` : `${cardInfo.value} of ${cardInfo.suit} card back`}
      onClick={flipIsFacingUp}
      className="PlayingCard Card"
    />
  );

}

export default PlayingCard;

