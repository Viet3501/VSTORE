import Navbar from './Navbar/Navbar';
import Product from './Product/Product';
import classNames from 'classnames/bind';
import styles from './Content.module.scss';
const cx = classNames.bind(styles);
function Content() {
    return (
        <div className={cx('container')}>
            <div className={cx('inner')}>
                <Navbar></Navbar>
                <div className={cx('product')}>
                    <Product></Product>
                </div>
            </div>
        </div>
    );
}

export default Content;
