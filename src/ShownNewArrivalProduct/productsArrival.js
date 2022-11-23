import React from 'react'
import StrollerIcon from '@mui/icons-material/Stroller';
import { Box, Button, Container, Grid, Rating, Typography, } from "@mui/material";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import newarrival from './images/newarrival.jpg'
import newarrival2 from './images/newarrival2.jpg'
import newarrival3 from './images/newarrival3.jpg'
import newarrival4 from './images/newarrival4.png'
import newarrival5 from './images/newarrival5.jpg'
import newarrival6 from './images/newarrival6.jpg'
// import { useContext } from 'react';
import { products } from './dataofproductArrival.js';

// import { CartContext } from './productcreatecontext'
import { Link } from 'react-router-dom';
function ProductsArrival() {

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

    const Boximages = [
        {
            id: 1,
            pic: newarrival2,
            description: "Top Ranking Supplier",
            subdescription: "One stop services  for your store"

        },
        {
            id: 2,
            pic: newarrival5,
            description: "Top Ranking Supplier",
            subdescription: "One stop services  for your store"
        },
        {
            id: 3,
            pic: newarrival3,
            description: "Top Ranking Supplier",
            subdescription: "One stop services  for your store"

        },
        {
            id: 4,
            pic: newarrival4,
            description: "Top Ranking Supplier",
            subdescription: "One stop services  for your store"

        },
    ];
    return (
        <>
            <Box>
                <Container maxWidth="lg">
                    <Box sx={{ background: "#F2F3F7", display: "flex", justifyContent: "space-evenly",marginTop:"30px" }}>
                        <Box >
                            <Container >
                                <Box sx={{ marginTop: "20px" }}> <StrollerIcon />New arrivals </Box>
                                <Box sx={{ width: "100%", background: "#fff", display: "flex", marginTop: "20px", marginBottom: "50px" }}>
                                    <Grid container spacing={1}>
                                        {products.map((item, index) => {
                                            return (<>
                                                <Grid
                                                    item
                                                    xs={12}
                                                    sm={6}
                                                    md={4}
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between",
                                                    }}
                                                    key={index}>
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

                                                        <Typography sx={{ fontSize: "12px" }}> {item.price}</Typography>
                                                        <Typography sx={{ fontSize: "12px" }}> {item.desc} </Typography>
                                                    </Box>
                                                </Grid>
                                            </>);
                                        })}
                                    </Grid>
                                </Box>
                            </Container>
                        </Box>


                        <Box>
                            <Container >
                                <Box sx={{ marginTop: "20px" }}> <AutoGraphIcon />Top Ranking </Box>
                                <Box sx={{ width: "100%", background: "#fff", display: "flex", marginTop: "20px" }}>
                                    <Grid container spacing={1}>
                                        {products.map((item, index) => {
                                            return (
                                                <Grid
                                                    item
                                                    xs={12}
                                                    sm={6}
                                                    md={4}
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

                                                        <Typography sx={{ fontSize: "12px" }}> {item.price}</Typography>
                                                        <Typography sx={{ fontSize: "12px" }}> {item.desc} </Typography>
                                                    </Box>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Box>
                            </Container>
                        </Box>


                        <Box>
                            <Container >
                                <Box sx={{ marginTop: "20px" }}> <StrollerIcon />Personal Equiement</Box>


                                <Box sx={{ width: "100%", background: "#fff", display: "flex", marginTop: "20px" }}>
                                    <Grid container spacing={1}>
                                        {products.map((item, index) => {
                                            return (
                                                <Grid
                                                    item
                                                    xs={12}
                                                    sm={6}
                                                    md={4}
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

                                                        <Typography sx={{ fontSize: "12px" }}> {item.price}</Typography>
                                                        <Typography sx={{ fontSize: "12px" }}> {item.desc} </Typography>
                                                    </Box>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Box>
                            </Container>
                        </Box>
                    </Box>


                    <Box sx={{ background: "#F2F3F7", display: "flex", justifyContent: "space-evenly", marginTop: "70px" }}>
                        <Box >
                            <Container >
                                <Box sx={{ marginTop: "20px" }}> <StrollerIcon />Drop Shipping</Box>

                                <Box sx={{ width: "100%", background: "#fff", display: "flex", marginTop: "20px", marginBottom: "50px" }}>
                                    <Grid container spacing={1}>
                                        {products.map((item, index) => {
                                            return (
                                                <Grid
                                                    item
                                                    xs={12}
                                                    sm={6}
                                                    md={4}
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

                                                        <Typography sx={{ fontSize: "12px" }}> {item.price}</Typography>
                                                        <Typography sx={{ fontSize: "12px" }}> {item.desc} </Typography>
                                                    </Box>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Box>
                            </Container>
                        </Box>
                      
                      
                        <Box>
                            <Container >
                                <Box sx={{ marginTop: "20px" }}> <AutoGraphIcon />Regional Speciallist</Box>

                                <Box sx={{ width: "100%", background: "#fff", display: "flex", marginTop: "20px" }}>
                                    <Grid container spacing={1}>
                                        {products.map((item, index) => {
                                            return (
                                                <Grid
                                                    item
                                                    xs={12}
                                                    sm={6}
                                                    md={4}
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

                                                        <Typography sx={{ fontSize: "12px" }}> {item.price}</Typography>
                                                        <Typography sx={{ fontSize: "12px" }}> {item.desc} </Typography>
                                                    </Box>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Box>
                            </Container>
                        </Box>


                        <Box >
                            <Container >

                                <Box sx={{ marginTop: "20px" }}> <StrollerIcon />Tips</Box>

                                <Box sx={{ width: "100%", background: "#fff", display: "flex", marginTop: "20px" }}>
                                    <Grid container spacing={1}>
                                        {products.map((item, index) => {
                                            return (
                                                <Grid
                                                    item
                                                    xs={12}
                                                    sm={6}
                                                    md={4}
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

                                                        <Typography sx={{ fontSize: "12px" }}> {item.price}</Typography>
                                                        <Typography sx={{ fontSize: "12px" }}> {item.desc} </Typography>
                                                    </Box>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Box>
                            </Container>
                        </Box>
                    </Box>



                    <Box>
                        <Grid container spacing={2}>

                            <Grid
                                item
                                xs={12}
                                sm={2}
                                md={12}
                                sx={{
                                    marginTop: "70px",
                                    border: " 1px solid ",

                                }}>
                                <Box sx={{ display: "flex" }}>
                                    <Box sx={{ width: "27%", height: "50%" }}>
                                        <img src={newarrival6} width="100%" />

                                    </Box>
                                    {
                                        Boximages.map((item) => {
                                            return (
                                                <>
                                                    <Box sx={{
                                                        width: "20%", height: "80%", marginLeft: "5px",
                                                        boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px"
                                                    }}>
                                                        <Typography sx={{ fontWeight: 'bold', marginTop: "20px", marginLeft: "10px" }}>{item.description} </Typography>
                                                        <Typography sx={{ fontSize: "12px", marginTop: "5px", marginLeft: "10px   " }}>{item.subdescription}</Typography>

                                                        <Link to={`/details/${item.id}`}>
                                                            <Button>

                                                                <Box sx={{ marginLeft: "50%" }}>
                                                                    <img src={item.pic} width="75%" />
                                                                </Box>
                                                            </Button>
                                                        </Link>


                                                    </Box>
                                                </>)
                                        })
                                    }
                                    <br></br>
                                </Box>
                            </Grid>

                        </Grid>
                    </Box>


                    <Box >
                        <Container >
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


                    <Box >
                        <Container >
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


                    <Box>
                        <Grid container spacing={0}>
                            <Grid
                                item
                                xs={12}
                                sm={2}
                                md={12}
                                sx={{
                                    marginTop: "70px",
                                    marginBottom: "70px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    // display: "grid",
                                    gap: "10px",
                                    backgroundColor: "#2196F3",
                                    padding: "10px",
                                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                                    border: " 1px solid ",
                                    textAlign: "center",
                                    fontSize: "30px",
                                }}>
                                <Button><Typography>Japan</Typography></Button>
                                <Button><Typography>USA</Typography></Button>
                                <Button><Typography>Thailand</Typography></Button>
                                <Button><Typography>Italy</Typography></Button>
                                <Button><Typography>Turkey</Typography></Button>
                                <Button><Typography>Malaysia</Typography></Button>
                                <Button><Typography>South Korea</Typography></Button>
                                <Button><Typography>Russia</Typography></Button>
                                <Button><Typography>Vitenam</Typography></Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
export default ProductsArrival