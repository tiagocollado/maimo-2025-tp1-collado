import Image from "next/image";

const RecipeCard = ({ name, image }) => {
  return (
    <div className="recipe_card">
      <Image src={image} width={300} height={300} alt={name} />
      <h3>{name}</h3>
      <a href="#">Ver más</a>
    </div>
  );
};

export default RecipeCard;
