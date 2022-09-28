import { createContext, useState} from "react";

const addCartItem = (cartItems,productToAdd) => {

  // find if cart items contains product to add
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id == productToAdd.id
  )

  //if found increment quantity
  if (existingCartItem){
    return cartItems.map((cartItem) =>
    cartItem.id == productToAdd.id
    ?{...cartItem, quantity: cartItem.quantity + 1}
    : cartItem
    );
  }
  // return new array with modified cart items/ new cart item
  return [...cartItems,{...productToAdd,quantity:1 }];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart:() => {}
});

 /*
 products are objects
 {
id,
name,
price,
imageURL,
 }
 
 */
export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const [cartItems, setCartItems]= useState([]);
    // add item to cart function 
    const addItemToCart =(productToAdd)  => {
        setCartItems(addCartItem(cartItems, productToAdd));

    }


    const value = {isCartOpen, setIsCartOpen,addItemToCart,cartItems };
    
    return <CartContext.Provider value = {value} > {children}</CartContext.Provider>
}