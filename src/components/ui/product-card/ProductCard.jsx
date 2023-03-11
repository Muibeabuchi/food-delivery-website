


// import productImg01 from '../../../assets/images/product_01.1.jpg';
import '../../../styles/components/product-card.scss';

import { Link } from "react-router-dom";


const ProductCard = ({image01,price,id,title}) => {
  return (
    <div className='product__item'>
        <div className="product__image">
            <img src={image01} alt="product-image" className="w-50"/>
        </div>
        <div className="product__content">
            <h5>
              <Link to={`/foods/${id}`} >{title}</Link>
            </h5>
            <div className="d-flex align-items-center justify-content-between">
                <span className='product__price'>{`$${price}`}</span>
                <button className="addToCart__button">Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard;