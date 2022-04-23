import Container from "@mui/material/Container";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";


function Home(props) {

    const naviItems = props.naviItems;

    console.log(naviItems);
    let naviCategory = "food";

    let navigate = useNavigate();


    async function routeChange(event) {
        event.preventDefault();

        let path = `category`;
        navigate(path,{state:{name:naviCategory}});
    }


    return (<div>
        <Container maxWidth="md" sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: {xs: 'center', md: 'center'},
            height: '85vh',
            bgcolor: 'rgba(189,203,224,0.89)',
            minWidth: {
                xs: 400,
                md: 700,
                xl: 900
            }
        }}
        >

            <h2>
                {naviItems.map((navi_items) => (




                <Card sx={{
                    minWidth: 345, borderRadius: '12px',
                    margin: 5,
                    boxShadow: 2,
                }}>
                    <CardActionArea onClick={routeChange} id={navi_items.id} >
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://image.shutterstock.com/image-photo/assorted-indian-recipes-food-various-600w-649541308.jpg"
                            alt="green iguana"
                        />
                        <CardContent sx={{  bgcolor:'#05408c'}}>
                            <Typography  color="white" gutterBottom variant="h5" component="div" align="center">

                                {navi_items.title}


                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <div>
                        {naviCategory = navi_items.title}
                    </div>
                </Card>

                                    ))}

            </h2>
        </Container>
    </div>);
}

export default Home;