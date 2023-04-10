import styles from './CartShoes.module.scss';
import classNames from 'classnames/bind';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Form } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from 'axios';
const cx = classNames.bind(styles);
function CartShoes() {
    const { myCart, setCart, quantity, setQuantity, name, setName, address, setAddress, telephone, setTelephone } =
        useContext(CartContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (index) => {
        const cartNew = myCart.filter((item) => {
            return item.id !== index;
        });
        toast.success('Xóa thành công!');
        setCart([...cartNew]);
    };
    const handleDecrease = (item, quantityShoe) => {
        if (quantity <= 1) {
            handleDelete(item.id);
        } else setQuantity((prev) => prev - 1);
    };
    const handleIncrease = (item, quantityShoe) => {
        setQuantity((prev) => prev + 1);
    };
    const handlePayMoney = () => {
        const today = new Date();
        const date = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        const dateTime = date + '-' + month + '-' + year + ' lúc ' + time;
        // myCart.filter((item) => {
        //     const objectShoe = {
        //         ...item,
        //         image: item.image,
        //         title: item.title,
        //         price: item.salePrice,
        //         type: {
        //             color: item.color,
        //             size: item.size,
        //         },
        //         quantity: quantity,
        //         name: name,
        //         address: address,
        //         telephone: telephone,
        //         atTime: dateTime,
        //         month: month,
        //     };
        //     const res = axios.post('http://localhost:3001/orderUsers', objectShoe);
        // });
        // Simple POST request with a JSON body using fetch
        const orderUsersApi = fetch('http://localhost:3001/orderUsers');
        function createShoes(data, callback) {
            var options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            };
            fetch(orderUsersApi, options)
                .then(function (response) {
                    return response.json();
                })
                .then(callback);
        }
        setCart((prev) => {
            myCart.filter((item) => {
                const objectShoe = {
                    image: item.image,
                    title: item.title,
                    price: item.salePrice,
                    type: {
                        color: item.color,
                        size: item.size,
                    },
                    quantity: quantity,
                    name: name,
                    address: address,
                    telephone: telephone,
                    atTime: dateTime,
                    month: month,
                };
                createShoes(objectShoe, function () {
                    setName('');
                    setAddress('');
                    setTelephone('');
                });
            });
            setCart([]);
        });
        toast.success('Thanh toán thành công!');
    };
    const totalRef = myCart.reduce((acc, curr) => {
        return acc + curr.salePrice * quantity;
    }, 0);

    return (
        <div>
            <Navbar />
            <div className={cx('wrapper')}>
                <h1 className={cx('my-cart')}>Giỏ hàng</h1>
                <div className={cx('inner')}>
                    {myCart.map((item, index) => {
                        return (
                            <div className={cx('container')} key={index}>
                                <div className={cx('shoes-title')}>
                                    <Link to={`/product/${item.id}`}>
                                        <img className={cx('img')} src={item.image} />
                                    </Link>
                                    <span className={cx('title')}>{item.title}</span>
                                </div>
                                <div className={cx('shoes-info')}>
                                    <p>Phân loại</p>
                                    <div className={cx('shoes-classify')}>
                                        <span className={cx('color')}>{item.color} ,</span>
                                        <span className={cx('size')}>{item.size}</span>
                                    </div>
                                </div>
                                <div className={cx('shoes-price')}>
                                    <span className={cx('originalPrice')}>
                                        {item.originalPrice}
                                        <span>đ</span>
                                    </span>
                                    <span className={cx('salePrice')}>
                                        {item.salePrice}
                                        <span>đ</span>
                                    </span>
                                </div>
                                <div className={cx('action-quantity')}>
                                    <button
                                        onClick={() => handleDecrease(item, item.quantity - 1)}
                                        className={cx('btn-decrease')}
                                    >
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <span className={cx('quantity-shoes')}>{quantity}</span>
                                    <button
                                        onClick={() => handleIncrease(item, item.quantity + 1)}
                                        className={cx('btn-increase')}
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>

                                <span className={cx('salePrice')}>
                                    Đơn giá: {item.salePrice}
                                    <span>đ</span>
                                </span>
                                <button onClick={() => handleDelete(item.id)} className={cx('btn-delete')}>
                                    <span>Xóa</span>
                                </button>
                            </div>
                        );
                    })}
                </div>
                {myCart.length > 0 && (
                    <div className={cx('payment')}>
                        <Button style={{ border: 'none' }} variant="primary" onClick={handleShow}>
                            Thanh toán
                        </Button>
                    </div>
                )}
                <div className={cx('form-payment')}>
                    <div className={cx('payment')}>
                        <>
                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title
                                        style={{ fontSize: '25px', margin: '4px 0 0px 4px', fontWeight: '600' }}
                                    >
                                        Trang thanh toán
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <div className={cx('payment-container')}>
                                    {myCart.map((item) => {
                                        return (
                                            <div className={cx('payment-inner')}>
                                                <div className={cx('product-img')}>
                                                    <img style={{ width: '60px', height: '60px' }} src={item.image} />
                                                </div>
                                                <div className={cx('product-title')}>
                                                    <p>{item.title}</p>
                                                </div>
                                                <div className={cx('product-type')}>
                                                    <p>{item.color}</p>
                                                    <p>{item.size}</p>
                                                </div>
                                                <div className={cx('product-price')}>
                                                    <p>
                                                        {item.salePrice}đ <span>x {quantity}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <Offcanvas.Body style={{ borderTop: '1px solid #ccc', fontSize: '16px' }}>
                                    <Form>
                                        <Col className="mb-3">
                                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                                                <Form.Label>Họ và tên</Form.Label>
                                                <Form.Control
                                                    style={{ fontSize: '14px' }}
                                                    required
                                                    type="text"
                                                    placeholder="Nhập tên..."
                                                    defaultValue=""
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group
                                                style={{ margin: '16px 0' }}
                                                as={Col}
                                                md="12"
                                                controlId="validationCustom02"
                                            >
                                                <Form.Label>Nhập địa chỉ</Form.Label>
                                                <Form.Control
                                                    style={{ fontSize: '14px' }}
                                                    required
                                                    type="text"
                                                    placeholder="Địa chỉ..."
                                                    defaultValue=""
                                                    onChange={(e) => setAddress(e.target.value)}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="12" controlId="validationCustom02">
                                                <Form.Label>Số điện thoại</Form.Label>
                                                <Form.Control
                                                    style={{ fontSize: '14px' }}
                                                    required
                                                    type="number"
                                                    placeholder="Số điện thoại..."
                                                    defaultValue=""
                                                    onChange={(e) => setTelephone(e.target.value)}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Form>
                                    <div className={cx('product-price')}>
                                        <p
                                            style={{
                                                margin: '16px 0',
                                                fontSize: '18px',
                                                color: '#fc3535',
                                                fontWeight: '600',
                                            }}
                                        >
                                            <span>Tổng giá: {totalRef}đ</span>
                                        </p>
                                    </div>
                                    <Link to="/products">
                                        <Button
                                            style={{ padding: '10px 16px', fontSize: '16px', border: 'none' }}
                                            type="submit"
                                            onClick={() => handlePayMoney()}
                                        >
                                            Xác nhận thanh toán
                                        </Button>
                                    </Link>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CartShoes;
