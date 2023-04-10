import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
const cx = classNames.bind(styles)
function Navbar() {
    return (
        <div className={cx('container')}>
            <div className={cx('inner')}>
                <div className={cx('heading')}>
                    <h3>Admin Meunu</h3>
                </div>
                <div className={cx('headingList')}>
                    <ul>
                        <Link className={cx('navbar-item')} to='/adminProduct'>Sản phẩm</Link>
                        <Link className={cx('navbar-item')} to='/adminOrder'>Đơn hàng</Link>
                        <Link className={cx('navbar-item')} to='/addProduct'>Thêm sản phẩm</Link>
                        <Link className={cx('navbar-item')} to='/doanhthu'>Thống kê</Link>
                        <Link className={cx('navbar-item')} to='/news'>Tin tức</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
