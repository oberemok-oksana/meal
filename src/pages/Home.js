import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Card from "../components/Card";
import {
  filterData,
  findMealByName,
  getAreas,
  getCategories,
  getIngredients,
} from "../api/index";
import { Link } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import Select from "react-select";

const Home = () => {
  const [mealName, setMealName] = useState("");
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const { data: mealsData, isLoading } = useQuery(["mealData", search], () =>
    findMealByName(mealName)
  );
  const { data: areas, isLoading: isAreasLoading } = useQuery(
    ["areas"],
    getAreas
  );

  const { data: categories, isLoading: isCategoriesLoading } = useQuery(
    ["categories"],
    getCategories
  );

  const { data: ingredients, isLoading: isIngredientsLoading } = useQuery(
    ["ingredients"],
    getIngredients
  );

  const { data: filteredData, isInitialLoading: isFilteredDataLoading } =
    useQuery(
      ["filteredData", selectedType?.value, selectedOption?.value],
      () => filterData(selectedType?.value, selectedOption?.value),
      { enabled: !!selectedType && !!selectedOption }
    );

  const changeMealName = (e) => {
    setMealName(e.target.value);
    setSelectedType(null);
    setSelectedOption(null);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setSearch(mealName);
  };

  if (
    isLoading ||
    isAreasLoading ||
    isFilteredDataLoading ||
    isCategoriesLoading ||
    isIngredientsLoading
  ) {
    return (
      <div className="container loader">
        <PacmanLoader
          color="#EABF00"
          aria-label="Loading Spinner"
          loading={isLoading}
        />
      </div>
    );
  }

  const options = [
    { value: "", label: "Filter by:" },
    { value: "i", label: "Main ingredient" },
    { value: "c", label: "Category" },
    { value: "a", label: "Area" },
  ];

  let optionsValues = [];

  if (selectedType?.value === "a") {
    optionsValues = areas;
  } else if (selectedType?.value === "c") {
    optionsValues = categories;
  } else if (selectedType?.value === "i") {
    optionsValues = ingredients;
  }

  const meals = selectedType && selectedOption ? filteredData : mealsData;

  return (
    <div className="App">
      <div className="container">
        <h1 className="main-title">What meal do you prefer today?</h1>
        <form className="search-form" onSubmit={submitForm}>
          <input
            type="text"
            placeholder="Type name of a meal"
            name="search-input"
            className="search-form__input"
            value={mealName}
            onChange={changeMealName}
          />
          <button type="submit" className="search-form__btn">
            Search
          </button>
        </form>
        <div className="random-container">
          <h2 className="subtitle">Or maybe you want random meal for today?</h2>
          <Link to="/random">
            <button className="random-btn">Click here</button>
          </Link>
        </div>

        <Select
          className="select"
          defaultValue={selectedType}
          onChange={(value) => {
            setMealName("");
            setSelectedType(value);
          }}
          options={options}
          placeholder="Filter by:"
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "#EABF00",
              primary: "black",
            },
          })}
        />
        <Select
          className="select"
          defaultValue={selectedOption}
          onChange={(value) => {
            setMealName("");
            setSelectedOption(value);
          }}
          options={optionsValues}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "#EABF00",
              primary: "black",
            },
          })}
        />

        <ul className="meals">
          {meals.map((item) => (
            <Card
              key={item.idMeal}
              id={item.idMeal}
              title={item.strMeal}
              area={item.strArea}
              category={item.strCategory}
              src={item.strMealThumb}
              item={item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
