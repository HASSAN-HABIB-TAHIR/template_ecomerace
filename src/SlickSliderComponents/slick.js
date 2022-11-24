import React, { Component } from "react";
import Slider from "react-slick";
import factory from './images/factory.png'
import popular from './images/popular.png'
import southkorea from './images/southkorea.png'
import us from './images/us.png'
import { Box, Container } from "@mui/material";
import './index1.css'
import Layout from "./Layout1";
import ImageSlider, { Slide } from "react-auto-image-slider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import iamge from './images/image.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
function Slick() {

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <>

      <Box>
        <Container maxWidth="xl">
          <Box sx={{ background: "#fff", marginTop: "20px" }}>

            <Grid container spacing={1}>

              <Grid item md={3} xs={12}>   <Box>
                <Layout />
              </Box></Grid>
              <Grid item md={6} xs={12}>
                <Box sx={{}}>
                  {/* <ImageSlider  effectDelay={500} autoPlayDelay={2000}> */}

                  <div>

                    <Slider {...settings}>
                      <div>
                        <img style={{ width: "100%", height: "50vh" }} src={factory} />
                      </div>
                      <div>
                        <img style={{ width: "100%", height: "50vh" }} src={popular} />
                      </div>
                      <div>
                        <img style={{ width: "100%", height: "50vh" }} src={southkorea} />
                      </div>
                      <div>
                        <img style={{ width: "100%", height: "50vh" }} src={us} />
                      </div>

                    </Slider>
                  </div>

                </Box>
              </Grid>
              <Grid item md={3} xs={12}>  


               <Box sx={{}}>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "10px",marginLeft:"20px" }}>
                  <Typography> Sign up to enjoy exciting Buyers Club benefits</Typography>

                  <Button variant="contained" sx={{ borderRadius: "25px", backgroundColor: "#FF6A00", width: "90%" }} >Join fOR free</Button>
                  <Button variant="outlined" sx={{ borderRadius: "25px", backgroundColor: "#ffffff", width: "90%", textColor: "#00000", }} >Join for free</Button>
                </Box>

                <Box sx={{ display: "flex", marginTop: "20px",marginLeft:"20px"  }}>
                  <Typography sx={{ fontWeight: 'bold' }}> Buyers Club  </Typography>
                  <ArrowForwardIcon />
                </Box>

                <Box sx={{
                  display: "flex", width: "90%", marginTop: "10px",marginLeft:"20px",height:"15vh",
                  backgroundColor:"#F4F4F4",padding:"1rem 2rem",alignItems:"center",justifyContent:"center",


                }}>
                  <Box sx={{ width: "100%" }}><Typography sx={{ fontWeight: 'bold', marginLeft: "10px", }}>US $10 with a new Supplier</Typography> </Box>
                  <Box sx={{  width: "100%" }}><img src={iamge} width="100%" height="100%" /></Box>
                </Box>

                <br></br>
                <Box sx={{
                  display: "flex", width: "90%", marginTop: "10px",marginLeft:"20px",
                  backgroundColor:"#F4F4F4",height:"15vh",
                  padding:"2rem 1rem",alignItems:"center",
                }}>
                  <Box sx={{ width: "100%" }}><Typography sx={{ fontWeight: 'bold', marginTop: "20px", marginLeft: "10px", }}>Quotes with Supplier preferences</Typography> </Box>
                  <Box sx={{ width: "100%" }}><img src={iamge} width="100%" height="100%" /></Box>
                </Box>
              </Box>


              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}
export default Slick