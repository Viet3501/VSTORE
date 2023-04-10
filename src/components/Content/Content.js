import { faArrowsRotate, faCircleCheck, faGift, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import men from '../../assets/images/men.jpg';
import women from '../../assets/images/women.jpg';
import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import { Link } from 'react-router-dom';
import NewProduct from './NewProduct/NewProduct';
import DealShoe from './DealShoe/DealShoe';
import News from './News/News';
const cx = classNames.bind(styles);
function Content({ data }) {
    return (
        <div className={cx('policy')}>
            <div className={cx('container')}>
                <div className={cx('auto-policy')}>
                    <div className={cx('policy-layout')}>
                        <div className={cx('policy-img')}>
                            <FontAwesomeIcon icon={faGift} />
                        </div>
                        <div className={cx('policy-title')}>
                            <h1>FreeShip</h1>
                            <p>Với đơn hàng từ 1 triệu trở lên</p>
                        </div>
                    </div>
                    <div className={cx('policy-layout')}>
                        <div className={cx('policy-img')}>
                            <FontAwesomeIcon icon={faCircleCheck} />
                        </div>
                        <div className={cx('policy-title')}>
                            <h1>Dễ dàng thanh toán</h1>
                            <p>Kết hợp thanh toán điện tử</p>
                        </div>
                    </div>
                    <div className={cx('policy-layout')}>
                        <div className={cx('policy-img')}>
                            <FontAwesomeIcon icon={faArrowsRotate} />
                        </div>
                        <div className={cx('policy-title')}>
                            <h1>Đổi trả hoàn tiền</h1>
                            <p>15 ngày miễn phí đổi trả</p>
                        </div>
                    </div>
                    <div className={cx('policy-layout')}>
                        <div className={cx('policy-img')}>
                            <FontAwesomeIcon icon={faHeadphones} />
                        </div>
                        <div className={cx('policy-title')}>
                            <h1>Hỗ trợ trực tuyến</h1>
                            <p>Luôn luôn online 24/7</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('option-sex')}>
                <div className={cx('container-fuild')}>
                    <div className={cx('row')}>
                        <a href="/products" className={cx('option-sex-item', 'option-left')}>
                            <img src={men} alt="Giày nam" />
                            <h1>Giày nam</h1>
                        </a>
                        <a href="/products" className={cx('option-sex-item', 'option-right')}>
                            <img src={women} alt="Giày nữ" />
                            <h1>Giày nữ</h1>
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('list-product')}>
                <div className={cx('container-fuild')}>
                    <h1 className={cx('text-center', 'name-colection')}>
                        <Link to="/products">GIÀY MỚI</Link>
                    </h1>
                    <NewProduct data={data} />
                </div>
            </div>
            <DealShoe/>
            <News/>
        </div>
    );
}

export default Content;
