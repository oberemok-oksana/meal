import { Route, Switch } from "react-router-dom";
import "./App.css";
import RandomMeal from "./components/RandomMeal";
import Recipe from "./components/Recipe";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/recipe/:recipeId">
        <Recipe />
      </Route>
      <Route path="/random">
        <RandomMeal />
      </Route>
    </Switch>
  );
}

export default App;
