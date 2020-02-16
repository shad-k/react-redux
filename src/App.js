import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import UsersPage from "./pages/UsersPage";
import Home from "./pages/Home";

import store from "./store";
import theme from "./utils/theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/users" component={UsersPage} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
