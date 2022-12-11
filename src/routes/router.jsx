import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import Main from "../layouts/Main/Main";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import Projects from "../pages/Projects/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      ,
      {
        path: "/projects/:id",
        element: <ProjectDetails />
      },
      {
        path: "/blogs",
        element: <Blogs />
      }
    ],
    errorElement: <NotFound />
  }
]);
