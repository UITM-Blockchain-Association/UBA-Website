import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Events from "./pages/Events";
import Team from "./pages/Team";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Error from "./pages/Error";

import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="events" element={<Events />} />
            <Route path="team" element={<Team />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
