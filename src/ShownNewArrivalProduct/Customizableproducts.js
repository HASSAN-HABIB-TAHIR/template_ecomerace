import React from 'react'
import { Box, Button, Container, Grid, Rating, Typography, } from "@mui/material";
import laptop from './images/laptop.jpg'
import infix from './images/InfinixZero20.png'
import pencile from './images/pencile.jpg'
function Customizableproducts() {
    return (
        <>

            <Grid container spacing={3}
                item xs={12}
                sm={12}
                md={12}>

                <Grid
                    item xs={12}
                    sm={12}
                    md={6}>
                    <Box sx={{
                        backgroundColor: "white",
                        marginTop: "20px"
                    }}>
                        <Box sx={{ display: "flex" }}>
                            <Box>
                                <Typography
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "25px", color: "#333333",
                                        paddingTop: "30px",
                                        marginLeft: "30px"
                                    }}>
                                    Customizable products</Typography>

                                <Typography sx={{ marginLeft: "30px", color: "gray", width: "100%" }}>
                                    Provided by 60,000+ experienced
                                    manufacturers with design and
                                    production capabilities and
                                    on-time delivery.
                                </Typography>
                            </Box>
                            <Box> <img src={pencile} /></Box>
                        </Box>

                        <Grid container spacing={2}>
                            <Grid
                                item md={6}
                                sm={12}
                                xs={12}>
                                <Box sx={{ backgroundColor: "#F7F7F7" }}>
                                    <Typography sx={{
                                        textAlign: "center",
                                        fontWeight: "bold", width: "100%", paddingTop: "20px"
                                    }}>
                                        Source from factories
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: "space-around", marginTop: "20px", paddingBottom: "30px" }}>
                                        <img src={infix} />
                                        <img src={infix} />
                                        <img src={infix} />
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid
                                item md={6}
                                sm={12}
                                xs={12}>
                                <Box sx={{ backgroundColor: "#F7F7F7" }}>
                                    <Typography sx={{
                                        textAlign: "center",
                                        fontWeight: "bold", width: "100%", paddingTop: "20px"
                                    }}>
                                        Top Ranking Supplier
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: "space-around", marginTop: "20px", paddingBottom: "30px" }}>

                                        <img src={laptop} width="30%" height="100vh" />
                                        <img src={laptop} width="30%" />
                                        <img src={laptop} width="30%" />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                <Grid
                    item xs={12}
                    sm={12}
                    md={6}>
                    <Box sx={{
                        backgroundColor: "white",
                        marginTop: "20px"
                    }}>
                        <Box sx={{ display: "flex" }}>
                            <Box>
                                <Typography
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "25px", color: "#333333",
                                        paddingTop: "30px",
                                        marginLeft: "30px"
                                    }}>
                                    Ready-to-ship products</Typography>

                                <Typography sx={{ marginLeft: "30px", color: "gray", width: "100%" }}>
                                    Source from 15 million
                                    products that are ready
                                    to ship, and leave the facility within 15 days.
                                </Typography>
                            </Box>
                            <Box> <img src={pencile} /></Box>
                        </Box>

                        <Grid container spacing={2}>
                            <Grid
                                item md={6}
                                sm={12}
                                xs={12}>
                                <Box sx={{ backgroundColor: "#F7F7F7" }}>
                                    <Typography sx={{
                                        textAlign: "center",
                                        fontWeight: "bold", width: "100%", paddingTop: "20px"
                                    }}>
                                        Exclusive Discount
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: "space-around", marginTop: "20px", paddingBottom: "30px" }}>
                                        <img src={infix} />
                                        <img src={infix} />
                                        <img src={infix} />
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid
                                item md={6}
                                sm={12}
                                xs={12}>
                                <Box sx={{ backgroundColor: "#F7F7F7" }}>
                                    <Typography sx={{
                                        textAlign: "center",
                                        fontWeight: "bold", width: "100%", paddingTop: "20px"
                                    }}>
                                        weekly details
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: "space-around", marginTop: "20px", paddingBottom: "30px" }}>
                                        <img src={laptop} width="30%" height="100vh" />
                                        <img src={laptop} width="30%" />
                                        <img src={laptop} width="30%" />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
export default Customizableproducts