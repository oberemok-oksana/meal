export const findMealByName = (name) => {
  return fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => response.json())
    .then((data) => data.meals);
};

export const getInfoById = (id) => {
  return fetch(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json())
    .then((data) => data.meals[0]);
};

export const getRandomMeal = () => {
  return fetch("www.themealdb.com/api/json/v1/1/random.php").then((response) =>
    response.json()
  );
};
