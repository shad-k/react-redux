import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import PeoplePage from "./pages/PeoplePage";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/people" component={PeoplePage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
