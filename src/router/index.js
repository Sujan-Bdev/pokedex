import { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import * as path from "./path";

const Home = lazy(() => import("views/Home"));
const PokemonDetail = lazy(() => import("components/CardDetail"));

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path={path.HOME} component={Home} />
        <Route exact path={`/pokemon/:name`} component={PokemonDetail}/> 
      </Switch>
    </>
  );
};

export default Router;
