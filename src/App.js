import "./App.css";

// Material UI imports
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import LockIcon from "@mui/icons-material/Lock";


import Login from "./formControl/login";



function App() {
 

  return (
    <div className="outerbox">
    <div className="App" >
      
      <Paper elevation={3} style={{ padding: "10px", paddingBottom: "50px" }}>
        <div align="center">
          
            <Chip
              icon={<LockIcon />}
              label="Log In"
              variant="outlined"
              color="info"
            />
        </div>

         <Login /> 
      </Paper>
    </div>
    </div>
  );
}

export default App;