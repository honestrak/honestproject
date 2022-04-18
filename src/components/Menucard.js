import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

function MenuCard(props) {



 return (

  <Box
      sx={{
       display: 'flexGrow',
       backgroundColor: 'primary.dark',
       '&:hover': {
        backgroundColor: 'beige',
        opacity: [0.9, 0.8, 0.7],
        p: 2,
       },
      }}
  >

   <Card >
    <CardMedia
        component="img"
        height="140"
        image={props.pic}
        alt="green iguana"
    />
    <CardContent>
     <Typography gutterBottom variant="h5" component="div">
      {props.eng}
     </Typography>
     <Typography variant="h4" component="div" color="cadetblue">
      {props.ar}
     </Typography>
     <Typography variant="h8"  component="div" color="darkred">
      {props.pric} AED
     </Typography>
    </CardContent>
    <CardActions>
     <Button size="small">Learn More</Button>
    </CardActions>
   </Card>

  </Box>


 );

 }

 export default MenuCard;