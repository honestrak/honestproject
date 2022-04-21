import './App.css';
import {
  BrowserRouter as Router, Routes,
  Route
} from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import TopBar from "./components/TopBar";
import {Box, Typography} from "@mui/material";


function App() {
    const naviItems =[ {title:'Food', link :'food'}, {title:'Beverages', link :'beverage'} ]

  return (

    <Router>
        <header>
            <TopBar/>
        </header>
      <Routes>
      <Route path="/" element ={<Home naviItems = {naviItems}/>}/>
      </Routes>

        <footer >
            <Box sx={{bgcolor: 'primary.main', mt: 1, p: 1}}>
                <Typography variant="body1" color='white' align='center'>
                    All Rights Reserved @ Cheval_Cafe
                </Typography>;
            </Box>
        </footer>
    </Router>
  );
}

export default App;
