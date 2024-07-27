import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { RouteList } from "./routes/route-list.js";
import "aos/dist/aos.css";
import { lazy, useEffect } from "react";
import AOS from "aos";
import "./components/Page/Experience/KallaToyotaDmsSalesRedesign.jsx";
import RealNFake from "./components/Page/Experience/RealNFake.jsx";

const Home = lazy(() => import("./routes/Home.jsx"));
const Error = lazy(() => import("./routes/Error.jsx"));
const About = lazy(() => import("./routes/About.jsx"));
const KallaToyotaDmsSalesRedesign = lazy(() =>
  import("./components/Page/Experience/KallaToyotaDmsSalesRedesign.jsx")
);
const LmsUndiknas = lazy(() =>
  import("./components/Page/Experience/LmsUndiknas.jsx")
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<Error />}>
      <Route element={<Home />} path={RouteList.home} />
      <Route element={<About />} path={RouteList.about} />
      <Route
        element={<KallaToyotaDmsSalesRedesign />}
        path={RouteList.experience.kallaDms}
      />
      <Route
        element={<LmsUndiknas />}
        path={RouteList.experience.lmsUndiknas}
      />
      <Route element={<RealNFake />} path={RouteList.experience.realNFake} />
    </Route>
  )
);

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
