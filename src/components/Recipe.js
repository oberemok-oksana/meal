import { Link } from "react-router-dom";
import { cutYoutubeLink, getIngredientsWithMeasures } from "../helpers";

const Recipe = (props) => {
  const { strMeal, strYoutube, strTags, strMealThumb, strInstructions } =
    props.data;

  const youtubeLink =
    "https://www.youtube.com/embed/" + cutYoutubeLink(strYoutube);

  const mealComposition = getIngredientsWithMeasures(props.data);
  const tags = strTags
    ?.split(",")
    .map((item) => "#" + item[0].toLowerCase() + item.slice(1))
    .join("");

  return (
    <div className="card-container">
      <Link to="/">
        <button className="back-button">
          <img src="/images/icons8-u-turn-to-left-32.png" alt="going back" />
        </button>
      </Link>
      <div class="card u-clearfix">
        <h2 class="card-title">{strMeal}</h2>
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
        <img src={strMealThumb} alt={strMeal} class="card-media" />
        <span class="card-description subtle-dark">
          Instructions: {strInstructions}
        </span>
        <div class="card-description subtle-dark iframe-center responsive-iframe">
          <iframe
            // width="600"
            height="315"
            src={youtubeLink}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <span class="card-description subtle-dark bold">{tags}</span>
      </div>

      <div class="card-shadow"></div>
    </div>
  );
};

export default Recipe;
