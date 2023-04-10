import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ShoesNew } from '../../../data/index';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './NewProduct.module.scss';
const cx = classNames.bind(styles);
function NewProduct() {
    return (
            <div className={cx('responsive')}>
                {ShoesNew.data.map((item, index) => {
                    return (
                        <Link to="/products" key={item.id} className={cx('product-card')}>
                            <div className={cx('product-card__inner')}>
                                <div className={cx('product-link')}>
                                    <img src={item.images} alt="shoes" />
                                </div>
                                <div className={cx('quick-action')}>
                                    <button className={cx('add-to-cart')}>
                                        <FontAwesomeIcon icon={faBagShopping} />
                                    </button>
                                    <button className={cx('favourite')}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                    <button className={cx('quick-review')}>
                                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                    </button>
                                </div>
                            </div>
                            <div className={cx('product-info')}>
                                <h1 className={cx('name-tag')}>Nike Air Max 95 By You - Black/Sapphire</h1>
                                <h2 className={cx('price')}>
                                    {item.price}
                                    <span>đ</span>
                                </h2>
                            </div>
                        </Link>
                    );
                })}
            </div>
    );
}

export default NewProduct;
