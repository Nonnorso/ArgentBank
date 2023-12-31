import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import Layout from "../components/Layout";
import SignIn from "../pages/ConectionPage";
import Error404 from "../pages/Error404";
import { ProtectedRoute } from "../components/ProtectedRoute";

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
        element: (
          <ProtectedRoute>
            <UserPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "sign-in",
        element: <SignIn />
      },
      {
        path: "*",
        element: <Error404 />
      },
    ],
  },
]);

export default Router;