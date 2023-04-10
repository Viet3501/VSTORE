import classNames from 'classnames/bind';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../components/CartContext/CartContext';
import styles from './Table.module.scss';
const cx = classNames.bind(styles);
function Table({ dataProduct }) {
    const { setData, data } = useContext(CartContext);
    const [checkUpdate, setCheckUpdate] = useState(false);
    const handleDelete = async (id) => {
        const confim = window.confirm('Bạn chắc chắn muốn xóa không?');
        if (confim) {
            await fetch(`http://localhost:3000/data/${id}`, {
                method: 'DELETE',
            });
            setData(data.filter((data) => data.id !== id));
        }
    };

    const handleUpdate = (item) => {
        setCheckUpdate(true);
    };
    return (
        <div className={cx('container')}>
            <div className={cx('heading')}>
                <h3>Danh sách sản phẩm</h3>
            </div>
            <div className={cx('product__body')}>
                <div className={cx('list-product')}>
                    <table className={cx('table-product')}>
                        <tr>
                            <th>ID</th>
                            <th>Ảnh</th>
                            <th>Tên sản phẩm</th>
                            <th>Mô tả</th>
                            <th>Giá</th>
                            <th>Màu</th>
                            <th>Size</th>
                            <th>Sửa</th>
                            <th>Xóa</th>
                        </tr>
                        {dataProduct.map((item, index) => {
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td className={cx('image')}>
                                        <img src={item.image}></img>
                                    </td>
                                    <td className={cx('title')}>{item.title}</td>
                                    <td className={cx('description')}>{item.description}</td>
                                    <td>{item.salePrice}</td>
                                    <td>{item.color}</td>
                                    <td>{item.size}</td>
                                    <td>
                                        <Link item={item} to={`/updateProduct/${item.id}`}>
                                            <button onClick={() => handleUpdate(item)}>Sửa</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item.id)}>Xóa</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Table;
