import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ContentContact.module.scss';
import seperate from '../../assets/images/seperate.jpg';
import ReactMapGL from 'react-map-gl'

const cx = classNames.bind(styles);

function ContentContact() {
    return (
        <div>
            <div className={cx('seperate-img')}>
                <img src={seperate} />
                <div className={cx('title-img')}>
                    <h1>VStore</h1>
                    <div className={cx('title-link')}>
                        <Link to="/">Trang chủ / </Link>
                        <Link to="/contact">Liên hệ</Link>
                    </div>
                </div>
            </div>
            <div className="content-page">
                <h1 className="text-center heading-page">Chào mừng đến với VStore</h1>
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-6 col-12">
                            <h1 className="heading-1 line-seperate">STORE</h1>
                            <p className="text">
                                <a href="https://goo.gl/maps/3ZgBBednrBUQfaWc6">Store 1: </a>
                            </p>
                            <p className="text">
                                <a href="https://goo.gl/maps/BY7bJQ8ZdkEM9r2b9">Store 2: </a>
                            </p>
                            <div className="contact-img">
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div className="col col-lg-6 col-12 mt-md-5 mt-lg-0 mt-sm-5 mt-5">
                            <h1 className="heading-1 line-seperate">Thông tin liên hệ:</h1>
                            <form name="pmForm" id="pmForm">
                                <div className="contact-input">
                                    <label htmlFor="contact-input__name">Họ và tên:</label>
                                    <input
                                        type="text"
                                        className="input-className"
                                        name="name"
                                        id="contact-input__text"
                                    />
                                </div>
                                <div className="contact-input">
                                    <label htmlFor="contact-input__phone">Số điện thoại: </label>
                                    <input
                                        type="number"
                                        className="input-className"
                                        name="phone"
                                        id="contact-input__phone"
                                    />
                                </div>
                                <div className="contact-input">
                                    <label htmlFor="contact-input__email">Email:</label>
                                    <input
                                        type="email"
                                        className="input-className"
                                        name="email"
                                        id="contact-input__email"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="contact-map container-fuild">
                    <h1 className="heading-1 text-center">Địa chỉ</h1>
                    <div>
                        <ReactMapGL/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentContact;
