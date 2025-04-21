import { useState } from "react";
import SearchBar from "../components/SearchBar";
import PlantCard from "../components/PlantCard";
import plantData from "../data/plants.json";
import PlantForm from "../components/PlantForm";

// Define the Plant type
type Plant = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const Home = () => {
  // Load the plants from localStorage or fallback to the JSON data
  const [plants, setPlants] = useState<Plant[]>(() => {
    const savedPlants = localStorage.getItem("plants");
    return savedPlants ? JSON.parse(savedPlants) : plantData; 
  });

  // Handle adding a new plant and saving to localStorage
  const handleAddPlant = (newPlant: {
    name: string;
    image: string;
    price: number;
  }) => {
    const newId = plants.length > 0 ? plants[plants.length - 1].id + 1 : 1; // Generate new ID
    const plantWithId = { ...newPlant, id: newId }; // Add the ID to the new plant

    const updatedPlants = [...plants, plantWithId];
    setPlants(updatedPlants);

    // Save updated plants to localStorage
    localStorage.setItem("plants", JSON.stringify(updatedPlants));
  };

  const [searchTerm, setSearchTerm] = useState("");

  // Filter plants based on the search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="">
      <PlantForm onAddPlant={handleAddPlant} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-fit">
        {filteredPlants.map((plant) => (
          <PlantCard
            key={plant.id}
            name={plant.name}
            price={plant.price}
            image={plant.image}
          />
        ))}
      </div>
      <button
        onClick={() => {
          localStorage.removeItem("plants"); 
          setPlants(plantData);
        }}
        className="bg-red-600 text-white py-2 px-4 rounded ml-10 mb-10 mt-4 cursor-pointer"
      >
        Clear Data
      </button>
    </div>
  );
};

export default Home;
