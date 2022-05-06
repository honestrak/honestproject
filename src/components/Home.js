import Container from "@mui/material/Container";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";


function Home(props) {

    const naviItems = props.naviItems;

    const styles = {
        paperContainer: {
            backgroundImage: `url(${"static/src/img/main.jpg"})`
        }
    };

    let navigate = useNavigate();


    const toComponentB = (catitem) => {
        let path = `menu`;
        navigate(path, {state: {id: 1, name: catitem}});
    };


    return (<div>


            <Container
                maxWidth="md"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: {xs: 'center', md: 'center'},
                    height: '85vh',
                    backgroundImage: `url(${"https://image.shutterstock.com/image-photo/abstract-blur-coffee-shop-cafe-600w-1928243432.jpg"})`,
                    backgroundRepeat:"no-repeat",
                    backgroundSize: "cover",
                    minWidth: {
                        xs: 400,
                        md: 700,
                        xl: 900
                    }
                }}
            >

                <h2>

                    {
                        naviItems.map((navi_items) => (
                            <Card
                                key={navi_items.title}
                                sx={{
                                    minWidth: 345, borderRadius: '12px',
                                    margin: 5,
                                    boxShadow: 2,
                                }}>
                                <CardActionArea onClick={() => toComponentB(navi_items.title)}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://image.shutterstock.com/image-photo/assorted-indian-recipes-food-various-600w-649541308.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{bgcolor: '#05408c'}}>
                                        <Typography color="white" gutterBottom variant="h5" component="div"
                                                    align="center">

                                            {navi_items.title}

                                        </Typography>
                                    </CardContent>
                                </CardActionArea>

                            </Card>

                        ))}

                </h2>
            </Container>

    </div>);
}

export default Home;