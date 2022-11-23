import React, { createContext, useState } from "react";
import "./style.css";
import { data } from "./data";
export const BooksContext = createContext();

export default function AppContext({ children }) {
  const [state, setState] = useState({
    booklist: data,
    cart: [],
    
  });
  const addToCart = (book) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === book.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === book.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...book, count: 1 }]
      });
      console.log("state is " ,state );
    alert("Items is Added Successfullt to Cart ")
  };

  // if (action.type === "MobileFilter") {
  //   const array = cart.filter((items) => {
  //     return items?.name?.includes('Mobile');
  //   })
  //   setState({ ...state, cart: state.cart.filter((cartItem) => cartItem.id !== id)
  //   });

  // }





// const Search =(searchText) => (dispatch) => {
//   dispatch({
//     type: SEARCH_CONTACTS,
//     payload: searchText,
//   });
// };




  const removeFromCart = (id) =>
    setState({ ...state, cart: state.cart.filter((cartItem) => cartItem.id !== id)
    });

  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      )
    });
  };

  const decrease = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      )
    });
  };



  return (
    <BooksContext.Provider
      value={{ state, addToCart, increase, decrease, removeFromCart }}
    >
      
      {children}
      
    </BooksContext.Provider>
  );
}
