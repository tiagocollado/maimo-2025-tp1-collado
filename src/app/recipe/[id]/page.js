import RecipeContainer from "@/app/components/RecipeContainer";

const Recipe = ({ params }) => {
  const { id } = params;

  return <RecipeContainer id={id} />;
};

export default Recipe;
