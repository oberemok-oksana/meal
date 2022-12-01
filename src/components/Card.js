const filterIngredients = (item) => {
  const ingredients = [];
  for (let ingredient in item) {
    if (ingredient.startsWith("strIng") && item[ingredient] !== "") {
      ingredients.push(item[ingredient]);
    }
  }
  return ingredients;
};

const Card = (props) => {
  const ingredients = filterIngredients(props.item).join(", ");
  console.log(ingredients);
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
            <div class="card-read">Read</div>
          </div>
          <img src={props.src} alt={props.title} class="card-media" />
        </div>
        <div class="card-shadow"></div>
      </div>
    </li>
  );
};

export default Card;
