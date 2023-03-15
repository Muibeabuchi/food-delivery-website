import {Container} from 'reactstrap';
import '../../styles/components/common-section.scss';


const CommonSection = ({title}) => {
  return (
    <section className='common__section'>
        <Container className='text-center'>
            <h2 className='common__section-title'>{title}</h2>
        </Container>
    </section>
  )
}

export default CommonSection