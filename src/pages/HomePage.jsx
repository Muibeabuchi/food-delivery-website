import { Col, Container, Row ,ListGroup , ListGroupItem } from "reactstrap";
import Helmet from "../components/helmet/Helmet";
import heroImg from '../assets/images/hero.png';
import '../styles/components/herosection.scss';
import '../styles/components/features.scss';
import { Link } from "react-router-dom";
import Category from "../components/ui/category/Category";
import Feature from "../components/ui/feature/Feature";
// import ProductCard from "../components/ui/product-card/ProductCard";
import foodCategory01 from '../assets/images/hamburger.png'; 
import foodCategory02 from '../assets/images/pizza.png'; 
import foodCategory03 from '../assets/images/bread.png'; 
// import Products from '../assets/fake-data/products';
import ProductCard from "../components/ui/product-card/ProductCard";
import products from "../assets/fake-data/products";
import { useState } from "react";
import whyImage from '../assets/images/location.png';
import testimonialImg from '../assets/images/network.png';
import TestimonialSwiper from "../components/ui/swiper/TestimonialSwiper";


const HomePage = () => {

  const [category, setCategory] = useState('All')
  const filteredProducts=products.filter((item)=>item.category == category);
  const pizzaProducts = products.filter((item)=> item.category=='Pizza').slice(0,4);


  function checkCategory(){
    // setCategory(arg)
    if(category=='All'){
      return products;
    }else{
      return filteredProducts
    };
  }


  function handleCategory(arg){
    setCategory(arg)
    console.log(category);
  }

  return (
    <Helmet title='home'>
        <section>
          <Container>
            <Row >
              <Col lg='6' md='6'>
                <div className="hero__content">
                  <h5 className="mb-3">Easy way to make an order</h5>
                  <h1 className="mb-4 hero__title"><span>HUNGRY?</span> Just wait food <span>at your door.</span></h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dolor.</p>

                  <div className="hero__btns d-flex align-items-center gap-5 mt-4 ">
                    <button className="order__btn d-flex align-items-center justify-content-between"><span>Order Now</span> <i className="ri-arrow-right-s-line"></i> </button>

                    <button className="all__meals-button" ><Link to='/foods'>See all foods</Link></button>
                  </div>

                  <div className="d-flex align-items-center gap-5 mt-5 hero__service">
                    <p className="gap-4 d-flex align-items-center "><span className="shipping__icon"><i className="ri-car-line"></i></span>No Shopping Charge</p>
                    <p className="gap-4 d-flex align-items-center "><span className="shipping__icon"><i className="ri-shield-check-line"></i></span>100% secure checkout</p>
                  </div>
                </div>
              </Col>

              <Col lg='6' md='6'>
                <div className="hero__image">
                  <img src={heroImg} alt="hero-image" className="w-100" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="pt-0">
          <Category />
         </section>

        <section>
          <Container>
            <Row>
              <Col lg='12' className="text-center">
                <h5 className="feature__subtitle">What we serve</h5>
                <h2 className="feature__title">Just sit back at home</h2>
                <h2 className="feature__title">We will <span>take care of</span></h2>
                <p className="mt-4 mb-1 feature__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, similique.</p>
                <p className="feature__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, similique.</p>
              </Col>
            </Row>
            <Row>
              <Feature />
            </Row>
          </Container>
        </section>

        <section >
          <Container>
            <Row>
              <Col lg='12' className="text-center">
                <h2>Popular Foods</h2>
              </Col>
              <Col lg='12' className="">
                <div className="food__category d-flex align-items-center justify-content-center gap-4">
                  <button className={`${category=='All'&& 'foodBtnActive' }`} onClick={()=>handleCategory('All')}>All</button>
                  <button onClick={()=>handleCategory('Burger')} className={`${category=='Burger'&& 'foodBtnActive' }`}>
                    <img src={foodCategory01} alt="foodcategory-image" />
                    <span >Burger</span>
                  </button>
                  <button onClick={()=>handleCategory('Pizza')} className={`${category=='Pizza'&& 'foodBtnActive' }`}>
                    <img src={foodCategory02} alt="foodcategory-image" />
                    <span >Pizza</span>
                  </button>
                  <button onClick={()=>handleCategory('Bread')} className={`${category=='Bread'&& 'foodBtnActive' }`}>
                    <img src={foodCategory03} alt="foodcategory-image" />
                    <span >Bread</span>
                  </button>
                </div>
              </Col>

              {
                checkCategory().map((product)=>{
                  return <Col lg='3' md='4' key={product.id} className='mt-5' >
                    <ProductCard {...product}/>
                  </Col>
                })
              }

            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col className="" lg='6' md='6'>
                <img src={whyImage} alt="why-tasty-treat" className="w-100" />
              </Col>
              <Col lg='6' md='6'>
                <div className="why__tasty-treat">
                  <h2 className="tasty__treat-title mb-4">Why <span>Tasty Treat?</span></h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iure pariatur, temporibus, quibusdam dignissimos ab facere a in sed sapiente praesentium neque rem aspernatur error odit est labore veniam ratione!</p>

                  <ListGroup flush  className="mt-5">
                    <ListGroupItem className="border-0 ps-0">
                      <p className="choose__us-title d-flex align-items-center gap-2"><i className="ri-checkbox-circle-line"></i>Fresh and tasty foods</p>
                      <p className="choose__us-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, voluptate.</p>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 ps-0">
                      <p className="choose__us-title d-flex align-items-center gap-2"><i className="ri-checkbox-circle-line"></i>Quality support</p>
                      <p className="choose__us-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, commodi.</p>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 ps-0">
                     <p className="choose__us-title d-flex align-items-center gap-2"><i className="ri-checkbox-circle-line"></i>Order from any location</p>
                     <p className="choose__us-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, eveniet!</p>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="pt-0">
          <Container>
            <Row>
              <Col lg='12'className="text-center mb-5">
                <h2>Hot Pizza</h2>
              </Col>
              {
                pizzaProducts.map((pizza)=>( 
                  <Col lg='3' key={pizza.id}>
                      <ProductCard {...pizza}/>
                  </Col>

                  ))
              }
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg='6' md='6' >
                <div className="testimonial__content">
                  <h5 className="testimonial__header">Testimonial</h5>
                  <h2>What our <span>Customers</span> are saying</h2>
                  <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ratione tempore consequuntur fugiat sunt quia voluptates similique natus?</p>

                  <TestimonialSwiper/>
                </div>
              </Col>

              <Col lg='6' md='6'>

                <img src={testimonialImg} alt="testimonial-image" className="w-100" />
              </Col>
            </Row>
          </Container>
        </section>


    </Helmet>
  )
}

export default HomePage;