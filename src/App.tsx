import React, { useState } from "react";

const foods = [
  {
    id: 0,
    name: "Sushi",
    description: "Sushi is a traditional Japanese dish."
  },
  {
    id: 1,
    name: "Dal",
    description:
      "Dal contains onions, tomatoes and various spices which may be added"
  },
  {
    id: 2,
    name: "Pierogi",
    description:
      "Pierogi involve wrapping dough around a savoury or sweet filling"
  },
  {
    id: 3,
    name: "Kebab",
    description: "Kebab is a popular meal of skewered meat."
  },
  {
    id: 4,
    name: "Dim sum",
    description:
      "Dim sum is a variety of smaller dishes that can be enjoyed both during lunch or dinner"
  }
];

const FoodSeacher = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e:any) => {
    setSearchText(e.target.value);
  };

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search food..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredFoods.map((food) => (
          <li key={food.id}>
            <h3>{food.name}</h3>
            <p>{food.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodSeacher;