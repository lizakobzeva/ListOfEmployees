import "./styles/index.scss";
import { Suspense, useEffect } from "react";
import { useTheme } from "./providers/ThemProvider/lib/useTheme";
import { classNames } from "../shared/lib/classNames/classNames";

import Router from "./providers/router";
import NavBar from "widgets/NavBar";
import Loader from "shared/ui/Loader";
import { useAppDispatch } from "./providers/StoreProvider";
import { initAuthData } from "entities/User/model/slice/UserSlice";

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initAuthData());
  });
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <NavBar />

        <Suspense
          fallback={
            <div className="LoaderContainer">
              <Loader />
            </div>
          }
        >
          <Router />
        </Suspense>
      </Suspense>
    </div>
  );
};

export default App;
