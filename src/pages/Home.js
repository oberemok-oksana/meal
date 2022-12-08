import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Card from "../components/Card";
import { findMealByName } from "../api/index";
import { Link } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import Select from "react-select";

const Home = () => {
  const [mealName, setMealName] = useState("");
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const { data: mealsData, isLoading } = useQuery(["mealData", search], () =>
    findMealByName(mealName)
  );

  const changeMealName = (e) => {
    setMealName(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setSearch(mealName);
  };

  if (isLoading) {
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
    { value: "ingredient", label: "Main ingredient" },
    { value: "category", label: "Category" },
    { value: "area", label: "Area" },
  ];
  console.log(selectedOption.value);

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
          defaultValue={selectedOption}
          onChange={setSelectedOption}
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
        {/* <div>
          <select name="filter-list" id="filter-list" class="list-choice">
            <option value="empty">Filter by:</option>
            <option className="option" value="main-ingredient">
              Main ingredient
            </option>
            <option className="option" value="category">
              Category
            </option>
            <option value="area">Area</option>
          </select>
        </div> */}

        <ul className="meals">
          {mealsData.map((item) => (
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
