import {
    AppBar,
    Box,
    Button, Divider, Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon, ListItemText,
    ThemeProvider,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import {deepOrange, green} from "@mui/material/colors";
import {useEffect, useState} from "react";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const theme = createTheme({
    palette: {
        primary: {
            main: '#01579b',
        },
        secondary: deepOrange,
    },
});

function NavBar() {

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
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
        <ThemeProvider theme={theme}>
        <Box  sx={{ flexGrow: 1 }}>
            <AppBar color="primary" position="sticky" >
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
                        <Drawer
                            anchor={'left'}
                            open={state['left']}
                            onClose={toggleDrawer('left', false)}
                        >
                            {list('left')}
                        </Drawer>

                    </IconButton>


                    <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Cheval Cafe
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
        </ThemeProvider>

    );

}

export default NavBar;