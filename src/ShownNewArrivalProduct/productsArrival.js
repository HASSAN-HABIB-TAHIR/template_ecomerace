import React from 'react'
import { Box, Container } from "@mui/material";
import CustomerElectronic from './CustomerElectronic'
import Customizableproducts from './Customizableproducts'
import HomeApplicances from './HomeApplicances'
import Apprael from './Apprael'
import RequestforQuotation from './RequestforQuotation'
import JustComponent from './JustComponent'
import NewArrivalTips from './NewArrivalTips'
import Country from './country'
import AliBabaFooter from './AliBabaFooter'

function ProductsArrival() {
    return (
        <>
            <Box>
                <Container maxWidth="xl">
                    <NewArrivalTips />
                    <Customizableproducts />
                    <HomeApplicances />
                    <CustomerElectronic />
                    <Apprael />
                    <RequestforQuotation />
                    <JustComponent />
                    <Country />
                    <AliBabaFooter/>
                </Container>
            </Box>
        </>
    )
}
export default ProductsArrival