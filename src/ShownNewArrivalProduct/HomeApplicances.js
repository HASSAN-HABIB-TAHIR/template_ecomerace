import React from 'react'
import { Box, Button, Container, Grid, Rating, Typography, } from "@mui/material";
import { Link } from 'react-router-dom';
import newarrival2 from './images/newarrival2.jpg'
import newarrival3 from './images/newarrival3.jpg'
import newarrival4 from './images/newarrival4.png'
import newarrival5 from './images/newarrival5.jpg'
import newarrival6 from './images/newarrival6.jpg'

function HomeApplicances() {
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
            <Box >
                <Box sx={{ display: "flex", marginTop: "10px", marginBottom: "20px" }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "26px" }}>Home Appliances </Typography>
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

                <Grid container spacing={0}>

                    <Grid
                        item
                        xs={6}
                        sm={12}
                        md={3}
                    >
                        <Box sx={{ width: "100%" }}>
                            <img src={newarrival6} width="100%" />
                        </Box>

                    </Grid>

                    {
                        Boximages.map((item, index) => {
                            return (
                                <>
                                    <Grid
                                        item
                                        xs={6}
                                        sm={12}
                                        md={2.25}
                                    >
                                        <Box sx={{ display: "flex", flexDirection: "column", backgroundColor: "white", padding: "13px 0px" }}>
                                            <Box sx={{
                                                width: "100%",
                                                backgroundColor: "white"
                                            }}>
                                                <Typography sx={{ fontWeight: 'bold', marginTop: "20px", marginLeft: "10px" }}>{item.description}</Typography>
                                                <Typography sx={{ fontSize: "12px", marginTop: "5px", marginLeft: "10px   " }}>{item.subdescription}</Typography>
                                                <Box sx={{ marginLeft: "60%" }}>

                                                    <Link to={`/details/${item.id}`}>
                                                        <Button>

                                                            <Box sx={{ marginLeft: "10%" }}>
                                                                <img src={item.pic} width="100%" />
                                                            </Box>
                                                        </Button>
                                                    </Link>
                                                </Box>
                                            </Box>

                                            <Box sx={{
                                                width: "100%",
                                                backgroundColor: "white"

                                            }}>
                                                <Typography sx={{ fontWeight: 'bold', marginTop: "20px", marginLeft: "10px" }}>{item.description}</Typography>
                                                <Typography sx={{ fontSize: "12px", marginTop: "5px", marginLeft: "10px   " }}>{item.subdescription}</Typography>
                                                <Box sx={{ marginLeft: "60%" }}>

                                                    <Link to={`/details/${item.id}`}>
                                                        <Button>

                                                            <Box sx={{ marginLeft: "10%" }}>
                                                                <img src={item.pic} width="100%" />
                                                            </Box>
                                                        </Button>
                                                    </Link>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </>
                            )
                        })}
                </Grid>
            </Box>
        </>
    )
}

export default HomeApplicances