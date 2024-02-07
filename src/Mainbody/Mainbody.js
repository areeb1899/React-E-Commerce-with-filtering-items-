import { Box, Grid } from '@mui/material';
import React from 'react';
import ProductCard from '../Component/ProductCard';

const Mainbody = () => {
    return (
        <>

            <Box xs={8}>
                <Grid container mt={2} spacing={5} p={5}>
                    <ProductCard>

                    </ProductCard>
                </Grid>
            </Box>
        </>
    );
}

export default Mainbody;
