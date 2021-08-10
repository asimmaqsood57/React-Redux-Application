import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProdeuctDetails from "./containers/ProdeuctDetails";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProdeuctDetails} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
