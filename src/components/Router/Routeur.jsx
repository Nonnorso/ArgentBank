import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "../../pages/HomePage";
import UserPage from "../../pages/UserPage";
import Layout from "../Layout";
import SignIn from "../../pages/ConectionPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "user",
        element: <UserPage />,
        // loader: async ({ params }) => {
        //   return fetch(`/api/v1/user/profile`);
        // }
      },
      {
        path: "sign-in",
        element: <SignIn />
      },
    ],
  },
]);

export default Router;