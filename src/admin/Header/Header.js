import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('container')}>
            <div className={cx('inner')}>
                <div className={cx('title')}>
                    <h3 className={cx('name')}>Xin chào Admin</h3>
                </div>
                <div className={cx('action')}>
                    <div className={cx('logout')}>
                        <h3>Đăng xuất</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
