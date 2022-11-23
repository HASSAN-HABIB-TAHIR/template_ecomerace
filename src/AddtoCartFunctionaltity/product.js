import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from  "./ContextApi";
import Button from '@mui/material/Button'


const Products = (props) => {
  const context = useContext(BooksContext);

  const totalCartCount = context.state.cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );

  return (
    <div>
    <br></br>
      <h2>
        <span></span>
        <Link to="/car7t">View Cart Items  ({totalCartCount})</Link>

      </h2>
      {context.state.booklist.map((book) => (
        <div key={book.id} className="book">
          <img src={book.pic} alt={book.name} />
          <div> 
            <h4>{book.name}</h4>
            <br></br>
            <p>Price: {book.price} </p>
            <p>Alert: {book.desc}</p>
            <Button variant="contained" onClick={() => context.addToCart(book)}>Add to Cart</Button>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default Products;
