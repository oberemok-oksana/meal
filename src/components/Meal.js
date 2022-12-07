import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getInfoById } from "../api";
import Recipe from "./Recipe";
import { PacmanLoader } from "react-spinners";

const Meal = () => {
  const params = useParams();
  const { data, isLoading } = useQuery(["meal"], () =>
    getInfoById(params.recipeId)
  );

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

export default Meal;
