import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailProduct from './components/DetailProduct/DetailProduct';
import { CartContext } from './components/CartContext/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './page/About';
import Cart from './page/Cart';
import Contact from './page/Contact';
import Home from './page/Home';
import Products from './page/Products';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import News from './page/News';
import CartBuyNow from './page/CartBuyNow';
import Admin from './page/Admin';
import Order from './admin/Order/Order';
import LoginAdmin from './admin/LoginAdmin/LoginAdmin';
import AddProduct from './admin/AddProdct/AddProduct';
import UpdateProduct from './admin/UpdateProduct/UpdateProduct';
import Statistical from './admin/Statistical/Statistical';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [myCart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const [myBuyCart, setBuyCart] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [telephone, setTelephone] = useState('');

    var quantityShoe = useRef(1);
    useEffect(() => {
        axios.get('http://localhost:3000/data').then((res) => {
            setIsLoading(false);
            return setData(res.data);
        });
    }, []);

    return (
        <CartContext.Provider
            value={{
                data,
                setData,
                myBuyCart,
                setBuyCart,
                myCart,
                setCart,
                data,
                quantity,
                setQuantity,
                isLoading,
                total,
                setTotal,
                quantityShoe,
                setIsLoading,
                name,
                setName,
                address,
                setAddress,
                telephone,
                setTelephone,
            }}
        >
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products data={data} />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/product/:id" element={<DetailProduct />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/cartbuynow" element={<CartBuyNow />} />
                        <Route path="/admin" element={<LoginAdmin />} />
                        <Route path="/adminProduct" element={<Admin />} />
                        <Route path="/adminOrder" element={<Order />} />
                        <Route path="/addProduct" element={<AddProduct />} />
                        <Route path="/updateProduct/:id" element={<UpdateProduct />} />
                        <Route path="/doanhthu" element={<Statistical />} />

                    </Routes>
                </div>
            </Router>
            <ToastContainer
                position="top-center"
                autoClose={800}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"
            />
        </CartContext.Provider>
    );
}

export default App;
