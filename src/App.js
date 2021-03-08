import React from "react";
import { Route, Switch } from "react-router-dom";
import InfoHome from "./components/InfoHome";
import Navbar from "./components/Navbar";
import ProductsContainer from "./containers/ProductsContainer";
import SingleProductContainer from "./containers/SingleProductContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={InfoHome} />
        <Route exact path="/products" component={ProductsContainer} />
        <Route exact path="/product/:id" component={SingleProductContainer} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
