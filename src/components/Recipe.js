import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getInfoById } from "../api";
import { cutYoutubeLink, filterIngredients, filterMeasures } from "../helpers";

const Recipe = () => {
  const params = useParams();
  const { data, isLoading } = useQuery(["meal"], () =>
    getInfoById(params.recipeId)
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const ingredients = filterIngredients(data).join(", ") + ".";
  const measures = filterMeasures(data).join(", ") + ".";
  const youtubeLink =
    "https://www.youtube.com/embed/" + cutYoutubeLink(data.strYoutube);
  console.log(youtubeLink);

  return (
    <div className="card-container">
      <div class="card u-clearfix">
        <div class="card-body">
          <h2 class="card-title">{data.strMeal}</h2>
          <span class="card-description subtle-dark">
            Ingredients: {ingredients}
          </span>
          <span class="card-description subtle-dark">Measures: {measures}</span>
        </div>
        <img src={data.strMealThumb} alt={data.strMea} class="card-media" />
        <span class="card-description subtle-dark">
          Instructions: {data.strInstructions}
        </span>
        <span class="card-description subtle-dark iframe-center">
          <iframe
            width="600"
            height="315"
            src={youtubeLink}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          {/* "https://www.youtube.com/watch?v=YsJXZwE5pdY" */}
        </span>
      </div>

      <div class="card-shadow"></div>
    </div>
  );
};

export default Recipe;
