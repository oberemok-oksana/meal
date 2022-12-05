export const filterIngredients = (item) => {
  const ingredients = [];
  for (let ingredient in item) {
    if (ingredient.startsWith("strIng") && item[ingredient] !== "") {
      ingredients.push(item[ingredient]);
    }
  }
  return ingredients;
};

export const getIngredientsWithMeasures = (item) => {
  const ingredients = filterIngredients(item);
  const measures = filterMeasures(item);
  const obj = {};
  for (let i = 0; i < ingredients.length; i++) {
    obj[ingredients[i]] = measures[i];
  }

  return obj;
};

export const filterMeasures = (item) => {
  const measures = [];
  for (let measure in item) {
    if (
      measure.startsWith("strMeasure") &&
      item[measure] !== " " &&
      measure.startsWith("strMeasure") &&
      item[measure] !== ""
    ) {
      measures.push(item[measure]);
    }
  }
  return measures;
};

export const cutYoutubeLink = (text) => {
  const index = text.split("").findIndex((letter) => letter === "=");
  return text.slice(index + 1);
};
