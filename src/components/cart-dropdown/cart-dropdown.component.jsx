import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { useNavigate } from "react-router";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {CartDrowndownContainer,EmptyMessage,CartItems} from "./cart-dropdown.styles.jsx";

const CartDowndown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDrowndownContainer>
      <CartItems>
        {
          cartItems.length ? (cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))) : (
            <EmptyMessage> Your cart is empty</EmptyMessage>
          )
        }
      
      </CartItems>

      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDrowndownContainer>
  );
};

export default CartDowndown;
