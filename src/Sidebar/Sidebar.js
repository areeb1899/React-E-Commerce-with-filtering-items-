import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Category from '../Component/Category';
import Color from '../Component/Color';
import logo from '../assets/logo.png'

const Sidebar = () => {
    return (
        <Box m={6} sx={{ height: '100vh', maxWidth: '200px', overflow: 'hidden' }}>
            <Paper elevation={7} sx={{ height: '100vh' }}>
                <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
                    <Grid item xs={12}>
                        <Box pl={3}>
                            <img style={{ width: "100%" }} src={logo} alt="logo" />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box mt={1} pl={3}>
                            <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: "bold" }}>
                                Category
                            </Typography>
                            <Box mt={1}>
                                <Category />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box mt={2} pl={3}>
                            <Typography variant="h6" sx={{ fontSize: "23px", fontWeight: "bold" }}>
                                Color
                            </Typography>
                            <Box mt={1}>
                                <Color />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default Sidebar;
