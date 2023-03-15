import { useRef } from 'react';

import Helmet from '../components/helmet/Helmet';
import CommonSection from '../components/common-section/CommonSection';

import {Container,Col,Row} from 'reactstrap';

import {Link} from 'react-router-dom';

import '../styles/components/login-page.scss';
// import { RegisterPage } from '.';

const RegisterPage = () => {

  const signupEmailRef = useRef(null);
  const signupPasswordRef = useRef(null);
  const signupFullNameRef = useRef(null);

  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(loginEmailRef , loginPasswordRef);
  }

  return (

    // <h1>hello</h1>
    // <Helmet title='login' >

    // <>
    <Helmet title='Register'>
      <CommonSection title='Register'/>
        <section>
          <Container className=''>
            <Row>
              <Col lg='6' md='6' sm='12' className='w-100 text-center'>
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form__group">
                    <input  ref={signupFullNameRef} type="text" placeholder='Fullname' required/>
                  </div>
                  <div className="form__group">
                    <input  ref={signupEmailRef} type="email" placeholder='Email' required/>
                  </div>
                  <div className="form__group">
                    <input ref={signupPasswordRef} type="password" placeholder='Password' required />
                  </div>

                  <button className='addToCart__button' type='submit'>Register</button>
                </form>
                <Link className='register__link' to='/login'>Already have an Account? Sign In</Link>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
      // </>
    )
  }
  
  export default RegisterPage;
  {/* </CommonSection> */}
  //  </Helmet>