import Login from "./component/login";
import Sign from "./component/sign";
import {  Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/sign" element={<Sign/>}/>
      </Routes>
    </div>
  );
}

export default App;
