import {useEffect, useState} from "react";
import {db} from '../firebase-config';
import {collection, getDocs, query, where} from 'firebase/firestore';
import MenuCard from "./Menucard";
import {Box, CircularProgress, Container, Divider, Stack} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {deepOrange} from "@mui/material/colors";
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

    const [name, setName] = useState('items');
    const [topCategory, setTopCategory] = useState('');

    const chevalCollRef = collection(db, name);


    let length = 0;

    const location = useLocation();
    const cateType = location.state.name.toLowerCase();
    const refCategoryList = collection(db, "xcateg");
   // console.log(cateType);
    const categFilter = query(refCategoryList, where("type", "==", cateType))
    const [categoryList, setCategoryList] = useState([]);



    useEffect(() => {
        const getCategoryList = async (e) => {
            const querySnapshot = await getDocs(categFilter);

            setCategoryList(querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id        })));

            querySnapshot.docs.forEach((doc,index)=>{

                if(index ==0){
                    setName(doc.get('link'));
                }

            });



        }

        getCategoryList()
            .then(
            () => {

                if (length > 0) {

                    setLoading(false);

                } else {
                    setLoading(true);
                }

            }
        )

    }, [cateType]);


    useEffect(() => {

         setLoading(false)
        const getCoffee = async (e) => {
            const data = await getDocs(chevalCollRef);
            setSpecialCoffee(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

            console.log(data.docs.length);
            length = data.docs.length;
        }

        getCoffee().then(
            () => {
                setLoading(true)
                if (length > 0)
                    setLoading(true);
                else
                    setLoading(false);
            }
        )
    }, [name, cateType]);


    return <div>


        <Container maxWidth="xs" sx={{
            backgroundImage: `url(${"https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg"})`,
            backgroundRepeat:"no-repeat",
            backgroundSize: "cover",
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
                   sx={{
                       display: 'flex',
                       overflow: 'scroll',
                       p: 1
                   }}
                   spacing={2}>
                {
                    categoryList.map((category, index) => {

                        return (
                            <div key={index}>
                            <CategoryList
                                setName={setName} id={index} english={category.english}
                                          links={category.link}/>
                            </div>
                        );
                    })
                }


            </Stack>

            <Divider variant="middle" />
            <div style={{ borderTop: "2px solid #fff ", marginLeft: 10, marginRight: 10 }}></div>
            <>
                {loading ? '' :

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: {xs: 'center', md: 'center'},
                        height: '85vh',
                        minWidth: {
                            xs: 400,
                            md: 700,
                            xl: 900
                        }


                    }}>

                        <CircularProgress/>

                    </Box>

                }
            </>

 {          <>


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

 }


        </Container>

    </div>


}


export default Menu;