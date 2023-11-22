import "./App.css";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
// Material UI imports

import Login from "./formControl/login"; 
import Landing from "./formControl/landing"; 



function App() {
  return (
    <Router>
    
          <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/landing" element={<Landing/>}/>
          </Routes>
        
    </Router>
  );
}

export default App;