import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

function MenuCard() {
 return (
  <Box
      sx={{
       display: 'flex',
       backgroundColor: 'primary.dark',
       '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
        p: 2,
       },
      }}
  >

   <Card sx={{ minWidth: 345 }}>
    <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
    />
    <CardContent>
     <Typography gutterBottom variant="h5" component="div">
      Lizard
     </Typography>
     <Typography variant="body2" color="text.secondary">
      Lizards are a
     </Typography>
    </CardContent>
    <CardActions>
     <Button size="small">Share</Button>
     <Button size="small">Learn More</Button>
    </CardActions>
   </Card>

  </Box>
 );
 }

 export default MenuCard;