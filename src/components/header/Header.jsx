import { useRef } from 'react';

import '../../styles/components/header.scss';

import { Container } from "reactstrap";

import logo from '../../assets/images/res-logo.png';

import {navLinks} from '../../constants';

import {Link,NavLink} from 'react-router-dom';


const Header = () => {

  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">

          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>
          {/* //? ======MENU========== */}

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div   className="menu d-flex align-items-center gap-5">
              {navLinks.map((link,index)=>(
                <NavLink  to={link.path} key={index}  className={({isActive})=> isActive? 'active__menu':''}>{link.display}</NavLink>
              ))}
            </div>
          </div>
          {/* //?========= NAV RIGHT ICONS  */}
          
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon">
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">2</span>
            </span>

            <span className="user__icon">
                  <Link to='/login'  style={{textDecoration:'none',color:'unset'}}>
                <i className="ri-user-line"></i>
              </Link>
            </span>

            <span  className="mobile__menu" onClick={toggleMenu} >
              <i className="ri-menu-line"></i>
            </span>
          </div>
          

        </div>
      </Container>
    </header>
  )
}

export default Header;