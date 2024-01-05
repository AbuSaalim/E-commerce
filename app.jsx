import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './app.css'
import Shop from "./Pages/Shop";
import ShopCatogary from "./Pages/ShopCatogary";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import menBanner from './Components/Assets/banner_mens.png';
import womenBanner from './Components/Assets/banner_women.png'
import kidBanner from './Components/Assets/banner_kids.png'

 
export function App() {

  return (
          <div>
            <BrowserRouter>
            <Navbar />

            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/mens" element={<ShopCatogary banner={menBanner} category="men" />} />
              <Route path="/womens" element={<ShopCatogary banner={womenBanner} category="women" />} />
              <Route path="/kids" element={<ShopCatogary banner={kidBanner} category="kid" />} />
              <Route path="/product" element={<Product />}>
                  <Route path=":productId" element={<Product />} />
              </Route>
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<LoginSignup />} />
            </Routes>

            <Footer />
            </BrowserRouter>
          </div>
  )
}
