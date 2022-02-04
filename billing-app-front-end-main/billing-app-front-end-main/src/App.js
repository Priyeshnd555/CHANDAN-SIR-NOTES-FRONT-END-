import logo from "./logo.svg";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import ResponsiveDrawer from "./sidenav";
import { routerConfig } from "./routes";
import { Suspense } from "react";

function App() {
  

  
  return (
    <div className="App">
      <Router>
        <ResponsiveDrawer>
          <Switch>
            {/* <Route path="/login" component={LoginComponent} exact /> */}
            {/* <Route
                exact
                path="/"
                component={() => {
                  return <Redirect to="/home" />;
                }}
              /> */}
            {/* <Wrapper> */}
            <Suspense
              fallback={() => {
                return <div>Loading</div>;
              }}
            >
              {routerConfig.map((route) => {
                return (
                  <Route
                    exact
                    path={route.path}
                    component={route.component}
                    key={route.path}
                  />
                );
              })}
            </Suspense>
            {/* </Wrapper> */}
          </Switch>
        </ResponsiveDrawer>
      </Router>
    </div>
  );
}

export default App;
