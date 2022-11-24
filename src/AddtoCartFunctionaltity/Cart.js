import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "./ContextApi";
import Button from '@mui/material/Button'
import { Box } from '@mui/system';
import { Container } from "@mui/material";


const Cart = () => {
  const context = useContext(BooksContext);


  const totalCartAmount = context.state.cart
    .reduce((total, book) => (total = total + book.price * book.count), 0)
    .toFixed(2);

  const totalCartCount = context.state.cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );
  return (
    <>
      <Container maxWidth="md">
        <Box>
          <h1> Cart Items </h1>
          <Box sx={{ display: "flex", justifyContent: "space-between",marginTop:"20px"}}>
            <Link to="/">Home Page </Link>
            <span>  Cart  ({totalCartCount})</span>
          </Box>
          <br></br>

    <Box sx={{backgroundColor:"white"}}>
          {
            context.state.cart.map((book) => (
            <div className="book" key={book.id}>
              <img src={book.pic} alt={book.name} />
              <div>
                <h4>{book.name}</h4>
                <p>Price:{book.price} R.s</p>
                <p>Total: {((book.price) * (book.count)).toFixed(2)}</p>
                <p>You have a total  {book.count}  Items in your cart.</p>
                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                  <Button variant="contained" onClick={() => context.decrease(book.id)}>-</Button>
                  <Button variant="contained" onClick={() => context.removeFromCart(book.id)}>
                    Remove
                  </Button>
                  <Button variant="contained" onClick={() => context.increase(book.id)}>+</Button>
                </Box>
              </div>
            </div>
          ))}
          </Box>
                <Box sx={{backgroundColor:"white",marginBottom:"20px",padding:"30px"}}>
          <h3>Total Cart Amount  ( {totalCartAmount} ) R.s </h3>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Cart;