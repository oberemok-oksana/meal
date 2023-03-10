import { Link } from "react-router-dom";
import { filterIngredients } from "../helpers";

const Card = (props) => {
  const ingredients = filterIngredients(props.item).join(", ");
  return (
    <li>
      <div class="card-container">
        <div class="card u-clearfix">
          <div class="card-body">
            <h2 class="card-title">{props.title}</h2>
            <span class="card-description subtle">
              Ingredients:{" "}
              {ingredients.length < 81
                ? ingredients
                : ingredients.slice(0, 81) + "..."}
            </span>
            <Link className="link" to={`/recipe/${props.id}`}>
              <div class="card-read">Read</div>
            </Link>
          </div>
          <img src={props.src} alt={props.title} class="card-media" />
        </div>
        <div class="card-shadow"></div>
      </div>
    </li>
  );
};

export default Card;
