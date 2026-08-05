import { BrowserRouter, Routes, Route } from "react-router-dom";

import Splash from "../pages/Splash/Splash";
import Home from "../pages/Home/Home";
import QRCodes from "../pages/QRCodes/QRCodes";
import Scanner from "../pages/Scanner/Scanner";
import Intro from "../pages/Intro/Intro";
import Chapter1 from "../pages/Chapter1/Chapter1";
import Chapter2 from "../pages/Chapter2/Chapter2";
import Chapter3 from "../pages/Chapter3/Chapter3";
import Chapter4 from "../pages/Chapter4/Chapter4";
import Chapter5 from "../pages/Chapter5/Chapter5";
import Final from "../pages/Final/Final";
import Presente from "../pages/Presente/Presente";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />

        <Route path="/login" element={<Home />} />

        <Route path="/intro" element={<Intro />} />

        <Route path="/chapter1" element={<Chapter1 />} />
        <Route path="/chapter2" element={<Chapter2 />} />
        <Route path="/chapter3" element={<Chapter3 />} />
        <Route path="/chapter4" element={<Chapter4 />} />
        <Route path="/chapter5" element={<Chapter5 />} />

        <Route path="/final" element={<Final />} />
        <Route path="/presente" element={<Presente />} />

        <Route path="/scanner" element={<Scanner />} />
        <Route path="/qrcodes" element={<QRCodes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
