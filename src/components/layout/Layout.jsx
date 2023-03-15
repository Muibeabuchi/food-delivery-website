import { Outlet } from "react-router-dom";
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Cart from "../ui/cart/Cart";
import { useSelector } from "react-redux";

const Layout = () => {

  const isOpen = useSelector((state)=>state.cartModal.isOpen)
  return (
    <>
        <Header />
        { isOpen && <Cart/>} 
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout;