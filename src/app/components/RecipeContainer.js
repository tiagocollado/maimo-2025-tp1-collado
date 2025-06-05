"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Loading from "@/app/components/Loading";

const RecipeContainer = ({ id }) => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getRecipe();
  }, [id]);

  if (loading) return <Loading />;
  if (error || !recipe) return <p>There was an error loading the recipe.</p>;

  return (
    <div className="receta_detalle">
      <Link href="/" className="volver_button">
        ← Back to recipes
      </Link>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeContainer;
