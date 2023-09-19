import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddNew from "../pages/AddNew";
import AllBooks from "../pages/AllBooks";
import BookDetails from "../pages/BookDetails";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/all-books/:id",
        element: <BookDetails />,
      },
      {
        path: "/add-new",
        element: <AddNew />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
