import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { HashLink as Link } from 'react-router-hash-link';
import Icon from '@mui/material/Icon';

const drawerWidth = 240;
const navItems = [
    {
        name: 'Skills', path: '/skills', icon: 'content_copy'
    },
    {
        name: 'Erfahrung', path: '/experiences', icon: 'work'
    },
    {
        name: 'Ausbildung', path: '/educations', icon: 'school'
    },
    {
        name: 'Play Snake', path: '/snake', icon: 'gamepad'
    },
];

export default function DrawerAppBar() {
    const { window } = Window;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2, color: '#fff' }}>
                Ulrich
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={`${item.name}mobile`} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <Link to={item.path}>
                                <ListItemText primary={item.name} sx={{ color: '#fff' }} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <Link to='/' className='brand-logo'>
                            Ulrich
                        </Link>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Typography variant="subheading" color="inherit" key={item.name} sx={{ paddingRight: '30px', cursor: 'pointer' }}>
                                <Link to={item.path}>
                                    <IconButton
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-haspopup="true"
                                        color="inherit"
                                        sx={{
                                            paddingTop: "5px", color: '#fff', '&:focus': {
                                                outline: 'none',
                                                backgroundColor: 'transparent',
                                            },
                                        }}
                                    >
                                        <Icon sx={[
                                            {
                                                '&:focus': {
                                                    color: 'red',
                                                    backgroundColor: 'white',
                                                },
                                            },
                                            { marginRight: '8px' }
                                        ]}>{item.icon}</Icon>
                                    </IconButton>
                                    {item.name}
                                </Link>
                            </Typography>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        '&:focus': {
                            outline: 'none',
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}