import Navbar from '../Content/Navbar/Navbar';

import Header from '../Header/Header';
import styles from './UpdateProduct.module.scss';
import classNames from 'classnames/bind';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../components/CartContext/CartContext';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const cx = classNames.bind(styles);
function UpdateProduct() {
    const { setData, data } = useContext(CartContext);
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDecription] = useState('');
    const [category, setCategory] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [promotionPercent, setPromotionPercent] = useState('');
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [image, setImage] = useState('');
    const [quantity, setQuantity] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(image.preview);
    // const url = window.location.pathname.slice(15, 17);
    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    useEffect(() => {
        axios.get(`http://localhost:3000/data/${id}`).then((res) => {
            setTitle(res.data.title);
            setDecription(res.data.description);
            setCategory(res.data.category);
            setOriginalPrice(res.data.originalPrice);
            setPromotionPercent(res.data.promotionPercent);
            setColor(res.data.color);
            setSize(res.data.size);
            setQuantity(res.data.quantity);
        });
    }, []);
    const dataUpdate = {
        image: image.preview,
        title: title,
        description: description,
        category: Number(category),
        originalPrice: Number(originalPrice),
        promotionPercent: Number(promotionPercent),
        salePrice: Math.floor(originalPrice - (originalPrice * promotionPercent) / 100),
        rating: {
            rate: 5,
            count: 100,
        },
        color,
        size: Number(size),
        quantity:quantity,
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/data/${id}`, dataUpdate);
        
    };
    const handlePreviewImage = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImage(file);
    };
    return (
        <div>
            <Header></Header>
            <div className={cx('inner')}>
                <Navbar></Navbar>
                <div className={cx('wrapper')}>
                    {data.map((item) => {
                        return (
                            <div>
                                {id == item.id && (
                                    <div className={cx('container')}>
                                        <div className={cx('heading')}>
                                            <h3>Sửa sản phẩm</h3>
                                        </div>
                                        <Form
                                            style={{ marginTop: '20px', border: '1px solid #ccc' }}
                                            noValidate
                                            validated={validated}
                                            onSubmit={handleSubmit}
                                        >
                                            <Row style={{ padding: '10px 20px' }} className="mb-3">
                                                <Form.Group
                                                    style={{ marginBottom: '10px' }}
                                                    as={Col}
                                                    md="6"
                                                    controlId="validationCustom01"
                                                >
                                                    <Form.Label>Tên sản phẩm</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="Title..."
                                                        defaultValue=""
                                                        value={title}
                                                        onChange={(e) => setTitle(e.target.value)}
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group
                                                    style={{ marginBottom: '10px' }}
                                                    as={Col}
                                                    md="6"
                                                    controlId="validationCustom02"
                                                >
                                                    <Form.Label>Mô tả</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="Description..."
                                                        defaultValue=""
                                                        value={description}
                                                        onChange={(e) => setDecription(e.target.value)}
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>
                                                <Row style={{ padding: '0', margin: '0 0 0 2px' }} className="mb-3">
                                                    <Form.Group as={Col} md="2" controlId="validationCustom01">
                                                        <Form.Label>Phân trang</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="number"
                                                            placeholder="Category..."
                                                            min="1"
                                                            max="10"
                                                            defaultValue=""
                                                            value={category}
                                                            onChange={(e) => setCategory(e.target.value)}
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="2" controlId="validationCustom01">
                                                        <Form.Label>Giá gốc</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="number"
                                                            placeholder="Original Price..."
                                                            defaultValue=""
                                                            value={originalPrice}
                                                            onChange={(e) => setOriginalPrice(e.target.value)}
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="2" controlId="validationCustom01">
                                                        <Form.Label>Giảm giá</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="number"
                                                            placeholder="Promotion Percent..."
                                                            defaultValue=""
                                                            min="0"
                                                            max="100"
                                                            value={promotionPercent}
                                                            onChange={(e) => setPromotionPercent(e.target.value)}
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="2" controlId="validationCustom01">
                                                        <Form.Label>Màu</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="text"
                                                            placeholder="Color..."
                                                            defaultValue=""
                                                            value={color}
                                                            onChange={(e) => setColor(e.target.value)}
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="2" controlId="validationCustom01">
                                                        <Form.Label>Kích thước</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="number"
                                                            placeholder="Size..."
                                                            min="36"
                                                            max="43"
                                                            defaultValue=""
                                                            value={size}
                                                            onChange={(e) => setSize(e.target.value)}
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="2" controlId="validationCustom01">
                                                        <Form.Label>Số lượng</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="number"
                                                            placeholder="Quantity..."
                                                            defaultValue=""
                                                            min="1"
                                                            max="1"
                                                            value={quantity}
                                                            onChange={(e) => setQuantity(e.target.value)}
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    </Form.Group>
                                                </Row>
                                                <Form.Group as={Col} md="2" controlId="validationCustom01">
                                                    <Form.Label>Tải ảnh lên</Form.Label>
                                                    <Form.Control required type="file" onChange={handlePreviewImage} />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Button
                                                onClick={(e) => handleUpdate(e)}
                                                style={{
                                                    padding: '8px 40px',
                                                    fontSize: '16px',
                                                    margin: '0 0 10px 18px',
                                                }}
                                                type="submit"
                                            >
                                                Cập nhật
                                            </Button>
                                        </Form>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default UpdateProduct;
