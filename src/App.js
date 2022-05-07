import './App.css';
import {
  BrowserRouter as Router, Routes,
  Route
} from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import TopBar from "./components/TopBar";
import {Box, ThemeProvider, Typography} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {deepOrange} from "@mui/material/colors";
import CategoryList from "./components/CategoryList";


const theme = createTheme({
    palette: {
        primary: {
            main: '#01579b',
        },
        secondary: deepOrange,
    },
});

function App() {
    const naviItems =[ {title:'Food', link :'food'}, {title:'Beverages', link :'beverage'} ]

  return (

    <Router>
        <header>
            <TopBar naviItems = {naviItems}/>
        </header>
      <Routes>
      <Route path="/" element ={<Home naviItems = {naviItems}/>}/>
          <Route path="/menu" element ={<Menu/>}/>
          <Route path="/category" element ={<CategoryList/>}/>
      </Routes>

        <ThemeProvider theme={theme}>
        <footer >
            <Box sx={{bgcolor: 'primary.main', mt: 1, p: 1}}>
                <Typography variant="body2" color='white' align='center'>
                    All Rights Reserved @ Cheval_Cafe
                </Typography>


                <Typography variant="body2" color='white' align='center'>
                    Designed & Developed by  <a style={{color: 'white'}} href={"https://honestrak.com/"}>Honest IT Solutions LLC</a>
                </Typography>
            </Box>
        </footer>
        </ThemeProvider>
    </Router>
  );
}

export default App;
