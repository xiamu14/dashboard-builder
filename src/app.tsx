import Dashboard from "@src/pages/dashboard";
import Home from "@src/pages/home";
import Login from "@src/pages/login";
import sessionUtil from "@src/utils/storage/session";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  useEffect(() => {
    window.onbeforeunload = () => {
      // TODO:  明确刷新时需要清除的数据
      sessionUtil.clear();
    };
  }, []);

  return (
    <RecoilRoot>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/-">
              <Dashboard />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </RecoilRoot>
  );
}

export default App;
