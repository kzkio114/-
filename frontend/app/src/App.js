/* App.js */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Db from "./Db";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/db`} element={<Db />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;