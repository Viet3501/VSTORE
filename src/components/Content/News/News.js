import styles from './News.module.scss';
import classNames from 'classnames/bind';
import News1 from '../../../assets/images/News1.webp';
import News2 from '../../../assets/images/News2.webp';
import News3 from '../../../assets/images/News3.webp';
import News4 from '../../../assets/images/News4.webp';
import seperate from '../../../assets/images/seperate.jpg';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const NewsShoes = [
    {
        id: 1,
        img: News1,
        title: '6 Facts ngắn về Air Jordan 4 "Bred" ra mắt vào',
        desc: '#VStore 25/12/2022',
    },
    {
        id: 2,
        img: News2,
        title: 'Đánh giá - ASICS GEL-Nimbus 22',
        desc: '#VStore 25/12/2022',
    },
    {
        id: 3,
        img: News3,
        title: 'Fragment design x Travis Scott x Air Jordan 1 High - hình ảnh chính thức!',
        desc: '#VStore 25/12/2022',
    },
    {
        id: 4,
        img: News4,
        title: 'Cách chọn giày chính xác khi mua giày online',
        desc: '#VStore 25/12/2022',
    },
];
function News() {
    return (
        <div className={cx('news')}>
            <div className={cx('container-fuild')}>
                <h1 className={cx('name-colection')}>
                    <Link to="/news">TIN TỨC</Link>
                </h1>
                <div className={cx('row')}>
                    {NewsShoes.map((item, index) => {
                        return (
                            <div key={item.id} className={cx('news-container')}>
                                <Link to="/news" className={cx('news-block')}>
                                    <div className={cx('news-img')}>
                                        <img src={item.img} alt="blog" />
                                    </div>
                                    <div className={cx('news-info')}>
                                        <span className={cx('news-tag')}>#VStore</span>
                                        <span className={cx('news-time-public')}>24/12/2022</span>
                                        <h1 className={cx('name-news')}>{item.title}</h1>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div className={cx('text-center')}>
                    <Link to="/news" className={cx('btn--primary')}>
                        Xem thêm
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default News;
