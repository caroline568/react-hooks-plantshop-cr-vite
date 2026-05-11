import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");
  const [soldOut, setSoldOut] = useState(new Set());

  // Fetch all plants on page load
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // Handle adding a new plant
  const handleAddPlant = (plantData) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    })
      .then((res) => res.json())
      .then((newPlant) => setPlants([...plants, newPlant]));
  };

  // Handle marking a plant as sold out
  const handleToggleSoldOut = (plantId) => {
    const newSoldOut = new Set(soldOut);
    if (newSoldOut.has(plantId)) {
      newSoldOut.delete(plantId);
    } else {
      newSoldOut.add(plantId);
    }
    setSoldOut(newSoldOut);
  };

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearch={setSearch} />
      <PlantList plants={plants} search={search} soldOut={soldOut} onToggleSoldOut={handleToggleSoldOut} />
    </main>
  );
}

export default PlantPage;
