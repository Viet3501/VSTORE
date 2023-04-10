import styels from './CartBuy.module.scss';
import classNames from 'classnames/bind';
import { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Offcanvas } from 'react-bootstrap';
const cx = classNames.bind(styels);

function CartBuy() {
    const {
        myCart,
        setCart,
        myBuyCart,
        setBuyCart,
        quantity,
        setQuantity,
        name,
        setName,
        address,
        setAddress,
        telephone,
        setTelephone,
    } = useContext(CartContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [validated, setValidated] = useState(false);

    const handlePayMoney = (item, event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        if (name == '' && address == '' && telephone == '') {
            alert('Đặt hàng không thành công!!!');
        } else {
            const today = new Date();
            const date = today.getDate();
            const month = today.getMonth() + 1;
            const year = today.getFullYear();
            const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
            const dateTime = date + '-' + month + '-' + year + ' lúc ' + time;
            var orderUsersApi = 'http://localhost:3001/orderUsers';
            toast.success('Đặt hàng thành công!');
            // Simple POST request with a JSON body using fetch
            function createShoe(data, callback) {
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
            setBuyCart((prev) => {
                prev = {
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
                createShoe(prev, function () {
                    setName('');
                    setAddress('');
                    setTelephone('');
                });
            });
            setBuyCart([]);
        }
    };

    const handleDecrease = (index) => {
        if (quantity <= 1) {
            handleDelete(index);
        }
        setQuantity((prev) => prev - 1);
    };
    const handleIncrease = (index) => {
        setQuantity((prev) => prev + 1);
    };
    const handleDelete = (index) => {
        const cartNew = myBuyCart.filter((item) => {
            return item.id !== index;
        });
        toast.success('Xóa thành công!');
        setBuyCart([...cartNew]);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {myBuyCart.map((item, index) => {
                    return (
                        <div key={index}>
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
                                    <button onClick={() => handleDecrease(item.id)} className={cx('btn-decrease')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <span className={cx('quantity-shoes')}>{quantity}</span>
                                    <button onClick={() => handleIncrease(item.id)} className={cx('btn-increase')}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                                <span className={cx('salePrice')}>
                                    {item.salePrice}
                                    <span>đ</span>
                                </span>
                                <button onClick={() => handleDelete(item.id)} className={cx('btn-delete')}>
                                    Xóa
                                </button>
                            </div>
                            <div className={cx('form-payment')}>
                                <div className={cx('payment')}>
                                    <>
                                        <Button
                                            style={{ display: 'flex', border: 'none' }}
                                            variant="primary"
                                            onClick={handleShow}
                                        >
                                            Thanh toán
                                        </Button>
                                        <Offcanvas show={show} onHide={handleClose}>
                                            <Offcanvas.Header closeButton>
                                                <Offcanvas.Title
                                                    style={{
                                                        fontSize: '25px',
                                                        margin: '4px 0 0px 4px',
                                                        fontWeight: '600',
                                                    }}
                                                >
                                                    Trang thanh toán
                                                </Offcanvas.Title>
                                            </Offcanvas.Header>
                                            <div className={cx('payment-container')}>
                                                <div className={cx('payment-inner')}>
                                                    <div className={cx('product-img')}>
                                                        <img
                                                            style={{ width: '60px', height: '60px' }}
                                                            src={item.image}
                                                        />
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
                                            </div>
                                            <Offcanvas.Body style={{ fontSize: '16px' }}>
                                                <Form noValidate validated={validated} onSubmit={handlePayMoney}>
                                                    <Col className="mb-3">
                                                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                                                            <Form.Label>Họ và tên</Form.Label>
                                                            <Form.Control
                                                                style={{ fontSize: '14px' }}
                                                                required
                                                                type="text"
                                                                placeholder="Nhập tên..."
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
                                                            <Form.Label>Địa chỉ</Form.Label>
                                                            <Form.Control
                                                                style={{ fontSize: '14px' }}
                                                                required
                                                                type="text"
                                                                placeholder="Địa chỉ..."
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
                                                                onChange={(e) => setTelephone(e.target.value)}
                                                            />
                                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <h3 className={cx('total-money')}>
                                                        Tổng tiền: {item.salePrice * quantity}đ
                                                    </h3>
                                                    <Button
                                                        style={{
                                                            padding: '10px 16px',
                                                            fontSize: '16px',
                                                            border: 'none',
                                                        }}
                                                        type="submit"
                                                        onClick={(event) => handlePayMoney(item, event)}
                                                    >
                                                        Xác nhận đặt hàng
                                                    </Button>
                                                </Form>
                                            </Offcanvas.Body>
                                        </Offcanvas>
                                    </>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CartBuy;
