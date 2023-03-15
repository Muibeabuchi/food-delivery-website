import Helmet from '../components/helmet/Helmet';
import CommonSection from '../components/common-section/CommonSection';

import products from '../assets/fake-data/products';
import ProductCard from '../components/ui/product-card/ProductCard';

import '../styles/components/all-foods.scss';

import ReactPaginate from 'react-paginate';
import '../styles/components/pagination.scss';

import { Container,Row,Col } from 'reactstrap';
import { useState } from 'react';


const AllFoodsPage = () => {

  const [searchTerm,setSearchTerm] = useState('');
  // const [productData, setProductData] = useState(products);

  const [pageNumber,setPageNumber] = useState(0);
  const searchedProduct = products.filter((item)=>{
    if(searchTerm==='')return item;
    if(item.title.toLowerCase().includes(searchTerm.toLowerCase())) return item;
  })
  const productPerPage = 12;
  const visitedPage = productPerPage * pageNumber;
  const displayPage = searchedProduct.slice(visitedPage,visitedPage + productPerPage);
  const pageCount = Math.ceil(searchedProduct.length/productPerPage);
  const changePage = ({selected}) =>{
    setPageNumber(selected)
  }

  return (
    <Helmet title='All-Foods'>
      
      <CommonSection title='All Foods' />

      <section>
        <Container>
            <Row>
              <Col lg='6' md='6' sm='6' xs='12'>
                <div className="search__widget d-flex align-items-center justify-content-between ">
                  <input type="text" placeholder="I'm Searching For" value={searchTerm} 
                    onChange={(e)=>setSearchTerm(e.target.value)}
                  />
                  <span><i className="ri-search-line"></i></span>
                </div>
              </Col>
              <Col lg='6' md='6' sm='6' xs='12' className='mb-5'>
                <div className="sorting__widget text-end">
                  <select className='w-50'>
                    <option value="">Default</option>
                    <option value="ascending">Alphabetically A-Z</option>
                    <option value="descending">Alphabetically Z-A</option>
                    <option value="high-price">High-Price</option>
                    <option value="low-price">Low-Price</option>
                  </select>
                </div>
              </Col>

              {
                displayPage?.filter((item)=>{
                  if(searchTerm==='') return item;
                  if(item.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) return item;
                } ).
                map(item => (
                   <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4'>
                      <ProductCard {...item} />
                   </Col> 
                ))

              }

              <div>
                <ReactPaginate 
                  pageCount={pageCount}
                  onPageChange={changePage}
                  previousLabel='Prev'
                  nextLabel='Next'
                  containerClassName='pagination__btn'
                />
              </div>
            </Row>
        </Container>
      </section>


    </Helmet>
  )
}

export default AllFoodsPage