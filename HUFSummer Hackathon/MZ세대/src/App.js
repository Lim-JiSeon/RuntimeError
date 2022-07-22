import Input from "./components/Input";
import Result from "./components/Result";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact={true} element={<Input />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
