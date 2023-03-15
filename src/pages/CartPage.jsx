import Helmet from '../components/helmet/Helmet';
import CommonSection from '../components/common-section/CommonSection';

import '../styles/components/cart-page.scss';

import { useSelector } from 'react-redux';

import {Container,Col,Row} from 'reactstrap';

import { deleteItem } from '../store/shoppin-cart/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const CartPage = () => {

  const cartItems = useSelector((state)=> state.cart.cartItems)
  const totalAmount = useSelector((state)=> state.cart.totalAmount)
  // const delete
  console.log(cartItems);
  return (
    <Helmet title='cart'>
      <div>
        <CommonSection title='Your Cart'/>
      </div>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartItems.length === 0 ? <h5 className="text-center mt-4 cart__empty-message">You have no Items in your cart</h5> :(cartItems.map((item)=> <Tr key={item.id} {...item}/>))
                  }

                  
                </tbody>
              </table>



            </Col>
            <Col className='mt-5 '>  
              <div className=''>
                <h6 className='cart__subtotal-btn'>Subtotal: $<span>{totalAmount}</span></h6>
                <p>Taxes and Shipping will calculate at checkout</p>
                <div className="cart__page-btn  ">
                  <button className='addToCart__button me-4   '><Link className='links' to='/foods'>Continue Shipping</Link></button>
                  <button className='addToCart__button'><Link className='links' to='/checkout'>Proceed to checkout</Link></button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>




    </Helmet>
  )
}

const Tr = ({image01,price,title,quantity,id}) =>{
  const dispatch = useDispatch();

  return(
    <tr>
      <td className='text-center'><img src={image01} className='table__image' /></td>
      <td className='text-center'>{title}</td>
      <td className='text-center'>${price}</td>
      <td className='text-center'>{quantity}px</td>
      <td className='text-center' onClick={()=>dispatch(deleteItem(id))}><i className="ri-delete-bin-line cart__item-del"></i></td>
    </tr>
  )
}

export default CartPage