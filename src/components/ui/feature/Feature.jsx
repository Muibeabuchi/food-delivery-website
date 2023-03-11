import { Col, Container, Row } from "reactstrap"
import { servicesData } from "../../../constants";
import '../../../styles/components/features.scss';

const Feature = () => {
  return (
    <Container>
      <Row>
        {
          servicesData.map(({imageUrl,title,text},index)=>(
              <Col lg='4' md='4' sm='12' key={index} className='mt-5'>
                <div  className="feature__item text-center px-5 py-3  " >
                  <img src={imageUrl} alt="service-image" className="w-25 mb-3" />
                  <h5 className="fw-bold mb-3">{text}</h5>
                  <p>{title}</p>
                </div>  
              </Col>
          ))
        }

      </Row>
    </Container>
  )
}

export default Feature;