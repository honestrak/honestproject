import {alpha, Box, Typography} from "@mui/material";

function MenuCard(props) {

    return (


        <Box
            sx={{
                display: 'inline-flex',
                ml: 5,
                mr: 5,
                flexDirection: {xs: 'column', md: 'row'},
                alignItems: 'center',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: 2,
                bgcolor: '#eae9e9',
                backgroundColor: 'white',
                '&:hover': {
                    backgroundColor: '#ffffff',
                    opacity: [0.9, 0.8, 0.7],
                    p: 1.5,
                },
                fontWeight: 'bold',
            }}
        >
            <Box
                component="img"
                sx={{
                    width: 400,
                    borderRadius: '12px',
                    boxShadow: 2,
                    maxHeight: {xs: 270, md: 200},
                    maxWidth: {xs: 350, md: 250},
                }}
                alt="pic"
                src={props.pic}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: {xs: 'center', md: 'flex-start'},
                    m: 3,
                    minWidth: {md: 350},
                }}
            >
                <Box component="span" sx={{color: '#121256', fontSize: 20, mt: 1, ml: 1}}>
                    <Typography variant="h5" align='center'>
                        {props.eng}
                    </Typography>
                </Box>
                <Box component="span" sx={{color: '#124a56', fontSize: 24, mt: 2, ml: 1}}>
                    <Typography variant="h5" align='center'>
                        {props.ar}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        mt: 1.5,
                        p: 1,
                        backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                        borderRadius: '15px',
                        color: 'primary.main',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        '& svg': {
                            fontSize: 22,
                        },
                    }}
                >
                    <Typography gutterBottom variant="h5" component="div">
                        {props.pric} AED
                    </Typography>

                </Box>
            </Box>
        </Box>


    );

}

export default MenuCard;