import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppRoutes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/projects", element: <Projects /> },
  { path: "/skill", element: <Skill /> },
  { path: "/contact", element: <Contact /> },
]);

export default function App() {
  return <RouterProvider router={AppRoutes} />;
}
