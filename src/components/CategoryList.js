import {Avatar, IconButton, Paper, Stack, styled, Typography} from "@mui/material";
import {useCallback} from "react";

function CategoryList(props) {

    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));




    function onCategory(categ) {
        console.log(categ);
    }

    return (
        <div>
            <Stack

                justifyContent="center"
                   alignItems="center"
                   direction="row"
                   sx={{p: 1}}
                   spacing={2}>


                            <div key={props.id}>
                                <IconButton sx={{flexDirection: "column"}} aria-label="hskslsls" onClick={() => onCategory(props.english)}>
                                    <Avatar
                                        sx={{bgcolor:'#f8f8f8', width: 48, height: 48 , p:2}}
                                        src="https://cdn1.iconfinder.com/data/icons/ecommerce-vol1-flat-bukeicon/32/burger_food_category_ecommerce_bukeicon_online_shop-512.png">C</Avatar>
                                    <Typography variant="body1" color='red' align='center'>
                                        {props.english}
                                    </Typography>
                                </IconButton>
                            </div>


            </Stack>
        </div>
    );
}

export default CategoryList;