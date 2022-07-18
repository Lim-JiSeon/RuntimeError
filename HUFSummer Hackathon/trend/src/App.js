import "./App.css";
import Home from "./components/Home";
import BasisTest from "./components/BasisTest";
import { Route, Routes } from "react-router-dom";
import Result from "./components/Result";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/basis-test" element={<BasisTest />} />
        <Route path="/result/:score" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
