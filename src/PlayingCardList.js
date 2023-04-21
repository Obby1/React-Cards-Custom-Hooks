import React from "react";
import uuid from "uuid";
import { useAxios } from "./hooks";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

function CardTable() {
  const [cards, addCard] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard()}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard
            key={uuid()}
            front={cardData.cards[0].image}
            cardInfo={cardData.cards[0]}
          />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
