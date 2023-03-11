import {Container , Row ,  Col, ListGroupItem, ListGroup} from 'reactstrap';

import logo from '../../assets/images/res-logo.png';

import '../../styles/components/footer.scss'

const Footer = () => {

  const year = new Date().getFullYear()
  console.log(year);

  const Strong =({children}) => <strong>{children}</strong>
  return (
    <footer className='footer'>
      <Container>
        <Row>

          <Col lg='3' md='4' sm='6'>
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum.</p>
            </div>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='border-0 ps-0 delivery__time-item'>
                <span>Sunday - Thursday</span>
                <p>10:00 am - 11:00 pm</p>
              </ListGroupItem>
              <ListGroupItem className='border-0 ps-0 delivery__time-item'>
                <span>Friday - Saturday</span>
                <p>Off days</p>
              </ListGroupItem>

            </ListGroup>
          </Col>


          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Contact</h5>
                <ListGroup className='delivery__time-list'>
                <ListGroupItem className='border-0 ps-0 delivery__time-item'>
                    <p>Location: BroadWay Avenue, 19b Manhattan</p>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 ps-0 delivery__time-item'>
                    <span>Phone: +234 5567 890 11</span>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 ps-0 delivery__time-item'>
                    <span>Email: example@gmail.com</span>
                  </ListGroupItem>
              </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Newsletter</h5>
            <p>Subscribe to our Newsletter</p>                      
            <div className="newsletter">
              <input type="text" placeholder='Enter your Email' />
              <span><i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>

        </Row>

        <Row className='mt-5'>
          <Col lg='6' md='6' >
            <p className='copyright__text'>{`Copyright-${year}, website created by NerdkidChiki. All rights reserved. `}</p>            
          </Col>
          <Col lg='6' md='6' >
            <div className=" justify-content-end social__links d-flex align-items-center gap-4">
              <p className='m-0'>Follow:</p>
              <span><a href="https://facebook.com" target='_blank'><i className="ri-facebook-line"></i></a></span>
              <span><a href='https://facebook.com' target='_blank'><i className="ri-github-line"></i></a></span>
              <span><a href="https://facebook.com" target='_blank'><i className="ri-twitter-line"></i></a></span>
              <span><a href="https://facebook.com" target='_blank'><i className="ri-linkedin-line"></i></a></span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer