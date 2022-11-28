import React from 'react'
import { Box, Button, Container, Grid, Rating, Typography, } from "@mui/material";
import { Link } from 'react-router-dom';
import StrollerIcon from '@mui/icons-material/Stroller';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { products } from './dataofproductArrival.js';

function NewArrivalTips() 
{
    return (
        <>
            <Box sx={{ background: "#F2F3F7", display: "flex", justifyContent: "space-evenly", marginTop: "30px" }}>
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
        </>
    )
}
export default NewArrivalTips