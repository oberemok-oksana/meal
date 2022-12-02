import { useParams } from "react-router-dom";

const Recipe = () => {
  const params = useParams();

  console.log(params.recipeId);

  return <div>Recipe</div>;
};

export default Recipe;
