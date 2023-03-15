import { useRef } from 'react';

import Helmet from '../components/helmet/Helmet';
import CommonSection from '../components/common-section/CommonSection';

import {Container,Col,Row} from 'reactstrap';

import {Link} from 'react-router-dom';

import '../styles/components/login-page.scss';
const LoginPage = () => {

  const loginEmailRef = useRef(null);
  const loginPasswordRef = useRef(null);

  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(loginEmailRef , loginPasswordRef);
  }

  return (

    // <h1>hello</h1>
    // <Helmet title='login' >

    // <>
    <Helmet title='login'>
      <CommonSection title='Login'/>
        <section>
          <Container className=''>
            <Row>
              <Col lg='6' md='6' sm='12' className='w-100 text-center'>
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form__group">
                    <input  ref={loginEmailRef} type="email" placeholder='Email' required/>
                  </div>
                  <div className="form__group">
                    <input ref={loginPasswordRef} type="password" placeholder='Password' required />
                  </div>

                  <button className='addToCart__button' type='submit'>Login</button>
                </form>
                <Link className='register__link' to='/register'>Dont have an Account? Create an Account</Link>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
      // </>
    )
  }
  
  export default LoginPage
  {/* </CommonSection> */}
  //  </Helmet>