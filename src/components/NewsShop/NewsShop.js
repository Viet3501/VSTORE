import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './NewsShop.module.scss';
import seperate from '../../assets/images/seperate.jpg';
import newsShop1 from '../../assets/images/newsShop1.webp';
import newsShop2 from '../../assets/images/newsShop2.webp';
import newsShop3 from '../../assets/images/newsShop3.webp';
import newsShop4 from '../../assets/images/newsShop4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function NewsShop() {
    return (
        <div>
            <div className={cx('seperate-img')}>
                <img src={seperate} />
                <div className={cx('title-img')}>
                    <h1>VStore</h1>
                    <div className={cx('title-link')}>
                        <Link to="/">Trang chủ / </Link>
                        <Link to="/products">Tin tức</Link>
                    </div>
                </div>
            </div>
            <div className={cx('list-product')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('filter-product')}>
                            <div className={cx('news-hot')}>
                                <h1 className={cx('heading-1')}>BÀI VIẾT MỚI NHẤT</h1>
                                <div className={cx('news-block')}>
                                    <a href="" className={cx('news-img')}>
                                        <img src={newsShop1} alt="air-jordan-4-bred-black-cement" />
                                    </a>
                                    <a href="" className={cx('news-info')}>
                                        <h1 className={cx('name-news')}>
                                            6 Facts ngắn về Air Jordan 4 “Bred” ra mắt vào cuối tuần này
                                        </h1>
                                        <span className={cx('news-tag')}>Ngày viết:</span>
                                        <span className={cx('news-time-public')}>30/12/2022</span>
                                    </a>
                                </div>
                                <div className={cx('news-block')}>
                                    <a href="" className={cx('news-img')}>
                                        <img src={newsShop2} alt="blog" />
                                    </a>
                                    <a href="" className={cx('news-info')}>
                                        <h1 className={cx('name-news')}>Đánh giá - ASICS GEL-Nimbus 22</h1>
                                        <span className={cx('news-tag')}>Ngày viết:</span>
                                        <span className={cx('news-time-public')}>30/12/2022</span>
                                    </a>
                                </div>
                                <div className={cx('news-block')}>
                                    <div href="" className={cx('news-img')}>
                                        <img src={newsShop3} alt="blog" />
                                    </div>
                                    <a href="" className={cx('news-info')}>
                                        <h1 className={cx('name-news')}>
                                            Fragment design x Travis Scott x Air Jordan 1 High - hình ảnh chính thức!
                                        </h1>
                                        <span className={cx('news-tag')}>Ngày viết:</span>
                                        <span className={cx('news-time-public')}>30/12/2022</span>
                                    </a>
                                </div>
                                <div className={cx('news-block')}>
                                    <a href="" className={cx('news-img')}>
                                        <img src={newsShop4} alt="blog" />
                                    </a>
                                    <a href="" className={cx('news-info')}>
                                        <h1 className={cx('name-news')}>
                                            Cách chọn giày chính xác khi mua giày online
                                        </h1>
                                        <span className={cx('news-tag')}>Ngày viết:</span>
                                        <span className={cx('news-time-public')}>30/12/2022</span>
                                    </a>
                                </div>
                            </div>
                            <div className={cx('news-filter')}>
                                <h1 className={cx('heading-1')}>DANH MỤC TIN TỨC</h1>
                                <div className={cx('list-news')}>
                                    <a href="">Bộ sưu tập giày</a>
                                    <a href="">Đánh giá giày</a>
                                    <a href="">Phụ kiện phù hợp</a>
                                    <a href="">Deal đồng giá</a>
                                </div>
                            </div>
                        </div>
                        <div className={cx('news-list')}>
                            <h1 className={cx('heading-1-right')}>TIN TỨC</h1>
                            <div className={cx('news-block-right')}>
                                <a href="" className={cx('news-img-right')}>
                                    <img src={newsShop1} alt="air-jordan-4-bred-black-cement" />
                                </a>
                                <div className={cx('news-info-right')}>
                                    <a href="" className={cx('name-news-right')}>
                                        6 Facts ngắn về Air Jordan 4 “Bred” ra mắt vào cuối tuần này
                                    </a>
                                    <span className={cx('news-tag-right')}>Ngày viết:30/12/2022</span>
                                    <p className={cx('text-16-right')}>
                                        Phương thức tường thuật lại những câu chuyện lịch sử của Michael Jordan thông
                                        qua từng thiết kế Air Jordan luôn gợi về một cảm giác lần đầu tiên khám phá ra
                                        thiết kế vĩ đại này. Jordan Brand luôn gợi nhớ cho cả thế giới biết rằng Michael
                                        vẫn là The G.O.A.T
                                    </p>
                                </div>
                            </div>
                            <div className={cx('news-block-right')}>
                                <a href="" className={cx('news-img-right')}>
                                    <img src={newsShop2} alt="blog" />
                                </a>
                                <div className={cx('news-info-right')}>
                                    <a href="" className={cx('name-news-right')}>
                                        Đánh giá - ASICS GEL-Nimbus 22
                                    </a>
                                    <span className={cx('news-tag-right')}>Ngày viết:30/12/2022</span>
                                    <p className={cx('text-16-right')}>
                                        ASICS GEL-NIMBUS 22 CÓ GÌ MỚI?Khi khui hộp đôi ASICS GEL-Nimbus 22, điều đầu
                                        tiên đập ngay vào mắt chính là phần thiết kế...
                                    </p>
                                </div>
                            </div>
                            <div className={cx('news-block-right')}>
                                <a href="" className={cx('news-img-right')}>
                                    <img src={newsShop3} alt="blog" />
                                </a>
                                <div className={cx('news-info-right')}>
                                    <a href="" className={cx('name-news-right')}>
                                        Fragment design x Travis Scott x Air Jordan 1 High - hình ảnh chính thức!
                                    </a>
                                    <span className={cx('news-tag-right')}>Ngày viết:30/12/2022</span>
                                    <p className={cx('text-16-right')}>
                                        Sau một thời gian dài đồn đoán trong cộng đồng người yêu giày, phiên bản tiếp
                                        theo của series giày Travis Scott x Air Jordan...
                                    </p>
                                </div>
                            </div>
                            <div className={cx('news-block-right')}>
                                <a href="" className={cx('news-img-right')}>
                                    <img src={newsShop4} alt="blog" />
                                </a>
                                <div className={cx('news-info-right')}>
                                    <a href="" className={cx('name-news-right')}>
                                        Cách chọn giày chính xác khi mua giày online
                                    </a>
                                    <span className={cx('news-tag-right')}>Ngày viết:30/12/2022</span>
                                    <p className={cx('text-16-right')}>
                                        I. MỘT SỐ LƯU Ý TRƯỚC KHI CHỌN SIZETrước khi đi vào hướng dẫn cách để chọn size
                                        chuẩn nhất khi mua giày online, OSS...
                                    </p>
                                </div>
                            </div>
                            <div className={cx('Page-navigation')}>
                                <ul className={cx('pagination')}>
                                    <Link to="" className={cx('page-item', 'active')}>
                                        1
                                    </Link>
                                    <Link to="" className={cx('page-item')}>
                                        2
                                    </Link>
                                    <Link to="" className={cx('page-item')}>
                                        3
                                    </Link>
                                    <Link to="" className={cx('page-item')}>
                                        <FontAwesomeIcon icon={faAnglesRight} />
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsShop;
