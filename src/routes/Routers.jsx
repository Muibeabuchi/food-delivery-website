import { Navigate, Route, Routes } from "react-router-dom"

import {AllFoodsPage, CartPage, CheckoutPage, ContactPage, FoodDetailsPage, HomePage, LoginPage, RegisterPage} from '../pages';

import Layout from '../components/layout/Layout';


const Routers = () => {
  return (
    <Routes >
      <Route path='/' element={<Layout />}>
        <Route index element={<Navigate to='/home' />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/foods' element={<AllFoodsPage />} />
        <Route path='/foods/:id' element={<FoodDetailsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Route>
      
    </Routes>
  )
}

export default Routers;