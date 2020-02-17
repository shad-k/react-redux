import React from "react";
import { Router, BrowserRouter, Switch, Route } from "react-router-dom";
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
        <BrowserRouter>
          <Switch>
            <Route path="/users" component={UsersPage} />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

/* App component for testing.
 * Takes history from the test.
 */
export function AppTest({ history }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
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
