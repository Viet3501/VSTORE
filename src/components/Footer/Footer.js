import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faSquareFacebook,
    faSquarePinterest,
    faSquareTwitter,
    faSquareYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faHouse, faPhone } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div to="/" className={cx('logo')}>
                    <Link>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className={cx('row')}>
                    <div className={cx('info')}>
                        <div className={cx('store', 'info-store1')}>
                            <h1>STORE 1</h1>
                            <p className={cx('store-icon')}>
                                <FontAwesomeIcon icon={faHouse} />
                                <span>Hà Khê, Vân Hà, Đông Anh, Hà Nội</span>
                            </p>
                            <p className={cx('store-icon')}>
                                <FontAwesomeIcon icon={faPhone} />
                                <span>0369 614 479</span>
                            </p>
                        </div>
                        <div className={cx('store', 'info-store1')}>
                            <h1>STORE 2</h1>
                            <p className={cx('store-icon')}>
                                <FontAwesomeIcon icon={faHouse} />
                                <span>82 Ngõ Thống Nhất, Đại La, Trương Định, Hai Bà Trưng, Hà Nội</span>
                            </p>
                            <p className={cx('store-icon')}>
                                <FontAwesomeIcon icon={faPhone} />
                                <span>0936 056 300</span>
                            </p>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <h1>THÔNG TIN</h1>
                        <Link to="/">Trang chủ</Link>
                        <Link to="/products">Sneaker</Link>
                        <Link to="/news">Tin tức</Link>
                        <Link to="/about">Giới thiệu</Link>
                        <Link to="/contact">Liên hệ</Link>
                    </div>
                    <div className={cx('info')}>
                        <h1>HỖ TRỢ</h1>
                        <Link to="">Chính sách giao hàng</Link>
                        <Link to="">Chính sách đổi trả</Link>
                        <Link to="">Chính sách bảo mật</Link>
                        <Link to="">Điều khoản dịch vụ</Link>
                    </div>
                    <div className={cx('info')}>
                        <h1>FANFAGE</h1>
                        <p>Theo dõi để nhận được thông tin ưu đãi sớm nhất</p>
                        <div className={cx('society')}>
                            <a href="https://www.facebook.com/NTV.3501" className={cx('icon-link', 'facebook')}>
                                <FontAwesomeIcon icon={faSquareFacebook} />
                            </a>
                            <a href="https://www.facebook.com/NTV.3501/" className={cx('icon-link', 'twitter')}>
                                <FontAwesomeIcon icon={faSquareTwitter} />
                            </a>
                            <a href="https://www.facebook.com/NTV.3501/" className={cx('icon-link', 'youtube')}>
                                <FontAwesomeIcon icon={faSquareYoutube} />
                            </a>
                            <a href="https://www.facebook.com/NTV.3501/" className={cx('icon-link', 'pinterest')}>
                                <FontAwesomeIcon icon={faSquarePinterest} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
