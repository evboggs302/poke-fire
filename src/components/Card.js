import React from "react";

const Card = ({
  id,
  name,
  imageUrl,
  attacks,
  addToCollection,
  removeFromCollection,
  inCollection
}) => {
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
      {inCollection ? (
        <button onClick={() => removeFromCollection(id)}>Remove</button>
      ) : (
        <button
          onClick={() =>
            addToCollection({ id, name, attacks, imageUrl, inCollection: true })
          }
        >
          Add
        </button>
      )}
    </div>
  );
};

export default Card;
