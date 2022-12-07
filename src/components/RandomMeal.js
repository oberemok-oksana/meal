import { useQuery } from "@tanstack/react-query";
import { PacmanLoader } from "react-spinners";
import { getRandomMeal } from "../api";
import Recipe from "./Recipe";

const RandomMeal = () => {
  const { data, isLoading } = useQuery(["randomMeal"], getRandomMeal);

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

  return <Recipe data={data} />;
};

export default RandomMeal;
