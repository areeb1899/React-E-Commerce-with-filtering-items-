import React from 'react';
import { Grid } from '@mui/material';
import Sidebar from './Sidebar/Sidebar';
import Mainbody from './Mainbody/Mainbody';
import { ProductProvider } from './Component/ProductContext';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';



const App = () => {
  return (
    <>
      <Navbar />
      <ProductProvider>
        <Grid container>
          <Grid item lg={2} md={2}>
            <Sidebar>

            </Sidebar>
          </Grid>
          <Grid item lg={10} md={10}>
            <Mainbody>

            </Mainbody>
          </Grid>
        </Grid>
      </ProductProvider>
      <Footer />

    </>
  );
}

export default App;
