import {Avatar, IconButton, Paper, Stack, styled, Typography} from "@mui/material";

function CategoryList(props) {

    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            <Stack justifyContent="center"
                   alignItems="center"
                   direction="row"
                   sx={{p: 1}}
                   spacing={2}>


                            <div key={props.id}>
                                <IconButton sx={{flexDirection: "column"}} aria-label="hskslsls" onClick={() => console.log("hi")}>
                                    <Avatar
                                        sx={{bgcolor:'#f8f8f8', width: 48, height: 48 , p:2}}
                                        src="https://cdn-icons.flaticon.com/png/512/3188/premium/3188277.png?token=exp=1650875699~hmac=b8a3a4f11d536166f7280db060a63188">C</Avatar>
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