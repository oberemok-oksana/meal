import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getInfoById } from "../api";
import { cutYoutubeLink, getIngredientsWithMeasures } from "../helpers";

const Recipe = () => {
  const params = useParams();
  const { data, isLoading } = useQuery(["meal"], () =>
    getInfoById(params.recipeId)
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const youtubeLink =
    "https://www.youtube.com/embed/" + cutYoutubeLink(data.strYoutube);

  const mealComposition = getIngredientsWithMeasures(data);
  const tags = data.strTags
    ?.split(",")
    .map((item) => "#" + item[0].toLowerCase() + item.slice(1))
    .join("");
  console.log(tags);

  return (
    <div className="card-container">
      <Link to="/">
        <button className="back-button">
          <img src="/images/icons8-u-turn-to-left-32.png" alt="going back" />
        </button>
      </Link>
      <div class="card u-clearfix">
        <h2 class="card-title">{data.strMeal}</h2>
        <div class="card-body">
          <span class="card-description subtle-dark">
            Ingredients:
            <div>
              {Object.entries(mealComposition).map(([ingredient, measure]) => (
                <div>
                  {ingredient}: {measure}
                </div>
              ))}
            </div>
          </span>
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
        </span>
        <span class="card-description subtle-dark bold">{tags}</span>
      </div>

      <div class="card-shadow"></div>
    </div>
  );
};

export default Recipe;
