import {
    alpha,
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia, Grid,
    Stack,
    ThemeProvider,
    Typography
} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {deepOrange} from "@mui/material/colors";



const theme = createTheme({


    typography: {
        fontFamily: [
            'Cairo',
            'Mukta',
        ].join(','),
        h5:{
            fontSize: '1.25rem',
            '@media (min-width:600px)': {
                fontSize: '1.5rem',
            },
        },
        h6:{
            fontSize: '1.25rem',
            fontWeight: 600,
            '@media (min-width:600px)': {
                fontSize: '1.35rem',
            },
        },
    },
    palette: {
        primary: {
            main: '#01579b',
        },
        secondary: deepOrange,
        typo: '#01579b',
    },
});

let picture = "https://emenurak.com/emenu_images/cheval_cafe/cheval.png";

function MenuCard(props) {


    if(props.pic == undefined){
        picture = "https://emenurak.com/emenu_images/cheval_cafe/cheval.png";
    }
    else{
        picture = props.pic;
    };



    return (

        <div>

        <ThemeProvider theme={theme}>



        <Card sx={{
            display: 'flex',
            borderRadius: '12px',
            flexDirection: 'row',
            overflow: 'hidden',
            alignItems: 'center',
            boxShadow: 2,
            bgcolor:'rgba(175,192,201,0.56)',
            ml: 3,
            mr: 3,
            mt:2,
            mb:2,
            minWidth:'350px',

        }}>
            <CardActionArea onClick={() => console.log("welcome")}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column', md: 'row'},
                        alignItems: 'center',
                        overflow: 'hidden',
                        borderRadius: '12px',
                        boxShadow: 2,
                        bgcolor: '#f5f5f5',
                        minWidth: {xs: '350px,', md: '600px'},
                        '&:hover': {
                            backgroundColor: '#ffffff',
                            opacity: [0.9, 0.8, 0.7],
                            p: 1.1,
                        },
                        fontWeight: 'bold',
                    }}
                >
                    <CardMedia
                        component="img"
                        sx={{

                            borderRadius: '12px',
                            boxShadow: 2,
                            maxHeight: {xs: 250, md: 170},
                            maxWidth: {xs: 350, md: 350},

                        }}
                        alt="Cheval Cafe"

                        src={picture}
                    />

                    <CardContent>
                        <Box
                            sx={{
                                display: 'inline-flex',
                                flexDirection: 'column',
                                overflow: 'hidden',
                                minWidth : {xl: 400, md: 300},
                                alignItems: {xs: 'center', md: 'flex-start'},
                            }}
                        >
                            <Box component="span" sx={{ml: 1}}>
                                <Typography variant="h5" sx={{fontWeight: 'bold', color: 'typo',}} >
                                    {props.eng}
                                </Typography>
                            </Box>
                            <Box component="span" sx={{color: 'typo',  ml: 1}}>
                                <Typography variant="h5" align='center' sx={{fontWeight: 'bold', color: 'typo', pt:1,pb:1}}>
                                    {props.ar}
                                </Typography>
                            </Box>
                            <Box
                                sx={{

                                    pl: 2,
                                    pr:2,
                                    pt:0.5,
                                    backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                                    borderRadius: '15px',
                                    color: 'primary.main',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography gutterBottom variant="h6" component="div">
                                    {props.pric} AED
                                </Typography>

                            </Box>
                        </Box>
                    </CardContent>

                </Box>
            </CardActionArea>
        </Card>



        </ThemeProvider>
        </div>
    );

}

export default MenuCard;