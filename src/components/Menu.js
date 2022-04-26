import {useEffect, useState} from "react";
import {db} from '../firebase-config';
import {collection, getDocs, query, where} from 'firebase/firestore';
import MenuCard from "./Menucard";
import {Box, CircularProgress, Container, Stack, ThemeProvider, Typography} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {deepOrange} from "@mui/material/colors";
import TopBar from "./TopBar";
import CategoryList from "./CategoryList";
import {useLocation} from "react-router-dom";


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

    const location = useLocation();
    const cateType = location.state.name.toLowerCase();
    const refCategoryList = collection(db, "xcateg");
    console.log(cateType);
    const categFilter = query(refCategoryList, where("type", "==", cateType))
    const [categoryList, setCategoryList] = useState([]);

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


    useEffect(() => {
        const getCategoryList = async (e) => {
            const querySnapshot = await getDocs(categFilter);

            setCategoryList(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));

        }

        getCategoryList().then(
            () => {
                if (length > 0)
                    setLoading(true);
                else
                    setLoading(false);
            }
        )
    }, []);

    return <div>


        <Container maxWidth="xs" sx={{
            bgcolor: 'rgb(236,236,236)',
            minWidth: {
                xs: 400,
                md: 700,
                xl: 900
            },
            borderRadius: '12px',
            boxShadow: 5,

        }}
        >

        <Stack justifyContent="center"
               alignItems="center"
               direction="row"
               alignItems="stretch"
               sx={{display: 'flex',
                   overflow: 'scroll',
                   p: 1}}
               spacing={2}>
            {
                categoryList.map((category) => {
                    return (
                            <CategoryList  english={category.english} />
                    );
                })
            }
        </Stack>

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


    </Container>

    </div>


}


export default Menu;