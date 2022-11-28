import React from 'react'
import { Box, Button, Container, Grid, Rating, Typography, } from "@mui/material";
import { Link } from 'react-router-dom';
import newarrival from './images/newarrival.jpg'
import newarrival2 from './images/newarrival2.jpg'
import newarrival3 from './images/newarrival3.jpg'
import newarrival4 from './images/newarrival4.png'
import newarrival5 from './images/newarrival5.jpg'
import newarrival6 from './images/newarrival6.jpg'
function JustComponent() {
    const forproduct = [
        {
            id: 1,
            price: "$6.05 - $6.49",
            pic: newarrival4,

            desc: "Wholesale New Arrivals Women Casual",
            order: "2 pieces (min. order)",

        },
        {
            id: 2,
            pic: newarrival5,


            price: "$5.00 - $8.00",
            desc: "70 OZ BPA Free water bottle Time Marker",
            order: "2 boxes (min. order)",

        },
        {
            id: 3,
            pic: newarrival6,
            price: "$2.55 - $3.99",
            desc: "Sale Color Stainless Steel Large Capacity ",
            order: "2 pieces (min. order)",
        },
        {
            id: 4,
            pic: newarrival,
            desc: "100% Polyester leather jacket Stylish Fancy Men",
            price: "$12.00 - $15.00",
        },
        {
            id: 5,
            pic: newarrival2,
            price: "$2.55 - $3.99",
            desc: "Sale Color Stainless Steel Large Capacity ",
            order: "2 pieces (min. order)",
        },
        {
            id: 6,
            pic: newarrival3,
            desc: "100% Polyester leather jacket Stylish Fancy Men",
            price: "$12.00 - $15.00",
        },
    ];
    return (
        <>
            <Box >

                <Container maxWidth="xl">
                    <Box sx={{ display: "flex", marginTop: "20px" }}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "26px" }}>Just For You </Typography>
                        <Box sx={{
                            background: 'grey',
                            color: 'lime',
                            borderColor: 'grey',
                            height: '6px',
                            width: '70px',
                            flex: 1,
                            marginTop: "20px",
                            marginLeft: "10px"
                        }}>

                        </Box>
                    </Box>
                    <Box sx={{ width: "100%", background: "#fff", display: "flex", marginTop: "20px" }}>
                        <Grid container spacing={2}>
                            {forproduct.map((item, index) => {
                                return (
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={2}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                        key={index}  >

                                        <Box sx={{
                                            width: "100%",
                                            boxShadow: "  rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;",
                                            border: "3px solid white", justifyContent: "center", alignItems: "center", justifyContent: "center", textAlign: "center"
                                        }}>
                                            <Link to={`/details/${item.id}`}>
                                                <Button>
                                                    <Box>
                                                        <img src={item.pic} width="100%" height="100%" />
                                                    </Box>
                                                </Button>
                                            </Link>

                                            <Typography sx={{ fontSize: "12px" }}> {item.desc} </Typography>
                                            <Typography sx={{ fontSize: "12px" }}> {item.price}</Typography>
                                        </Box>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Box >
                <Container maxWidth="xl">
                    <Box sx={{ width: "100%", background: "#fff", display: "flex", marginTop: "60px", marginTop: "70px" }}>
                        <Grid container spacing={2}>
                            {forproduct.map((item, index) => {
                                return (
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={2}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                        key={index}  >

                                        <Box sx={{
                                            width: "100%",
                                            boxShadow: "  rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;",
                                            border: "3px solid white", justifyContent: "center", alignItems: "center", justifyContent: "center", textAlign: "center"
                                        }}>
                                            <Link to={`/details/${item.id}`}>
                                                <Button>
                                                    <Box>
                                                        <img src={item.pic} width="100%" height="100%" />
                                                    </Box>
                                                </Button>
                                            </Link>


                                            <Typography sx={{ fontSize: "12px" }}> {item.desc} </Typography>
                                            <Typography sx={{ fontSize: "12px" }}> {item.price}</Typography>
                                        </Box>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default JustComponent