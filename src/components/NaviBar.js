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
import {AppBar, CssBaseline, IconButton, ThemeProvider, Toolbar, Typography, useScrollTrigger} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {createTheme} from "@mui/material/styles";
import {deepOrange} from "@mui/material/colors";
import PropTypes from "prop-types";


const theme = createTheme({
    palette: {
        primary: {
            main: '#01579b',
        },
        secondary: deepOrange,
    },
});


function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};



export default function NaviBar(props) {
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

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (



                <React.Fragment key='left'>


                    <ThemeProvider theme={theme}>
                        <Box  sx={{ flexGrow: 1 }}>
                            <CssBaseline />
                            <ElevationScroll {...props}>
                    <AppBar color="primary" position="static" >
                        <Toolbar  >
                            <IconButton
                                onClick={toggleDrawer('left',true)}
                                size="large"
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2}}
                            >
                                <MenuIcon />
                                <SwipeableDrawer
                                    anchor={'left'}
                                    open={state['left']}
                                    onClose={toggleDrawer('left', false)}
                                    onOpen={toggleDrawer('left', true)}
                                >
                                    {list('left')}
                                </SwipeableDrawer>

                            </IconButton>


                            <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Cheval Cafe
                            </Typography>

                        </Toolbar>
                    </AppBar>
                            </ElevationScroll>

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



    );
}
