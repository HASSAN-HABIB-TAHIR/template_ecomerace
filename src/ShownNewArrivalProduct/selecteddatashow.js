import React, { useState, useRef, useMemo, useEffect, useContext } from 'react';
import { Box } from '@mui/system';
import Button from '@mui/material/Button'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index1.css'
import { products } from './dataofproductArrival.js';
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { BooksContext } from "../AddtoCartFunctionaltity/ContextApi";


function SelectedDataShow() {

    const context = useContext(BooksContext);

    const totalCartCount = context.state.cart.reduce(
        (total, book) => (total),
        0
    );


    // const [addToCart] =useContext(CartContext)
    const [product, setProducts] = useState({ products })
    const { id } = useParams()



    useEffect(() => {
        getProduct()
    })

    const getProduct = () => {
        const newProduct = products.find((item) => item.id === parseInt(id))
        setProducts(newProduct)
    }

    const [defaultImage, setDefaultImage] = useState({});
    const [img, setImg] = useState(product[0]);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    console.log("product ",product );
    return (
        <>
            <Container>
              <div><h2 >Product Description </h2></div>
              <br></br>

                <div><h3 >{product.name}</h3></div>
                <br></br>
                <Box>
                    <Slider {...settings}>
                        <Card sx={{ maxWidth: 345, }}>
                            <CardActionArea>
                                <CardMedia

                                    component="img"
                                    height="140"
                                    alt="green iguana"
                                    sx={{
                                        width: "50%", marginLeft: "70px", marginTop: "20px",
                                        "&:hover": { transform: "scale(1.5)" }
                                    }}
                                    img src={product.pic}
                                />

                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">

                                        <h5> {product.fulldesc}</h5>

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                </Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 345, }}>
                            <CardActionArea>
                                <CardMedia

                                    component="img"
                                    height="140"
                                    alt="green iguana"
                                    sx={{
                                        width: "50%", marginLeft: "70px", marginTop: "20px",
                                        "&:hover": { transform: "scale(1.5)" }
                                    }}
                                    img src={product.pic1}
                                />

                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">

                                        <h5> {product.fulldesc}</h5>

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                </Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 345, }}>
                            <CardActionArea>
                                <CardMedia

                                    component="img"
                                    height="140"
                                    alt="green iguana"
                                    sx={{
                                        width: "50%", marginLeft: "70px", marginTop: "20px",
                                        "&:hover": { transform: "scale(1.5)" }
                                    }}
                                    img src={product.pic2}
                                />

                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">

                                        <h5> {product.fulldesc}</h5>

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                </Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 345, }}>
                            <CardActionArea>
                                <CardMedia

                                    component="img"
                                    height="140"
                                    alt="green iguana"
                                    sx={{
                                        width: "50%", marginLeft: "70px", marginTop: "20px",
                                        "&:hover": { transform: "scale(1.5)" }
                                    }}
                                    img src={product.pic3}
                                />

                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">

                                        <h5> {product.fulldesc}</h5>

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                </Button>
                            </CardActions>
                        </Card>


                        <Card sx={{ maxWidth: 345, }}>
                            <CardActionArea>
                                <CardMedia

                                    component="img"
                                    height="140"
                                    alt="green iguana"
                                    sx={{
                                        width: "50%", marginLeft: "70px", marginTop: "20px",
                                        "&:hover": { transform: "scale(1.5)" }
                                    }}
                                    img src={product.pic4}
                                />

                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">

                                        <h5> {product.fulldesc}</h5>

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                </Button>
                            </CardActions>
                        </Card>


                        <Card sx={{ maxWidth: 345, }}>
                            <CardActionArea>
                                <CardMedia

                                    component="img"
                                    height="140"
                                    alt="green iguana"
                                    sx={{
                                        width: "50%", marginLeft: "70px", marginTop: "20px",
                                        "&:hover": { transform: "scale(1.5)" }
                                    }}
                                    img src={product.pic1}
                                />

                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">

                                        <h5> {product.fulldesc}</h5>

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                </Button>
                            </CardActions>
                        </Card>


                        <Card sx={{ maxWidth: 345, }}>
                            <CardActionArea>
                                <CardMedia

                                    component="img"
                                    height="140"
                                    alt="green iguana"
                                    sx={{
                                        width: "50%", marginLeft: "70px", marginTop: "20px",
                                        "&:hover": { transform: "scale(1.5)" }
                                    }}
                                    img src={product.pic2}
                                />

                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">

                                        <h5> {product.fulldesc}</h5>

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                </Button>
                            </CardActions>
                        </Card>
                    </Slider>
                </Box>


                {context.state.booklist.map((book) => {

                })}
                <Link to="/">
                    <Box sx={{ textAlign: "center", fontSize: "40px", textDecoration: 'none' }}>
                        <Button variant="contained"
                            onClick={() => context.addToCart(product)}>Add to Cart</Button>
                            


                    </Box>
                </Link>
            </Container>
        </>
    )
}
export default SelectedDataShow