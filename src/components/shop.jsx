import React from "react";
import Card from "./card";

const Shop = () => {
  const cardList = [2, 3, 4, 5];
  return (
    <div className="shop__container ml2 mr2" id="shop">
      {cardList.map((card) => {
        return <Card key={card} props={card} />;
      })}
    </div>
  );
};

export default Shop;
