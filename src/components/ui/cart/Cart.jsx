import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
import CartItem from "./CartItem";
import '../../../styles/components/shopping-cart.scss';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/cartModal/CartModalSlice";




 
function Cart() {

    const dispatch = useDispatch();
    const cartProducts = useSelector((state)=> state.cart.cartItems)
    const totalAmount = useSelector((state)=> state.cart.totalAmount)

    console.log(totalAmount);

  return (
    <div className="cart__container">
        <ListGroup className="cart" >

            <div className="cart__close" onClick={()=>dispatch(closeModal())}>
                <span><i className="ri-close-fill"></i></span>
            </div>

            <div className="cart__item-list">
                {
                    cartProducts.length == 0 ? <h6 className="text-center mt-5">No items added to the cart</h6> :(
                        cartProducts.map((product)=>(
                            <CartItem  key={product.id} {...product}/>
                        ))
                    ) 
                }
            </div>

            <div className="cart__bottom d-flex align-items-center justify-content-between">
                <h6>Subtotal amount: <span>${totalAmount}</span></h6>
                <button className="d-flex align-items-center" onClick={()=>dispatch(closeModal())}>
                    <Link to='/checkout'>Checkout</Link>
                </button>
            </div>
        </ListGroup>
    </div>
  )
}

export default Cart