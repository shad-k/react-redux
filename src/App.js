import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import UsersPage from "./pages/UsersPage";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/people" component={UsersPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
