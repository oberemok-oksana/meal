const BASE = "http://www.themealdb.com/api/json/v1/1";

export const findMealByName = (name) => {
  return fetch(`${BASE}/search.php?s=${name}`)
    .then((response) => response.json())
    .then((data) => data.meals);
};

export const getInfoById = (id) => {
  return fetch(`${BASE}/lookup.php?i=${id}`)
    .then((response) => response.json())
    .then((data) => data.meals[0]);
};

export const getRandomMeal = () => {
  return fetch(`${BASE}/random.php`)
    .then((response) => response.json())
    .then((data) => data.meals[0]);
};
