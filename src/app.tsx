import getProductImages from "@src/helper/product_images";
import Dashboard from "@src/pages/dashboard";
import Home from "@src/pages/home";
import Login from "@src/pages/login";
import productImagesState from "@src/recoil/product_images";
import sessionUtil from "@src/utils/storage/session";
import Matcher from "data-matcher";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSetRecoilState } from "recoil";
function App() {
  const setProductImages = useSetRecoilState(productImagesState);
  useEffect(() => {
    window.onbeforeunload = () => {
      // TODO:  明确刷新时需要清除的数据
      sessionUtil.clear();
    };
    getProductImages().then((res) => {
      const matcher = new Matcher(res.results);
      matcher.pick(["id", "urls"]);
      setProductImages(matcher.data);
    });
  }, [setProductImages]);

  return (
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
  );
}

export default App;
