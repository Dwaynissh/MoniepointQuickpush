import { createBrowserRouter } from "react-router-dom";
import Layout from "../MrPeter/Layout/Layout";
import Homescreen from "../MrPeter/Pages/Homescreen";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homescreen />,
      },
    ],
  },
]);
