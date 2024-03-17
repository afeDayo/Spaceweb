import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";
import Error from "./pages/Error/Error";
import Layout from "./Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Sun from "./pages/Destination/Planets/Sun";
import Mercury from "./pages/Destination/Planets/Mercury";
import Venus from "./pages/Destination/Planets/Venus";
import Mars from "./pages/Destination/Planets/Mars";
import ProximaCB from "./pages/Destination/Planets/ProximaCB";
import Jupiter from "./pages/Destination/Planets/Jupiter";
import Saturn from "./pages/Destination/Planets/Saturn";
import Uranus from "./pages/Destination/Planets/Uranus";
import Neptune from "./pages/Destination/Planets/Neptune";
import Moon from "./pages/Destination/Planets/Moon";
import Lo from "./pages/Destination/Planets/Lo";
import Europa from "./pages/Destination/Planets/Europa";
import Ganymede from "./pages/Destination/Planets/Ganymede";
import Callisto from "./pages/Destination/Planets/Callisto";
import Titan from "./pages/Destination/Planets/Titan";
import Enceladus from "./pages/Destination/Planets/Enceladus";
import Triton from "./pages/Destination/Planets/Triton";
import Pluto from "./pages/Destination/Planets/Pluto";
import Ceres from "./pages/Destination/Planets/Ceres";
import Eris from "./pages/Destination/Planets/Eris";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/destination/sun" element={<Sun />} />
            <Route path="/destination/mercury" element={<Mercury />} />
            <Route path="/destination/venus" element={<Venus />} />
            <Route path="/destination/mars" element={<Mars />} />
            <Route path="/destination/proximacb" element={<ProximaCB />} />
            <Route path="/destination/jupiter" element={<Jupiter />} />
            <Route path="/destination/saturn" element={<Saturn />} />
            <Route path="/destination/uranus" element={<Uranus />} />
            <Route path="/destination/neptune" element={<Neptune />} />
            <Route path="/destination/moon" element={<Moon />} />
            <Route path="/destination/lo" element={<Lo />} />
            <Route path="/destination/europa" element={<Europa />} />
            <Route path="/destination/ganymede" element={<Ganymede />} />
            <Route path="/destination/callisto" element={<Callisto />} />
            <Route path="/destination/titan" element={<Titan />} />
            <Route path="/destination/enceladus" element={<Enceladus />} />
            <Route path="/destination/triton" element={<Triton />} />
            <Route path="/destination/pluto" element={<Pluto />} />
            <Route path="/destination/ceres" element={<Ceres />} />
            <Route path="/destination/eris" element={<Eris />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
