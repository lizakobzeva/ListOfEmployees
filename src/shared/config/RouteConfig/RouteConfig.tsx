import { AllUsers } from "pages/AllUsers";
import FullPostPage from "pages/FullPostPage/ui/FullPostPage";
import { LikedUsersPage } from "pages/LikedPostsPage";

import { LoginRegisterPage } from "pages/LoginRegisterPage";
import NotFoundPage from "pages/NotFoundPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  LOGINREGISTER = "loginregister",
  AllUSERS = "allusers",
  FULLPOST = "fullpost",
  LikedUsers = "LikedUsers",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.LOGINREGISTER]: "/",
  [AppRoutes.FULLPOST]: "/:id",
  [AppRoutes.LikedUsers]: "/likedusers",
  [AppRoutes.AllUSERS]: "/allusers",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Array<RouteProps> = [
  {
    path: RoutePath.loginregister,
    element: <LoginRegisterPage />,
  },
  {
    path: RoutePath.fullpost,
    element: <FullPostPage />,
  },
  {
    path: RoutePath.LikedUsers,
    element: <LikedUsersPage />,
  },
  {
    path: RoutePath.allusers,
    element: <AllUsers />,
  },
  {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
];
