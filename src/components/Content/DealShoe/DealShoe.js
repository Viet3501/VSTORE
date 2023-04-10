import styles from './DealShoe.module.scss';
import classNames from 'classnames/bind';
import dealImg from '../../../assets/images/deal.webp';
import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
const cx = classNames.bind(styles);
function DealShoe() {
    const [hour, setHour] = useState(23);
    const [minute, setMinute] = useState(59);
    const [second, setSecond] = useState(60);

    const timeId = useRef();

    useEffect(() => {
        timeId.current = setInterval(() => {
            setSecond((prevS) => {
                if (prevS <= 0) {
                    setMinute((prevM) => {
                        if (prevM <= 0) {
                            setSecond(59)
                            setMinute(59)
                            setHour((prevH) => prevH - 1);
                        } else {
                            setSecond(59)
                            return prevM - 1
                        };
                    });
                } else return prevS - 1;
            });
        }, 1000);
        return () => clearInterval(timeId.current);
    }, []);

    return (
        <div className={cx('"hot-deal"')}>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('deal-info')}>
                        <div className={cx('deal-info-inner')}>
                            <h1 className="deal-title">
                                DEAL
                                <br />
                                TRONG NGÀY
                            </h1>
                            <span className={cx('deal-times')}>
                                <span className={cx("deal-hour")}>{hour}</span>
                                <span className={cx("deal-minute")}>{minute}</span>
                                <span className={cx("deal-second")}>{second}</span>
                            </span>
                        </div>
                        <div className={cx('deal-name')}>
                            <span>SEGA x PUMA RS-0 -Sonic</span>
                            <span className={cx('color--red')}>SALE 50%</span>
                        </div>
                        <div className={cx('price-of-deal')}>
                            <span className={cx('price-current')}> 1,250,000đ</span>
                            <span className={cx('price-old')}>2,500,000đ</span>
                        </div>
                        <Link to="/products" className={cx('btn--primary')}>
                            CHI TIẾT
                        </Link>
                    </div>
                    <div className={cx('deal-shoe')}>
                        <img src={dealImg} alt="deal" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DealShoe;
