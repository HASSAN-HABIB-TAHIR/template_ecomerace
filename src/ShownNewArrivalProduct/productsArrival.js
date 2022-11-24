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
import russia from './images/Flag_of_Russia_(bordered).png'
import vitenam from './images/Flag_of_Vietnam.png'
import malaysia from './images/Flag-Malaysia.png'
import turkey from './images/Flag-map_of_Turkey.png'
import thailand from './images/Flag-Thailand.png'
import Usa from './images/Flag-United-States-of-America.png'
import italy from './images/italy_flag_1024x.png'
import japan from './images/japanflag.png'
import korea from './images/korean-flag.jpg'
import meeting from './images/meeting.png'
import MenuItem from '@mui/material/MenuItem';
import apprael from './images/apprael.png'
import drone from './images/dronee.JPG'
// import { useContext } from 'react';
import { products } from './dataofproductArrival.js';

// import { CartContext } from './productcreatecontext'
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';



const currencies = [
    {
        value: ' pole/poles ',
        label: ' pole/poles ',
    },
    {
        value: 'Quart/Quarts',
        label: 'Quart/Quarts',
    },
    {
        value: 'Rod/Rods',
        label: 'Rod/Rods',
    },
    {
        value: 'Roll/Rolls',
        label: 'Roll/Rolls',
    },
    {
        value: 'SquareFoot',
        label: 'SquareFoot',
    },
    {
        value: 'SquareInches',
        label: 'SquareInches',
    },

];

