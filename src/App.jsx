import Home from "./routes/Home.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Error from "./routes/Error.jsx";
import About from "./routes/About.jsx";
import { RouteList } from "./routes/route-list.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<Error />}>
      <Route element={<Home />} path={RouteList.home} />
      <Route element={<About />} path={RouteList.about} />
    </Route>
  )
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
