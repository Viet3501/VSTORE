import slider1 from '../../assets/images/slider1.jpg';
import slider2 from '../../assets/images/slider2.jpg';
import slider3 from '../../assets/images/slider3.jpg';

import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const slides = [
    {
        id: 1,
        img: slider1,
        title: 'Welcome to',
        name: 'VStore',
    },
    {
        id: 2,
        img: slider2,
        title: 'Sale off 20%',
        name: 'All item',
    },
    {
        id: 3,
        img: slider3,
        title: 'Bộ sưu tập',
        name: 'mùa hè',
    },
];
function Slider() {
    const [slide, setSlide] = useState(1);
    let idRef = useRef();
    useEffect(() => {
        idRef = setInterval(() => {
            setSlide(slide === slides.length ? 1 : slide + 1);
        }, 5000);
        return () => {
            clearInterval(idRef);
        };
    }, [slide]);
    const handlePrev = () => {
        setSlide(slide === 1 ? slides.length : slide - 1);
    };
    const handleNext = () => {
        setSlide(slide === slides.length ? 1 : slide + 1);
    };
    return (
        <div className={cx('wrapper')}>
            {slides.map((item) => {
                return (
                    <div key={item.id} className={cx('inner')}>
                        {slide === item.id && (
                            <div className={cx('banner')}>
                                <button className={cx('btn-prev')} onClick={() => handlePrev()}>
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                                <div className={cx('slider')}>
                                    <img className={cx('slider_img')} src={item.img} />
                                    <div className={cx('slider-1')}>
                                        <div className={cx('banner-title')}>
                                            <h1 className={cx('text-left')}>{item.title}</h1>
                                            <h1 className={cx('text-right')}>{item.name}</h1>
                                        </div>
                                        <Link to="/products" className={cx('btn')}>
                                            <h1>MUA NGAY</h1>
                                        </Link>
                                    </div>
                                </div>
                                <button className={cx('btn-next')} onClick={() => handleNext()}>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default Slider;
