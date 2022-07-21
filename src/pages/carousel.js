import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/carousel/1';
import { CustomerListToolbar } from '../components/carousel/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import Tables from '../components/carousel/customer-list-results';

const Carousel = () => {
  const customer=customers();
  console.log(customer)
  
  
  
  return(
  
  <>
    <Head>
      <title>
      CAROUSEL
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>
        </Box>
        <Tables customers={customer} />
      </Container>
    </Box>
  </>
);}






Carousel.getLayout = (page) => {
  console.log(customers())
  return(
  <DashboardLayout>
    {page}
  </DashboardLayout>
)};

export default Carousel;
