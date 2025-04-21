import React, { useState } from "react";

const PlantForm = ({
  onAddPlant,
}: {
  onAddPlant: (plant: { name: string; image: string; price: number }) => void;
}) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPlant = { name, image, price };

    onAddPlant(newPlant);
    setName("");
    setImage("");
    setPrice(0);

    // Show success message
    setMessage("✅ Plant added successfully!");
    setTimeout(() => {
      setMessage("");
    }, 3000); // Clear message after 3 seconds
  };

  return (
    <div className="bg-gray-300 w-full p-6">
      <form onSubmit={handleSubmit} className="flex justify-between items-end flex-wrap gap-4">
        <div>
          <label className="mb-1 font-medium">Plant Name</label>
          <input
            className="border border-gray-400 rounded px-3 py-1 bg-white ml-1"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="example maize"
            required
          />
        </div>
        <div>
          <label className="mb-1 font-medium">Plant URL</label>
          <input
            className="border border-gray-400 rounded px-3 py-1 bg-white ml-1"
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="example ./images/aloe.jpg"
            required
          />
        </div>
        <div>
          <label className="mb-1 font-medium">Plant Price</label>
          <input
            className="border border-gray-400 rounded px-3 py-1 bg-white ml-1"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="example 1235"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded h-fit cursor-pointer"
        >
          Add Plant
        </button>
      </form>

      {message && (
        <p className="text-green-700 font-semibold mt-4">{message}</p>
      )}
    </div>
  );
};

export default PlantForm;
