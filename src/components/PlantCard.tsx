import { useState } from "react";

type PlantCardProps = {
  name: string;
  price: number;
  image: string;
};

const PlantCard = ({ name, price, image }: PlantCardProps) => {
  const [inStock, setInStock] = useState(true);

  return (
    <div className="bg-gray-100 rounded-xl shadow-2xs ml-3 overflow-hidden w-full hover:scale-103 transition-transform duration-300">
      <div className="h-70 w-full">
        <img
          src={image}
          alt={name}
          className="mt-4 h-full w-full object-contain"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <p className="text-green-600 font-bold">${price.toFixed(2)}</p>
        </div>
      </div>
      <button
        onClick={() => setInStock(!inStock)}
        className={`w-full cursor-pointer py-2 px-4 rounded text-white transition-transform ${
          inStock ? "bg-green-600 hover:bg-green-700" : "bg-red-500"
        }`}
      >
        {inStock ? "In Stock" : "Not in stock"}
      </button>
    </div>
  );
};

export default PlantCard;
