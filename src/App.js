// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import { AssignmentPractise } from "./assignment/ap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Link to="/"></Link>

      <Routes>
        <Route path="/" element={<AssignmentPractise />} />
        <Route />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
