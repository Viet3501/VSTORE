import classNames from 'classnames/bind';
import styles from './AboutShop.module.scss';
import store1 from '../../assets/images/store1.jpg'
import store2 from '../../assets/images/store2.jpg'
import seperate from '../../assets/images/seperate.jpg';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function AboutShop() {
    return (
        <div>
            <div className={cx('seperate-img')}>
                    <img src={seperate} />
                    <div className={cx('title-img')}>
                        <h1>VStore</h1>
                        <div className={cx('title-link')}>
                            <Link to='/'>Trang chủ / </Link>
                            <Link to='/about'>Giới thiệu</Link>
                        </div>
                    </div>
            </div>
            <div className={cx("content-page")}>
                <h1 className={cx("heading-page")}>Chào mừng đến với VStore</h1>
                <div className={cx("container")}>
                    <div className={cx("row")}>
                        <div className={cx("col")}>
                            <h1 className={cx("heading-1")}>Thành lập từ 2022</h1>
                            <p className={cx("text")}>
                                V store được nhiều bạn trẻ biết đến là cửa hàng chuyên bán và order giày sneakers và phụ
                                kiện. Sneaker Land cam kêt mang đến cho khách hàng các sản phẩm giày chính hãng, 100%
                                authentic, US shipped. Rất nhiều khách hàng đã mua, trải nghiệm và đánh giá về nguồn gốc của
                                hàng nên bạn không cần phải lo lắng chút nào khi mua giày tại đây. Điều đặc biệt khiến V
                                được nhiều người biết đến bởi tại đây cung cấp nhiều mẫu mã giày đa dạng kèm các loại phụ
                                kiện phù hợp với cá tính riêng của từng khách hàng. Từ những mẫu giày basic đến những chiếc
                                giày cá tính, phá cách, cửa hàng luôn update và đưa đến cho khách hàng những mẫu giày mới
                                thường xuyên nên bạn có thể tìm được mẫu giày mới, ưng ý và chất lượng nhất tại đây.
                            </p>
                        </div>
                        <div className={cx("col")}>
                            <img src={store1} alt="store" />
                        </div>
                    </div>
                    <div className={cx("row")}>
                        <div className={cx("col")}>
                            <img src={store2} alt="store" />
                        </div>
                        <div className={cx("col")}>
                            <h1 className={cx("heading-1")}>Tại sao nên chọn VStore</h1>
                            <ul>
                                <li>
                                    <p className={cx("text")}>
                                        Chúng tôi luôn có sẵn giày sneaker nam và nữ với nhiều kích cỡ, dễ dàng đáp ứng nhu
                                        cầu và thị hiếu khách hàng.
                                    </p>
                                </li>
                                <li>
                                    <p className={cx("text")}>
                                        Mẫu mã đa dạng, phong phú đến từ những thương hiệu giày nổi tiếng: Adidas, Nike,
                                        Converse, New Balance, Vans,…
                                    </p>
                                </li>
                                <li>
                                    <p className={cx("text")}>Luôn cập nhật những mẫu giày xu hướng mới nhất.</p>
                                </li>
                                <li>
                                    <p className={cx("text")}>
                                        Đa dạng tính năng: giày đi chơi, giày đi làm, giày chạy bộ, giày bóng rổ, giày tập
                                        gym,…
                                    </p>
                                </li>
                                <li>
                                    <p className={cx("text")}>Giao hàng nhanh chỉ 2 tiếng trong khu vực nội thành.</p>
                                </li>
                                <li>
                                    <p className={cx("text")}>Thoải mái kiểm tra, dễ dàng đổi trả, miễn phí ship và nhiều ưu đãi.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx("col",'col-bottom')}>
                        <h1 className={cx("heading-1")}>Cảm hứng với VStore</h1>
                        <p className={cx("text")}>
                            <strong>
                                ‘Tôi dành phần lớn thời gian của mình khoác lên những thứ bất tiện, vì vậy tôi chỉ nghĩ đến
                                những đôi giầy thể thao.’ – Cara Delevingne
                            </strong>
                            <br />
                            Chúng tôi cũng đã và đang là những người tiêu dùng nên chúng tôi hiểu rất rõ tầm quan trọng của
                            một đôi giày. Đó có thể là một đôi giày thể thao chạy bộ, đi chơi hay giày đá banh nhưng tựu
                            chung lại thứ chúng ta cần vẫn là sự thoải mái và tự tin khi mang đôi giày vào. Với một đôi chân
                            khỏe, một đôi giày tốt bạn có thể bước qua những chướng ngại, có thể thoải mái thể hiện mình,
                            thoải mái vận động với những dòng thể thao hay thoải mái chưng diện với những dòng Sneaker kinh
                            điển. Từ niềm cảm hứng bất tận với giày, đội ngũ chúng tôi đã cho ra đời đứa con tinh thần “Hyy
                            store”. Với mong muốn mang đến cho khách hàng những đôi giày "chất nhất" đến từ các thương hiệu
                            hàng đầu thế giới như Nike, Adidas, Puma, Reebok, Fila, Converse, New Balance, Asics,… với mức
                            giá vô cùng hợp lý. Từ giày bóng đá, tennis, cầu lông cho đến giày sneaker, running, training,…
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutShop;
