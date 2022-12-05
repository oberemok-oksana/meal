import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getInfoById } from "../api";
import Recipe from "./Recipe";

const Meal = () => {
  const params = useParams();
  const { data, isLoading } = useQuery(["meal"], () =>
    getInfoById(params.recipeId)
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <Recipe data={data} />;
};

export default Meal;
