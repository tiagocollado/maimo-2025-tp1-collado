import RecipeCard from "@/app/components/RecipeCard";
import parsedData from "@/data/recipes";

const RecipesGrid = () => {
  console.log(parsedData);
  return (
    <div className="recipes_grid">
      {parsedData.recipes.map((recipe, index) => (
        <RecipeCard key={index} image={recipe.image} name={recipe.name} />
      ))}
    </div>
  );
};

export default RecipesGrid;
