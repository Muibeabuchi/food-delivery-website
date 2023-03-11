

import Slider from 'react-slick';

import ava_01 from '../../../assets/images/ava-1.jpg';
import ava_02 from '../../../assets/images/ava-2.jpg';
import ava_03 from '../../../assets/images/ava-3.jpg';

import '../../../styles/components/testimonial-swiper.scss';


const TestimonialSwiper = () => {
  const settings ={
    dots:true,
    autoplay:true,
    infinte:true,
    speed:1000,
    autoplaySpeed:3000,
    swipeToSlide:true,
    slidesToShow: 1,
    slidesToScroll:1
  }

  return (
    <Slider {...settings}>
      <div className="mt-5">
        <p className="review__text mb-4">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magni asperiores deleniti, dolorem incidunt obcaecati quibusdam laborum soluta repellendus quidem voluptate, illo beatae recusandae nobis necessitatibus. Est harum sed nisi?"</p>
        <div className='slider__content d-flex align-items-center gap-4 '>
          <img src={ava_01} alt="testimonial-avatar" className='testimonial__image  rounded'/>
          <h6>Jhon Doe</h6>
        </div>
        </div>

        <div className='mt-5'>
        <p className="review__text mb-4">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magni asperiores deleniti, dolorem incidunt obcaecati quibusdam laborum soluta repellendus quidem voluptate, illo beatae recusandae nobis necessitatibus. Est harum sed nisi?"</p>
        <div className='slider__content d-flex align-items-center gap-4'>
          <img src={ava_03} alt="testimonial-avatar" className='testimonial__image  rounded' />
          <h6>Annabel Jin</h6>
        </div>
        </div>

        <div className='mt-5'>
        <p className="review__text mb-4">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magni asperiores deleniti, dolorem incidunt obcaecati quibusdam laborum soluta repellendus quidem voluptate, illo beatae recusandae nobis necessitatibus. Est harum sed nisi?"</p>
        <div className='slider__content d-flex align-items-center gap-4'>
          <img src={ava_02} alt="testimonial-avatar" className='testimonial__image  rounded' />
          <h6>Sheng piang</h6>
        </div>

      </div>
    </Slider>
  )
}

export default TestimonialSwiper