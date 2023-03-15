import { useState } from "react";
import { useSelector } from "react-redux";
import {Container,Col,Row} from 'reactstrap';
import CommonSection from '../components/common-section/CommonSection';
import Helmet from '../components/helmet/Helmet';

import '../styles/components/checkoutpage.scss';


const CheckoutPage = () => {


  const [form,setForm] = useState({
    name:'',
    email:'',
    phonenumber:'',
    country:'',
    city:'',
    postalcode:''
  })

  const handleChange = (e) =>{
    setForm(
      {
        ...form,
        [e.target.name]:e.target.value
      }
    )
  }
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;
  const shippngTotal = totalAmount + Number(shippingCost);
  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  // console.log(form);

  return (
    <Helmet title="Checkout">
      <CommonSection title='Checkout'/>

      <section>
        <Container>
          <Row>
            <Col lg='8' md='6'>
              <h6 className="mb-4">Shipping Adress</h6>
              <form className="checkout__form" onSubmit={handleSubmit}>
                <div className="form__group">
                  <input onChange={handleChange} type="text" name="name" value={form.name} placeholder="Enter your name" required/>
                </div>
                <div className="form__group">
                  <input onChange={handleChange} type="email" name="email" value={form.email} placeholder="Enter your email" required/>
                </div>
                <div className="form__group">
                  <input onChange={handleChange} type="number" name='phonenumber' value={form.phonenumber} placeholder="Phonenumber" required/>
                </div>
                <div className="form__group">
                  <input onChange={handleChange} type="text" name="country" value={form.country} placeholder="Country" required/>
                </div>
                <div className="form__group">
                  <input onChange={handleChange} type="text" name='city' value={form.city} placeholder="City" required/>
                </div>
                <div className="form__group">
                  <input onChange={handleChange} type="number" name='postalcode' value={form.postalcode} placeholder="Postal Code" required/>
                </div>
              <button className="addToCart__button" type="submit">Payment</button>
              </form>

            </Col>

            <Col lg='4' md='6'>
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">Subtotal: <span>${totalAmount}</span></h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">Shipping: <span>${shippingCost}</span></h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between mb-3" >Shipping: <span>${shippngTotal}</span></h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default CheckoutPage