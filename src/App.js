import { Route, Switch } from "react-router-dom";
import "./App.css";
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
    </Switch>
  );
}

export default App;
