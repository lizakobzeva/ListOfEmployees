import { Route, RouteProps, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/RouteConfig/RouteConfig";

const Router = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default Router;
