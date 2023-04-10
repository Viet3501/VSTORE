import {
    faCartShopping,
    faGear,
    faHeart,
    faMagnifyingGlass,
    faRightToBracket,
    faUser,
    faUserGear,
} from '@fortawesome/free-solid-svg-icons';
import noCart from '../../assets/images/no-cart.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import logo from '../../assets/images/logo.jpg';
import { CartContext } from '../CartContext/CartContext';
import { useContext, useState } from 'react';
const cx = classNames.bind(styles);
function Navbar() {
    const { myCart } = useContext(CartContext);
    const [isShow] = useState(true);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header_logo')}>
                    <Link to="/" className={cx('nav-mobile__link')}>
                        <img src={logo} />
                    </Link>
                </div>
                <div className={cx('header_nav')}>
                    <Link to="/" className={cx('nav-mobile__link')}>
                        TRANG CHỦ
                    </Link>
                    <Link to="/products" className={cx('nav-mobile__link')}>
                        SNEAKER
                    </Link>
                    <Link to="/news" className={cx('nav-mobile__link')}>
                        TIN TỨC
                    </Link>
                    <Link to="/about" className={cx('nav-mobile__link')}>
                        GIỚI THIỆU
                    </Link>
                    <Link to="/contact" className={cx('nav-mobile__link')}>
                        LIÊN HỆ
                    </Link>
                </div>
                <div className={cx('header_icon')}>
                    <Link to="/" className={cx('header_icon-link')}>
                        <span>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>
                    </Link>
                    <Link to="/" className={cx('header_icon-link')}>
                        <span>
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                    </Link>
                    <div className={cx('header_icon-link', 'header_icon-link-user')}>
                        <span className={cx('header-user')}>
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        <div className={cx('header_icon-user')}>
                            <Link to="/user">
                                <FontAwesomeIcon icon={faUserGear} />
                                <h4>Trang cá nhân</h4>
                            </Link>
                            <Link to="/logout">
                                <FontAwesomeIcon icon={faGear} />
                                <h4>Cài đặt</h4>
                            </Link>
                            <Link className={cx('login-link')} to="/login">
                                <FontAwesomeIcon icon={faRightToBracket} />
                                <h4 className={cx('login')}>Đăng nhập</h4>
                            </Link>
                        </div>
                    </div>
                    <div className={cx('header_icon-link', 'header-show-cart')}>
                        <Link to="/cart">
                            <span>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </span>
                        </Link>
                        <span className={cx('quantity-shoes')}>{myCart.length}</span>
                        <div className={cx('container-cart')}>
                            {myCart.length > 0 && isShow ? (
                                <div className={cx('inner-cart')}>
                                    <h4 className={cx('header-cart')}>Sản phẩm mới thêm</h4>
                                    {myCart.map((item) => {
                                        return (
                                            <Link key={item.id} to={`/product/${item.id}`} className={cx('item-cart')}>
                                                <div className={cx('body-cart')}>
                                                    <div className={cx('cart-img')}>
                                                        <img src={item.image} />
                                                    </div>
                                                    <p className={cx('cart-info')}>
                                                        <span className={cx('cart-title')}>{item.title}</span>

                                                        <span className={cx('cart-price')}>
                                                            <span className={cx('cart-đ')}>đ</span>
                                                            {item.salePrice}
                                                        </span>
                                                    </p>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className={cx('no-cart')}>
                                    <img src={noCart} />
                                </div>
                            )}
                            {myCart.length > 0 && (
                                <div className={cx('footer-cart')}>
                                    <Link to="/cart">Xem giỏ hàng</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
