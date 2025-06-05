import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ name, image, id }) => {
  return (
    <div className="recipe_card">
      <Image src={image} width={300} height={300} alt={name} />
      <h3>{name}</h3>
      <Link href={`/recipe/${id}`} className="view_more_button">
        See more
      </Link>
    </div>
  );
};

export default RecipeCard;
