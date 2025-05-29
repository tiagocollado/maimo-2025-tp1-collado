"use client";

import { useState, useEffect } from "react";
import RecipeCard from "@/app/components/RecipeCard";
import axios from "axios";
import Loading from "@/app/components/Loading";

const RecipesGrid = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://dummyjson.com/recipes");
        const respondeData = response.data.recipes;
        setData(respondeData);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    getData();
  }, []);

  return (
    <div className="recipes_grid">
      {!loading &&
        data.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            image={recipe.image}
            name={recipe.name}
            id={recipe.id}
          />
        ))}
      {loading && <Loading />}
      {error && "HUBO UN ERROR"}
    </div>
  );
};

export default RecipesGrid;
