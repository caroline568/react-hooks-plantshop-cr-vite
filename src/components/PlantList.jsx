import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, search, soldOut, onToggleSoldOut }) {
  // Filter plants based on search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ul className="cards">
      {filteredPlants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          isOutOfStock={soldOut.has(plant.id)}
          onToggleSoldOut={onToggleSoldOut}
        />
      ))}
    </ul>
  );
}

export default PlantList;
