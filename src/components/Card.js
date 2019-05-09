import React from "react";
// destructure id, name, imageUrl, attacks, addToCollection, removeFromCollection, inCollection
const Card = () => {
  // this is a short-circuit statement where attacks must evaluate to true in order for attacks to map
  const mappedAttacks =
    attacks &&
    attacks.map(attack => {
      return (
        <div key={attack} className="attack">
          Attack: {attack.name}
        </div>
      );
    });
  return (
    <div>
      <img src={imageUrl} />
      <div>{name}</div>
      <div>{mappedAttacks}</div>
      {/* conditonally render add and remove button based on if the card is in the collection */}
    </div>
  );
};

export default Card;
