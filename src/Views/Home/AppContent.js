import React from 'react';
import { Switch, Route } from 'react-router-dom';

const AppContent = props => {

  const renderRoutes = () => {
    const {routes} = props;
    let routesArr = [];
    if (routes !== undefined) {
      if (routes.length > 0) {
        routesArr = routes.map(route => {
          const { component: Comp } = route;
          return (
            <Route
              key={route.layout + route.path}
              exact
              {...route}
              component={() => <Comp/>}
            />
          );
        });
      }
    }

    return routesArr;
  };

  return <Switch>{renderRoutes()}</Switch>;
};
export default AppContent;
