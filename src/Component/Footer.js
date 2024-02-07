import React, { useState } from 'react';
import { Box, Grid, Link, TextField, Button, Typography } from '@mui/material';


const linkStyle = {
    textDecoration: 'none', // Remove underline
    color: 'white', // Set text color to white
};


const Footer = () => {


    const [email, setEmail] = useState(''); // state variable for email address


    const handleSubscribe = (event) => {
        event.preventDefault();
        // Implement your email subscription logic here
        // e.g., send an API request with the email address
        setEmail('');
    };

    return (
        <>
            <Box
                sx={{
                    backgroundColor: '#3f51b5',
                    color: 'white',
                    padding: '16px',
                    display: 'flex',
                }} mt={10}
            >
                <Grid container spacing={2} p={8}>
                    <Grid item xs={4}>
                        <Typography variant="h6">Navigation</Typography>
                        <Box component="div" display="flex" flexDirection="column">
                            <Link href="#" sx={linkStyle}>Shop Men</Link>
                            <Link href="#" sx={linkStyle}>Shop Women</Link>
                            <Link href="#" sx={linkStyle}>New Arrivals</Link>
                            <Link href="#" sx={linkStyle}>Sale Items</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={4} >
                        <Typography variant="h6">Helpful Links</Typography>
                        <Box component="div" display="flex" flexDirection="column" >
                            <Link href="#" sx={linkStyle}>About Us</Link>
                            <Link href="#" sx={linkStyle}>Contact Us</Link>
                            <Link href="#" sx={linkStyle}>Shipping & Returns</Link>
                            <Link href="#" sx={linkStyle}>FAQs</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6">Connect with Us</Typography>
                        <Box component="form" onSubmit={handleSubscribe}>
                            <TextField sx={{ backgroundColor: 'white',borderRadius:'10px' }}
                                label="Enter your email address"
                                variant="outlined"
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <Button sx={{borderRadius:'10px', margin:'7px'}} variant="contained" color="primary" type="submit">
                                Subscribe
                            </Button>
                        </Box>
                    </Grid>

                </Grid>

            </Box>
            <Box sx={{backgroundColor: 'beige'}}>
            <Typography variant="body1" align="center">
               Copyright © {new Date().getFullYear()} 
            </Typography>
           
            </Box>
        </>
    );
};


export default Footer;
