import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {AppBar, Button, IconButton, ThemeProvider, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {createTheme} from "@mui/material/styles";
import {deepOrange} from "@mui/material/colors";


const theme = createTheme({
    palette: {
        primary: {
            main: '#01579b',
        },
        secondary: deepOrange,
    },
});


export default function TopBar() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <Box
            sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Food', 'Beverages'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (

        <div>

            <React.Fragment key={'left'}>

                <ThemeProvider theme={theme}>
                    <Box sx={{flexGrow: 1}}>

                        <AppBar color="primary" position="fixed">
                            <Toolbar>
                                <IconButton
                                    onClick={toggleDrawer('left', true)}
                                    size="large"
                                    edge="end"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{mr: 2}}>
                                    <MenuIcon/>
                                </IconButton>
                                <Typography align="center" variant="h6" component="div" sx={{flexGrow: 1}}>
                                    Cheval Cafe
                                </Typography>
                            </Toolbar>
                        </AppBar>

                    </Box>
                </ThemeProvider>

                <SwipeableDrawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                >
                    {list('left')}
                </SwipeableDrawer>
            </React.Fragment>

        </div>


    );
}
