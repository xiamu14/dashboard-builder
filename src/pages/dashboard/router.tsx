import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { routes } from "./routes";

const RouterPro = React.memo(() => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location}>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          );
        })}
      </Switch>
    </AnimatePresence>
  );
});

export default RouterPro;
