const BASE = "https://www.themealdb.com/api/json/v1/1";

export const findMealByName = (name) => {
  return fetch(`${BASE}/search.php?s=${name}`)
    .then((response) => response.json())
    .then((data) => data.meals ?? []);
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

export const filterData = (type, value) => {
  return fetch(`${BASE}/filter.php?${type}=${value}`).then((response) =>
    response.json().then((data) => data.meals)
  );
};

export const getAreas = () => {
  return fetch(`${BASE}/list.php?a=list`)
    .then((response) => response.json())
    .then((data) =>
      data.meals
        .filter((item) => item.strArea !== "Russian")
        .map((item) => ({ value: item.strArea, label: item.strArea }))
    );
};

export const getCategories = () => {
  return fetch(`${BASE}/list.php?c=list`)
    .then((response) => response.json())
    .then((data) =>
      data.meals.map((item) => ({
        value: item.strCategory,
        label: item.strCategory,
      }))
    );
};

export const getIngredients = () => {
  return fetch(`${BASE}/list.php?i=list`)
    .then((response) => response.json())
    .then((data) =>
      data.meals.map((item) => ({
        value: item.strIngredient,
        label: item.strIngredient,
      }))
    );
};