export function SelectTextFields() {
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="pieces/pieces"
                    value={currency}
                    onChange={handleChange}
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

            </div>



        </Box>
    );
}


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
                <Container maxWidth="xl">
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




                    <Box >


                        <Box sx={{ display: "flex" ,marginTop:"10px",marginBottom:"20px" }}> 
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




                    <Box>
                    <Box sx={{ display: "flex" ,marginTop:"10px",marginBottom:"20px" }}> 
                        <Typography sx={{ fontWeight: "bold", fontSize: "26px" }}>Consumer Electronic</Typography>
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
                                    <img src={apprael} width="100%" />
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




                    <Box>
                    <Box sx={{ display: "flex",marginTop:"10px",marginBottom:"20px" }}> 
                        <Typography sx={{ fontWeight: "bold", fontSize: "26px" }}>Apparel </Typography>
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
                                    <img src={drone} width="100%" />
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



                    <Box>
                        <Box sx={{ display: "flex", marginTop: "20px", marginLeft: "21px" }}>
                            <Box><Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>Request for Quotation</Typography>  </Box>
                            <Box><Typography sx={{ fontSize: "15px", marginTop: "10px" }}> Get customized quotes quickly</Typography>  </Box>
                        </Box>
                        <Container maxWidth="xl">
                            <Grid container spacing={2}>

                                <Grid item md={6} xs={12}>
                                    <Box sx={{ background: `url(${meeting})`, marginTop: "20px" }}>
                                        <Typography sx={{ fontWeight: "bold", color: "white", paddingTop: "30px", fontSize: "20px", marginLeft: "50px" }}> Global Sourcing marketplace </Typography>

                                        <Box sx={{ display: "flex" }}>
                                            <Box>
                                                <Typography sx={{ fontWeight: "bold", color: "white", paddingTop: "40px", fontSize: "20px", marginLeft: "50px" }}> 2433000+  </Typography>
                                                <Typography sx={{ color: "white", fontSize: "15px", marginLeft: "50px" }}>RFQS </Typography>
                                            </Box>
                                            <Box>
                                                <Typography sx={{ fontWeight: "bold", color: "white", paddingTop: "40px", fontSize: "20px", marginLeft: "50px" }}>22h  </Typography>
                                                <Typography sx={{ color: "white", fontSize: "15px", marginLeft: "50px" }}>Average Response Time  </Typography>
                                            </Box>
                                        </Box>

                                        <Box sx={{ display: "flex" }}>
                                            <Box>
                                                <Typography sx={{ fontWeight: "bold", color: "white", paddingTop: "40px", fontSize: "20px", marginLeft: "50px" }}> 165000+  </Typography>
                                                <Typography sx={{ color: "white", fontSize: "15px", marginLeft: "50px" }}>Active Supplier </Typography>
                                            </Box>
                                            <Box>
                                                <Typography sx={{ fontWeight: "bold", color: "white", paddingTop: "40px", fontSize: "20px", marginLeft: "50px" }}>7454 </Typography>
                                                <Typography sx={{ color: "white", fontSize: "15px", marginLeft: "50px" }}>Industries </Typography>
                                            </Box>
                                        </Box>
                                        <Button variant="outlined" sx={{ borderRadius: "25px", width: "20%", color: "white", marginLeft: "40px", marginTop: "40px", marginBottom: "50px", borderColor: "white" }} >Learn More </Button>
                                    </Box>

                                </Grid>


                                <Grid item md={6} xs={12}>

                                    <Box sx={{ backgroundColor: "white", marginTop: "20px", border: "5px solid #DCDEE3" }}>
                                        <Typography sx={{ fontWeight: "bold", fontSize: "30px", color: "#333333", paddingTop: "30px", marginLeft: "30px" }}>One request, multiple quotes</Typography>

                                        <Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { width: '49ch', marginLeft: "30px", marginTop: "40px" },
                                            }}>
                                            <TextField id="outlined-basic" placeholder='Enter Product Name ' variant="outlined" />
                                        </Box>
                                        <Box sx={{ display: "flex", marginLeft: "30px", marginTop: "40px", gap: "20px" }}>
                                            <Box>
                                                <TextField
                                                    label="Quantities"
                                                    type="number"
                                                    id="outlined-size-normal"
                                                    defaultValue="Normal"
                                                    variant="outlined"
                                                />
                                            </Box>
                                            <Box> <SelectTextFields /></Box>
                                        </Box>
                                        <Button variant="outlined"
                                            sx={{
                                                borderRadius: "25px",
                                                width: "40%", backgroundColor: "#FF6600",
                                                color: "black", marginLeft: "40px",
                                                marginTop: "40px", marginBottom: "17px",
                                                borderColor: "white"
                                            }} >
                                            Request for Quotation  </Button>

                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>



                    <Box >
                    
                        <Container maxWidth="xl">
                        <Box sx={{ display: "flex",marginTop:"20px"}}> 
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
                            <Box sx={{ width: "100%", background: "#fff", display: "flex", marginTop: "20px"}}>
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

                    <Box sx={{ marginTop: "50px"}}>


                        <Box sx={{ display: "flex",marginTop:"10px",marginBottom:"20px" }}> 
                        <Typography sx={{ fontWeight: "bold", fontSize: "26px" }}>Suppliers by country or region </Typography>
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
                        <Box
                            sx={{
                                marginBottom: "70px",
                                display: "flex",
                                alignitems: "center",
                                justifyContent: "space-around",
                                backgroundColor: "#2196F3",
                                padding: "10px",
                                backgroundColor: "rgba(255, 255, 255, 0.8)",
                                border: " 1px solid ",
                                fontSize: "30px",
                            }}>

                            <Button> <img src={japan} width="20%" /> <Typography>Japan</Typography></Button>
                            <Button> <img src={Usa} width="50%" /><Typography>USA</Typography></Button>
                            {/* <Button><img src={thailand} width="20%" /><Typography>Thailand</Typography></Button> */}
                            <Button><img src={turkey} width="20%" /><Typography>Turkey</Typography></Button>
                            <Button><img src={malaysia} width="50%" /><Typography>Malaysia</Typography></Button>
                            <Button><img src={vitenam} width="15%" /><Typography>Vitenam</Typography></Button>
                            <Button><img src={russia} width="13%" /><Typography>Russia</Typography></Button>

                            <Button><img src={italy} width="40%" /><Typography>Italy</Typography></Button>
                            {/* <Button><img src={korea} width="20%" /><Typography>South Korea</Typography></Button>     */}
                        </Box>
                    </Box>


                </Container>
            </Box>
        </>
    )
}
export default ProductsArrival