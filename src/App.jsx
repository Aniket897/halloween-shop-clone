import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Shop from "./pages/Shop"
import About from "./pages/About"
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Products from "./pages/Products";
import { useSelector } from "react-redux";
import { SnackbarProvider} from 'notistack';
import CheckOut from "./pages/CheckOut";



const App = () => {
    const { showCart } = useSelector(state => state.app);
    return (
        <BrowserRouter>
            <SnackbarProvider />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:productId" element={<Products />} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="*" element={<Navigate to={'/'} />} />
            </Routes>
            {showCart && <Cart />}
            <Footer />
        </BrowserRouter>
    )
}

export default App;