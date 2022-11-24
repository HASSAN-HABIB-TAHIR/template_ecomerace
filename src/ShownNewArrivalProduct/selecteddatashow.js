import React, { useState, useRef, useMemo, useEffect, useContext } from 'react';
import { Box } from '@mui/system';
import Button from '@mui/material/Button'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './index1.css'
import './indexZoom.css'
import { products } from './dataofproductArrival.js';
import { Link } from "react-router-dom";
import { BooksContext } from "../AddtoCartFunctionaltity/ContextApi";
import ReactImageMagnify from 'react-image-magnify';
import downlaod from "./images/download.png"
import download2 from "./images/download2.png"
import download3 from "./images/download3.png"
import download4 from "./images/download4.png"
import download7 from "./images/download7.png"


function SelectedDataShow() {
    const images = [
        downlaod,
        download2,
        download3,
        download4,
        download7,
        // product.pic,
        // product.pic1,
        // product.pic2,
        // product.pic3,
    ];

    const [img21, setImg21] = useState(images[0]);
    const hoverHandler = (image, i) => {
        setImg21(image);
        refs.current[i].classList.add('active');
        for (var j = 0; j < images.length; j++) {
            if (i !== j) {
                refs.current[j].classList.remove('active');
            }
        }
    };

    const refs = useRef([]);
    refs.current = [];
    const addRefs = (el) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };
    const context = useContext(BooksContext);
    const totalCartCount = context.state.cart.reduce(
        (total, book) => (total),
        0
    );
    const [product, setProducts] = useState({ products })
    const { id } = useParams()

    useEffect(() => {
        getProduct()
    })

    const getProduct = () => {
        const newProduct = products.find((item) => item.id === parseInt(id))
        setProducts(newProduct)
    }

    // const [defaultImage, setDefaultImage] = useState({});
    // const [img, setImg] = useState(product[0]);

    return (
        <>
            <Container>
                <h2 >Product Description </h2>
                <br></br>

                <h3 >{product.name}</h3>
                <br></br>
                <Box>

                    <Box sx={{
                        maxWidth: "1200px",
                        margin: " 0 auto",
                        display: "grid",
                        gridtemplateColumns: "repeat(2, 1fr)"
                    }}>

                        <Box sx={{
                            display: "flex",
                            height: " 50vh"
                        }}>
                            <Box sx={{
                                display: " flex",
                                flexDirection: "column",
                                gap: "10px"
                            }}>
                                {images.map((image, i) => (
                                    <div
                                        className={i == 0 ? 'img_wrap active' : 'img_wrap'}
                                        key={i}
                                        onMouseOver={() => hoverHandler(image, i)}
                                        ref={addRefs}
                                    >
                                        <img src={image} alt="image" />
                                    </div>
                                ))}
                            </Box>


                            <Box >
                                <ReactImageMagnify
                                    {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src: img21,
                                        },
                                        largeImage: {
                                            src: img21,
                                            width: 1200,
                                            height: 1800,
                                        },
                                        enlargedImageContainerDimensions: {
                                            width: '150%',
                                            height: '150%',
                                        },
                                    }}
                                />
                            </Box>
                        </Box>
                        <div className="right"></div>
                    </Box>


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