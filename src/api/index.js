export const findMealByName = (name) => {
  return fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => response.json())
    .then((data) => data.meals);
};
