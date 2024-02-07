import { Grid, Paper, Rating, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';

const ProductCard = () => {
    const { item } = useContext(ProductContext);
    
    return (
        <>
            {item.map((element) => {
                return (
                    <Grid item lg={4} md={4} sm={6} xs={6}>
                        <Paper elevation={5} sx={{ padding: '10px' }}>
                            <Stack alignItems='center' gap={1}>
                                <img style={{ width: '200px ', height: 'auto' }} src={element.img} alt="product" />
                                <Typography component="span" sx={{ fontWeight: 'bold', fontSize: '20px' }}>{element.title}</Typography>
                                <Stack flexDirection='row' alignItems='center' gap={2}>
                                    <Rating name="half-rating" sx={{ fontSize: '18px' }} defaultValue={2.5} precision={0.5} />
                                    <Typography variant='p' sx={{ fontSize: '15px' }}>{element.reviews}</Typography>
                                </Stack>
                                <Typography variant='p' sx={{ fontWeight: 'bold', fontSize: '20px' }}>${element.newPrice}</Typography>
                            </Stack>
                        </Paper>

                    </Grid>
                )
            })}
        </>
    );
}

export default ProductCard;
