import React from "react";
import Navigation from "./partials/Navigation";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Cuisines from "./Cuisines/Cuisines";
import CuisineMenu from "./Cuisines/CuisineMenu";
import Food from "./Food";
import MyBasket from "./MyBasket";


const Home = () => {
  return (
    <Router>
      {/* Navbar */}
      <Navigation />
      <Switch>
        <Route exact path="/" component={Cuisines} />
        <Route exact path="/cuisines/:cuisine" component={CuisineMenu} />
        <Route exact path="/foods/:foodId" component={Food} />
        <Route exact path="/my-basket" component={MyBasket} />
      </Switch>
    </Router>
  );
};

export default Home;
