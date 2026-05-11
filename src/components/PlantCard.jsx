import React from "react";

function PlantCard({ plant, isOutOfStock, onToggleSoldOut }) {
  const handleClick = () => {
    onToggleSoldOut(plant.id);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isOutOfStock ? (
        <button onClick={handleClick}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={handleClick}>
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
