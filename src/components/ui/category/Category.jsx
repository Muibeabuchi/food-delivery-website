import {Container,Col,Row} from 'reactstrap';

import '../../../styles/components/category.scss';

import {categoryData} from '../../../constants';

const Category = () => {
  return (
    <Container >
        <Row>
            {
                categoryData.map((item,index)=>(
                    <Col lg='3' md='4'  key={index}>
                        <div className="category__item d-flex align-items-center gap-3">
                            <div className="category image">
                                <img src={item.immageUrl} alt={item.display}  />
                            </div>
                            <h6>{item.display}</h6>
                        </div>

                    </Col>
                ))
            }
        </Row>
    </Container>
  )
}

export default Category;