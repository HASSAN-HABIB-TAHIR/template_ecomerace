import React from 'react'
import { Box, Button, TextField, Typography, Container, Grid } from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
function AliBabaFooter() {
    return (
        <>
            <Box sx={{ backgroundColor: "#445268", marginTop: "20px", paddingTop: "40px", paddingBottom: "30px" }}>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Typography sx={{ color: "white" }}>
                        Trade Alert - Delivering the latest
                        product trends and industry news straight to your inbox.
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                        <Box
                            sx={{

                                '& > :not(style)': { width: '49ch', marginTop: "20px", borderColor: "white", },
                            }}>
                            <TextField placeholder='Your Email' variant="outlined" borderColor="white" />

                        </Box>
                        <Box>
                            <Button variant="outlined"
                                sx={{
                                    marginLeft: "10px",
                                    color: "white", height: "7vh",
                                    borderColor: "white",
                                    marginTop: "20px"

                                }}>Subscribe</Button>
                        </Box>
                    </Box>
                </Box>
                <Container>

                    <Grid container spacing={3}>
                        <Grid item
                            md={2.4} xs={6}
                            sm={12}>
                            <Typography sx={{ color: "white", marginTop: "40px", fontWeight: "bold" }}>Customer services</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}>  Help Center</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}> Report abuse</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}> Open a case</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}> Policies & rules</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}>Get paid for your feedback </Typography>

                        </Grid>

                        <Grid item
                            md={2.4} xs={6}
                            sm={12}>
                            <Typography sx={{ color: "white", marginTop: "40px", fontWeight: "bold" }}>About Us</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}> About Alibaba.com</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}> About Alibaba Group</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}> Sitemap</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}> Alibaba.com Blog</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}>Legal Notice </Typography>
                        </Grid>

                        <Grid item
                            md={2.4} xs={6}
                            sm={12}>
                            <Typography sx={{ color: "white", marginTop: "40px", fontWeight: "bold" }}>Source on Alibaba.com</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}> Resources</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}> All categories</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}> Request for Quotation</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}> Ready to Ship</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}>Alibaba.com Select</Typography>
                        </Grid>

                        <Grid item
                            md={2.4} xs={6}
                            sm={12}>
                            <Typography sx={{ color: "white", marginTop: "40px", fontWeight: "bold" }}>Sell on Alibaba.com</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}> Supplier memberships</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}> Learning Center</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}> Partner Program</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}> Ready to Ship</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}>Alibaba.com Select</Typography>
                        </Grid>

                        <Grid item
                            md={2.4} xs={6}
                            sm={12}>
                            <Typography sx={{ color: "white", marginTop: "40px", fontWeight: "bold" }}>Trade services</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}>Trade Assurance</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}> Business identity</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}>Logistics services</Typography>
                            <br></br>
                            <Typography sx={{ color: "white", fontSize: "13px" }}>Letter of Credit</Typography>
                        </Grid>
                    </Grid>

                    <Box sx={{
                        background: '#313D52',
                        color: 'lime',
                        height: '3px',
                        width: '100%',
                        flex: 1,
                        marginTop: "40px",
                        marginLeft: "10px"
                    }}>

                    </Box>
                  
                    <Box sx={{ marginTop: "20px" }}>
                        <Typography sx={{ color: "white", fontSize: "13px" }}><PublicIcon />Alibaba.com Site: International -
                            Español - Português - Deutsch - Français - Italiano -
                            हिंदी - Pусский - 한국어 - 日本語 - اللغة العربية - ภาษาไทย -
                            Türk - Nederlands - tiếng Việt - Indonesian - עברית</Typography>
                    </Box>
                    <Box sx={{marginTop:"20px"}}>
                        <Typography sx={{color:"whitesmoke",textAlign:"center"}}>Follow us : <FacebookIcon/> <InstagramIcon /><LinkedInIcon />
                        <YouTubeIcon />
                        <TwitterIcon />
                        </Typography>
                    </Box>
                    <Typography sx={{
                        color: "white", fontSize: "13px", marginTop: "20px", width: "70%", marginLeft: "17%",
                        textAlign: "center", justifyContent: "center", alignItems: "center"
                    }}> Alibaba Group | Taobao Marketplace | Tmall.com | Juhuasuan | AliExpress |
                        Alibaba.com | 1688.com | Alimama | Fliggy | Tmall Taobao World
                        Alibaba Cloud | AliOS | AliTelecom | Autonavi | UCWeb | Umeng
                        | Xiami | DingTalk | Alipay | Lazada | Alibaba Security
                    </Typography>

                    <Typography sx={{ marginTop: "20px", color: "white", fontSize: "13px", textAlign: "center" }}>Browse Alphabetically: Onetouch |
                        Showroom | Country Search | Suppliers | Affiliate</Typography>


                        <Typography sx={{ marginTop: "20px", color: "white", fontSize: "13px", textAlign: "center" }}> Product Listing Policy -
                         Intellectual Property Protection - Privacy 
                         Policy - Terms of Use - User Information 
                         Legal Enquiry Guide</Typography>
                       
                       <Typography  sx={{ marginTop: "20px", color: "white", fontSize: "13px", textAlign: "center" }}>

                       @1999-2022-Alibaba.com-All-rights-reserved 浙公网安备 33010002000092-号 浙B2-20120091 </Typography>
               
                </Container>
            </Box>
        </>
    )
}

export default AliBabaFooter