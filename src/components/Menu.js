import {useEffect, useState} from "react";
import {db} from '../firebase-config';
import {collection, getDocs} from 'firebase/firestore';
import MenuCard from "./Menucard";
import {Box, CircularProgress, Container, Stack, ThemeProvider, Typography} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {deepOrange} from "@mui/material/colors";
import TopBar from "./TopBar";


const theme = createTheme({
    palette: {
        primary: {
            main: '#01579b',
        },
        secondary: deepOrange,
    },
});

function Menu() {
    const [splcoffee, setSpecialCoffee] = useState([]);
    const [loading, setLoading] = useState(false);
    const chevalCollRef = collection(db, "desserts");
    let length = 0;

    useEffect(() => {
        const getCoffee = async (e) => {
            const data = await getDocs(chevalCollRef);
            setSpecialCoffee(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

            console.log(data.docs.length);
            length = data.docs.length;
        }

        getCoffee().then(
            () => {
                if (length > 0)
                    setLoading(true);
                else
                    setLoading(false);
            }
        )
    }, []);

    return <div>
        <header>
            <TopBar/>
        </header>


        <>
            {loading ? '' :

                    <Box sx={{ display: 'flex',
                        justifyContent: 'center',
                        alignItems: {xs: 'center', md: 'center'},
                        height:'85vh',
                        minWidth :{
                        xs:400,
                            md:700,
                            xl:900
                        }


                    }}>

                        <CircularProgress/>

                    </Box>

            }
        </>

        <>


            {
                splcoffee.map((splcoff) => {
                    return (

                        <div key={splcoff.id}>
                            <br/>
                            <MenuCard eng={splcoff.english} ar={splcoff.arabic} pric={splcoff.price}
                                      pic={splcoff.picture}/>
                            <br/>
                        </div>
                    );
                })
            }
        </>


        <ThemeProvider theme={theme}>
            <footer >
                <Box sx={{bgcolor: 'primary.main', mt: 1, p: 1}}>
                    <Typography variant="body1" color='white' align='center'>
                        All Rights Reserved @ Cheval_Cafe
                    </Typography>;
                </Box>
            </footer>
        </ThemeProvider>

    </div>


}


export default Menu;