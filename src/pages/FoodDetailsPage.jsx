import { useParams } from "react-router-dom"
import products from "../assets/fake-data/products"
import Helmet from "../components/helmet/Helmet"
import CommonSection from "../components/common-section/CommonSection"
import { Col, Container, Row } from "reactstrap"
import { useEffect, useState , useRef } from "react"

import '../styles/components/food-details.scss';
import ProductCard from "../components/ui/product-card/ProductCard"
import { useDispatch } from "react-redux"

import { addItem } from '../store/shoppin-cart/cartSlice';




const FoodDetailsPage = () => {

  const {id} = useParams();
  const [product ,setProduct]= useState(products?.find(item => item.id == id));
  // console.log(product);
  const {title,image01,image02,image03,category,price,desc}=product;
  // console.log(filteredProduct);
  // const [singleProduct,setSingleProduct] = useState(filteredProduct);
  // console.log(singleProduct);
  const [currentImage,setCurrentImage] = useState(image01)
  const [tab,setTab] = useState('desc');
  const similarProducts = products?.filter(product => product.category == category).slice(0,4);
  // // const pizzaProducts = products.filter((item)=> item.category=='Pizza')

  useEffect(()=>{
    setProduct(products?.find(item => item.id == id));
  },[id])

  useEffect(()=>{
    window.scrollTo(0,0)
  },[product])

  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e)=>{
    e.preventDefault();
  }




  const addToCart = () =>{
    dispatch(addItem({
      id,
      title,
      image01,
      price,
    }))
  } 



  function handleImageChange(image){
    setCurrentImage(image);
  }
  // console.log(singleProduct);
  return (
    <Helmet title="product-details">
      <CommonSection title={product?.title}/>

      <section>
        <Container>
          <Row>
            <Col lg='2' md='2'>
              <div className="product__images">
                <div className="image__item" onClick={()=>handleImageChange(image01)}>
                  <img src={image01} alt="" className="w-50"/>
                </div>
                <div className="image__item" onClick={()=>handleImageChange(image02)}>
                  <img src={image02} alt="" className="w-50"/>
                </div>
                <div className="image__item" onClick={()=>handleImageChange(image03)}>
                  <img src={image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>

            <Col lg='4' sm='4'>
              <div className="product__main-image">
                <img src={currentImage} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg='6' md='6' >
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="single__product-price">Price: <span >${price}</span></p>
                <p className="mb-5 single__product-category">Category: <span>{category}</span></p>

                <button onClick={addToCart} className=" addToCart__button">Add To Cart</button>

              </div>
            </Col>

            <Col lg='12'>
              <div className="tabs d-flex align-items-center py-2 gap-5">
                <h6 onClick={()=>setTab('desc')} className={` ${tab == 'desc'? 'tab__active':''}`}>Description</h6>
                <h6 onClick={()=>setTab('rev')} className={`${tab == 'rev'? 'tab__active':''}`}>Review</h6>
              </div>

              { tab=='desc' && <div className="tab__content" >
                <p>{desc}</p>
              </div>}
              {tab == 'rev' && <div className="tab__form mb-3">
                <div className="review">
                  <p className="reviewer__name mb-0">Jhon Doe</p>
                  <p className="user__email">Jhondoe@gmail.com</p>
                  <p className="review__test">Great Product</p>
                </div>
                <div className="review">
                  <p className="reviewer__name mb-0">Jhon Doe</p>
                  <p className="user__email">Jhondoe@gmail.com</p>
                  <p className="review__test">Great Product</p>
                </div>
                <div className="review">
                  <p className="reviewer__name mb-0">Jhon Doe</p>
                  <p className="user__email">Jhondoe@gmail.com</p>
                  <p className="review__test">Great Product</p>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form__group">
                    <input ref={nameRef} type="text" placeholder="Enter Your Name..." required/>
                  </div>
                  <div className="form__group">
                    <input type="text" ref={emailRef} placeholder="Enter Your Email..." required/>
                  </div>
                  <div className="form__group">
                    <textarea rows={5} type="text" ref={messageRef} placeholder="Write Your Review..." required />
                  </div>

                  <button type="button" className="addToCart__button mt-3">Submit</button>
                </form>
              </div>}
              <Row>
                <Col lg='12'><h4 className="mb-5 similar__page-heading">You might also like</h4></Col>
              {
                similarProducts.map((pizza)=>( 
                  <Col lg='3' md='4' sm='6' xs='6' key={pizza.id}>
                      <ProductCard {...pizza}/>
                  </Col>
                  ))
              }
              </Row>
              
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default FoodDetailsPage