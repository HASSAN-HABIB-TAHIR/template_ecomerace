import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import LoginIcon from "@mui/icons-material/Login";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import logo from "./images/Alibaba-Logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BooksContext } from "../AddtoCartFunctionaltity/ContextApi";

// import Draw from "./Draw";

export default function Navbar() {
  const context = useContext(BooksContext);

  const totalCartAmount = context.state.cart
    .reduce((total, book) => (total = total + book.price * book.count), 0)
    .toFixed(2);


  const totalCartCount = context.state.cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );




  const matches = useMediaQuery("(max-width:900px)");
  return (
    <>
      <Box>
        <Container maxWidth="xl">
          {matches ? (
            <>
              <Grid
                container
                justifyContent="center"
                alignContent="center"
                alignItems="center"
                sx={{
                  mt: "-30px",
                }}
              >
                <Grid item xs={10} sm={6}>
                  <img src={logo} alt="logo" width="65%" />
                </Grid>
                <Grid item xs={2}>
                  <Box
                    sx={{
                      mt: { xs: "20px", sm: "0px" },
                    }}
                  >
                    {/* <Draw /> */}
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box
                    sx={{
                      display: "flex",

                      width: "100%",
                      mt: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <input
                        type="text"
                        style={{
                          width: "100%",
                          height: "40px",
                          borderRadius: "30px",
                          border: "2px solid #FF6A00",
                          outline: "none",
                          paddingLeft: "20px",
                          paddingRight: "20px",

                          fontSize: "16px",
                        }}
                      />
                    </Box>
                    <Button
                      sx={{
                        color: "white",
                        backgroundColor: "#FF6A00",
                        width: "150px",
                        marginLeft: "-50px",
                        borderTopRightRadius: "30px",
                        borderBottomRightRadius: "30px",
                        textTransform: "none",

                        "&:hover": {
                          backgroundColor: "#ff7519",
                        },
                      }}
                    >
                      Search
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <Grid
                container
                justifyContent="center"
                alignContent="center"
                alignItems="center"
                sx={{
                  mt: "-5px",
                }}
              >
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img src={logo} alt="logo" width="70%" />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      mt: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <input
                      
                        type="text"
                        style={{
                          width: "100%",
                          height: "40px",
                          borderRadius: "30px",
                          border: "2px solid #FF6A00",
                          outline: "none",
                          paddingLeft: "50px",
                          fontSize: "16px",
                        }}
                      />
                    </Box>
                    <Button
                      sx={{
                        color: "white",
                        backgroundColor: "#FF6A00",
                        width: "150px",
                        marginLeft: "-50px",
                        borderTopRightRadius: "30px",
                        borderBottomRightRadius: "30px",
                        textTransform: "none",

                        "&:hover": {
                          backgroundColor: "#ff7519",
                        },
                      }}
                    >
                      Search
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",

                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: "5px",
                      }}
                    >
                      <Box
                        sx={{
                          mt: "0px",
                        }}
                      >
                        <LoginIcon
                          sx={{
                            color: "black",
                            fontSize: "45px",
                            mt: "10px",
                          }}
                        />
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            fontSize: "13px",
                            mt: "10px",
                            fontWeight: 400,
                          }}
                        >
                          Sing in
                          <br />
                          Join in free
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        mt: "10px",
                      }}
                    >
                      <MarkUnreadChatAltIcon
                        sx={{
                          fontSize: "28px",
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "rbga(0,0,0,0.5)",
                        }}
                      >
                        Messages
                      </Typography>
                    </Box>
                    <Box>
                      <MonetizationOnIcon
                        sx={{
                          fontSize: "30px",
                          mt: "10px",
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "rbga(0,0,0,0.5)",
                        }}
                      >
                        Oders
                      </Typography>
                    </Box>
                    <Box>

                      <Link to="/cart">
                        <ShoppingCartCheckoutIcon
                          sx={{
                            fontSize: "30px",
                            mt: "12px",
                          }}
                        />

                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "rbga(0,0,0,0.5)",
                          }}
                        >
                          Cart  ({totalCartCount})
                        </Typography>


                      </Link>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </>
          )}
        </Container>
      </Box>
    </>
  );
}