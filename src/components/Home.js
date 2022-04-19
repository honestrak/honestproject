import {useEffect, useState} from "react";
import { db }from '../firebase-config';
import { collection, getDocs }from 'firebase/firestore';
import MenuCard from "./Menucard";
import {Box, CircularProgress, Container, ThemeProvider, Typography} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {deepOrange} from "@mui/material/colors";
import NaviBar from "./NaviBar";

const theme = createTheme({
    palette: {
        primary: {
            main: '#01579b',
        },
        secondary: deepOrange,
    },
});

function Home() {
    const [splcoffee,setSpecialCoffee] = useState([]);
    const [loading, setLoading] = useState(false);
    const chevalCollRef = collection(db,"desserts");

    useEffect(() => {
        const getCoffee = async () => {
        const data  = await getDocs(chevalCollRef);
        setSpecialCoffee(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }


        getCoffee().then(()=>setLoading(true))
    },[]);

    return <div>
        <header>
            <NaviBar/>
        </header>

        <>



            {
             splcoffee.map((splcoff) => {
               return(

                   <div key={splcoff.id}>
                            <br/>
                           <MenuCard eng ={splcoff.english} ar ={splcoff.arabic} pric = {splcoff.price} pic = {splcoff.picture}/>
                            <br/>
                   </div>
               );})
            }
        </>
        <>
            {loading ? '' :
            <Container fixed>
                <Box sx={{ bgcolor: '#afd4f3', height: '100vh' , minWidth: { xs: 350, md: 600 }}} >

                <CircularProgress  />

                </Box>
            </Container>
                }
        </>

        <ThemeProvider theme={theme}>
        <footer>
            <Box sx={{ bgcolor: 'primary.main',  mt:2 ,p:2}} >
                <Typography variant="body1" color='white' align='center'>
                    All Rights Reserved @ Cheval_Cafe
                </Typography>;
            </Box>
        </footer>
        </ThemeProvider>

    </div>


}


export default Home;