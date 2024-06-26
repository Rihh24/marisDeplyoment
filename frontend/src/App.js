
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.webp'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'





function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/flower' element={<ShopCategory banner={men_banner} category="flower"/>}/>
        <Route path='/edibles' element={<ShopCategory banner={women_banner} category="edibles"/>}/>
        <Route path='/cartridges' element={<ShopCategory banner={kid_banner} category="cartridges"/>}/>
        <Route path='/disposables' element={<ShopCategory category="disposables"/>}/>
        <Route path='/concentrates' element={<ShopCategory category="concentrates"/>}/>
        <Route path='/prerolls' element={<ShopCategory category="prerolls"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
