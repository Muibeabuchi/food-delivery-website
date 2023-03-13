import { ListGroupItem } from 'reactstrap';
import productImg from '../../../assets/images/product_01.1.jpg';
import '../.././../styles/components/cart-item.scss';

import { useDispatch } from 'react-redux';
import {addItem,removeItem,deleteItem} from '../../../store/shoppin-cart/cartSlice'

const CartItem = ({id,title,image01,price,quantity,totalPrice}) => {

    const dispatch = useDispatch();

    const incrementItem =()=>{
        dispatch(addItem({
            id,
            title,
            image01,
            price,
        }))
    }

    const decreaseItem =()=>{
        dispatch(removeItem(id))
    }
  return (
    <ListGroupItem  className='border-0 d-flex gap-3 cart__item'>
        <div className="cart__item-info ">
            <img src={image01} alt="product-img" className='' />
        </div>      
        <div className="cart__product-info d-flex align-items-center justify-content-between w-100 gap-5">
            <div className="">
                <h6 className='cart__product-title'>{title}</h6>
                <p className=' text-center cart__product-price d-flex align-items-center gap-5'>
                    {quantity}x<span>${totalPrice}</span>
                </p>
                <div className="d-flex align-items-center gap-3 increase__decrease-btn">
                    <span className='increase__btn' onClick={incrementItem}><i className="ri-add-line"></i></span>
                    <span>{quantity}</span>
                    <span className='decrease__btn' onClick={decreaseItem}><i className="ri-subtract-line"></i></span>
                </div>
            </div>

            <span className='delete__btn' onClick={()=>dispatch(deleteItem(id))}><i className='ri-close-line'></i></span>
        </div>
    </ListGroupItem>
  )
}

export default CartItem