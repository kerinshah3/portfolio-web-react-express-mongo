import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home , Education , NavBar} from "./Component/Index"


function App() {
  return (
      <BrowserRouter>
      <NavBar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/education" element={<Education/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
