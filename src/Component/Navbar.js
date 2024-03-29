import * as React from 'react';
import { CssBaseline, SvgIcon } from '@mui/material';  // Import CssBaseline
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';

export default function Navbar() {
    return (
        <>
            <CssBaseline />  {/* Add CssBaseline to reset default styles */}
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            E-Commerce
                        </Typography>
                        <Button color="inherit">Login</Button>
                        <Button color="inherit">Logout</Button>
                        <Button color="inherit">Register</Button>
                        <SvgIcon component={ShoppingCartSharpIcon} inheritViewBox />
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}
