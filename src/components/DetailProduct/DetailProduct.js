import styles from './DetailProduct.module.scss';
import classNames from 'classnames/bind';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function DetailProduct() {
    const { setBuyCart, setCart, data, setQuantity } = useContext(CartContext);
    const url = window.location.pathname.slice(9, 11);
    const handleAddCart = (item, index) => {
        const newShoes = {
            id: item.id,
            title: item.title,
            desc: item.description,
            image: item.image,
            originalPrice: item.originalPrice,
            salePrice: item.salePrice,
            isFreeShip: item.isFreeShip,
            color: item.color,
            size: item.size,
        };
        toast.success('Thêm thành công!');
        setCart((prev) => {
            if (prev.length >= 1) {
                let prevShoes = prev.filter((item) => {
                    if (item.id == newShoes.id) {
                        setQuantity((prev) => prev + 1);
                    }
                    return item.id !== newShoes.id;
                });
                return [...prevShoes, newShoes];
            } else {
                setQuantity(1);
                return [...prev, newShoes];
            }
        });
    };
    const handleBuy = (item) => {
        const newShoes = {
            id: item.id,
            title: item.title,
            desc: item.description,
            image: item.image,
            originalPrice: item.originalPrice,
            salePrice: item.salePrice,
            isFreeShip: item.isFreeShip,
            color: item.color,
            size: item.size,
        };
        setBuyCart([newShoes]);
        setQuantity(1)
    };
    return (
        <div className={cx('wrapper')}>
            <Navbar />
            <div className={cx('inner')}>
                {data.map((item) => (
                    <div key={item.id} className={cx('container')}>
                        {url == item.id && (
                            <div className={cx('item-shoes')}>
                                <div className={cx('shoes-img')}>
                                    <img src={item.image} />
                                </div>
                                <div className={cx('shoes-info')}>
                                    <h1 className={cx('shoes-title')}>{item.title}</h1>
                                    <div className={cx('rating')}>
                                        <span className={cx('rating-start')}>
                                            {item.rating.rate}
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className={cx('rating-count')}>{item.rating.count} đã bán</span>
                                    </div>
                                    <span className={cx('shoes-desc')}>{item.description}</span>
                                    <div className={cx('price')}>
                                        <h4 className={cx('shoes-price', 'shoes-price-originalPrice')}>
                                            <span className={cx('đ-originalPrice')}>đ</span>
                                            {item.originalPrice}
                                        </h4>
                                        <h2 className={cx('shoes-price', 'shoes-price-salePrice')}>
                                            <span className={cx('đ-salePrice')}>đ</span>
                                            {item.salePrice}
                                        </h2>
                                        <h4 className={cx('shoes-price-percent')}>{item.promotionPercent}% giảm</h4>
                                    </div>
                                    <div className={cx('shipper')}>
                                        <span className={cx('shipper-info')}>Vận chuyển</span>
                                        <div className={cx('shipper-icon')}>
                                            <FontAwesomeIcon icon={faCar} />
                                        </div>
                                        <div className={cx('shipper-action')}>
                                            <span>Vận chuyển tới</span>
                                            <span>Phí vận chuyển</span>
                                        </div>
                                        <div className={cx('shipper-location')}>
                                            <span>Huyện Đông Anh, Hà Nội</span>
                                            <div>
                                                <span>
                                                    <span>đ</span>
                                                </span>
                                                28.090
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('shoes-choice')}>
                                        <div className={cx('shoes-color')}>
                                            <span className={cx('shoes-info-color')}>Màu</span>
                                            <span className={cx('color')}>{item.color}</span>
                                        </div>
                                        <div className={cx('shoes-size')}>
                                            <span className={cx('shoes-info-size')}>Size</span>
                                            <span className={cx('size')}>{item.size}</span>
                                        </div>
                                    </div>
                                    <div className={cx('shoes-quantity')}>
                                        <span className={cx('shoes-info-quantity')}>Số lượng</span>
                                        <span className={cx('quantity')}>1</span>
                                    </div>
                                    <div className={cx('shoes-btn')}>
                                        <button onClick={() => handleAddCart(item)} className={cx('shoes-btn-add')}>
                                            <span className={cx('shoes-btn-cart')}>
                                                <FontAwesomeIcon icon={faCartShopping} />
                                            </span>
                                            Thêm vào giỏ hàng
                                        </button>
                                        <Link to='/cartbuynow'>
                                            <button onClick={() => handleBuy(item)} className={cx('shoes-btn-buy')}>
                                                Mua ngay
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default DetailProduct;
