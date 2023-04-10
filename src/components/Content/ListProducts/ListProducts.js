import styles from './ListProducts.module.scss';
import classNames from 'classnames/bind';
import seperate from '../../../assets/images/seperate.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext, useEffect, useRef, useState } from 'react';
import { CartContext } from '../../CartContext/CartContext';
const cx = classNames.bind(styles);
function ListProducts() {
    const [page, setPage] = useState(1);
    const { setCart, data, setQuantity, isLoading, quantityShoe } = useContext(CartContext);
    let pageRef = useRef();
    const handleClickCart = (item, index) => {
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
            quantity: item.quantity,
        };
        toast.success('Thêm thành công!');
        setCart((prev) => {
            if (prev.length >= 1) {
                let prevShoes = prev.filter((shoe) => {
                    if (shoe.id === newShoes.id) {
                    }
                    return shoe.id !== newShoes.id;
                });
                return [...prevShoes, newShoes];
            } else {
                return [...prev, newShoes];
            }
        });
    };
    const handleClickPage = (pageIndex) => {
        setPage(pageIndex);
    };
    return (
        <div className={cx('responsive')}>
            <div className={cx('seperate-img')}>
                <img src={seperate} />
                <div className={cx('title-img')}>
                    <h1>VStore</h1>
                    <div className={cx('title-link')}>
                        <Link to="/">Trang chủ / </Link>
                        <Link to="/products">Sneaker</Link>
                    </div>
                </div>
            </div>
            {isLoading ? (
                <div className={cx('loading')}>Vui lòng chờ xíu....</div>
            ) : (
                <div className={cx('container-inner')}>
                    {data.map((item, index) => {
                        if (item.category === page) {
                            return (
                                <div key={item.id} className={cx('product-card')}>
                                    <div className={cx('product-card__inner')}>
                                        <Link to={`/product/${item.id}`} className={cx('product-link')}>
                                            <img src={item.image} alt="shoes" />
                                        </Link>
                                        <div className={cx('quick-action')}>
                                            <button
                                                onClick={() => handleClickCart(item, item.id)}
                                                className={cx('add-to-cart')}
                                            >
                                                <FontAwesomeIcon icon={faBagShopping} />
                                            </button>
                                            <button className={cx('favourite')}>
                                                <FontAwesomeIcon icon={faHeart} />
                                            </button>
                                            <Link to={`/product/${item.id}`} className={cx('quick-review')}>
                                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                            </Link>
                                        </div>
                                    </div>
                                    <Link to={`/product/${item.id}`} className={cx('product-info')}>
                                        <h1 className={cx('name-tag')}>{item.title}</h1>
                                        <div className={cx('rating-price')}>
                                            <div className={cx('price-shoes')}>
                                                <h2 className={cx('price')}>
                                                    {item.originalPrice}
                                                    <span>đ</span>
                                                </h2>
                                                <h2 className={cx('price-sale')}>
                                                    {item.salePrice}
                                                    <span>đ</span>
                                                </h2>
                                            </div>
                                            <p>Đã bán {item.rating.count}</p>
                                        </div>
                                    </Link>
                                </div>
                            );
                        }
                    })}
                </div>
            )}
            {!isLoading && (
                <div className={cx('btn-page')}>
                    <button
                        onClick={() => {
                            pageRef.current = 1;
                            return handleClickPage(pageRef.current);
                        }}
                        className={cx('btn-page-shoe', 'btn-page-1')}
                    >
                        1
                    </button>
                    <button
                        onClick={() => {
                            pageRef.current = 2;
                            return handleClickPage(pageRef.current);
                        }}
                        className={cx('btn-page-shoe', 'btn-page-2')}
                    >
                        2
                    </button>
                    <button
                        onClick={() => {
                            pageRef.current = 3;
                            return handleClickPage(pageRef.current);
                        }}
                        className={cx('btn-page-shoe', 'btn-page-3')}
                    >
                        3
                    </button>
                    <button
                        onClick={() => {
                            pageRef.current = 4;
                            return handleClickPage(pageRef.current);
                        }}
                        className={cx('btn-page-shoe', 'btn-page-4')}
                    >
                        4
                    </button>
                    <button
                        onClick={() => {
                            pageRef.current = 5;
                            return handleClickPage(pageRef.current);
                        }}
                        className={cx('btn-page-shoe', 'btn-page-5')}
                    >
                        5
                    </button>
                </div>
            )}
        </div>
    );
}

export default ListProducts;
