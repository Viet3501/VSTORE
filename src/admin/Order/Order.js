import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../components/CartContext/CartContext';
import classNames from 'classnames/bind';
import styles from './Order.module.scss';
import Header from '../Header/Header';
import Navbar from '../Content/Navbar/Navbar';
import Table from '../Table/Table';
const cx = classNames.bind(styles);
function Order() {
    const { isLoading, setIsLoading } = useContext(CartContext);
    const [dataOrder, setDataOder] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/orderUsers').then((res) => {
            setIsLoading(false);
            setDataOder(res.data);
        });
    }, []);
    const handleDelete = async (id) => {
        const confim = window.confirm('Bạn chắc chắn muốn xóa không?');
        if (confim) {
            await fetch(`http://localhost:3001/orderUsers/${id}`, {
                method: 'DELETE',
            });
            setDataOder(dataOrder.filter((dataOrder) => dataOrder.id !== id));
        }
        
    };
    return (
        <div style={{ height: '100vh' }}>
            <Header></Header>
            <div className={cx('inner')}>
                <Navbar></Navbar>
                <div className={cx('container')}>
                    <div className={cx('heading')}>
                        <h3>Danh sách order</h3>
                    </div>
                    <div>
                        <div className={cx('list-product')}>
                            <table className={cx('table-product')}>
                                <tr>
                                    <th>ID</th>
                                    <th>Ảnh</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Phân loại</th>
                                    <th>Số lượng</th>
                                    <th>Tên khách hàng</th>
                                    <th>Địa chỉ</th>
                                    <th>Số điện thoại</th>
                                    <th>Thời gian đặt</th>
                                    <th>Xóa</th>
                                </tr>
                                {dataOrder.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td style={{minWidth:'30px'}}>{item.id}</td>
                                            <td className={cx('image')}>
                                                <img src={item.image}></img>
                                            </td>
                                            <td style={{maxWidth:'210px', minWidth:'150px'}} className={cx('title')}>{item.title}</td>
                                            <td style={{minWidth:'90px'}} className={cx('description')}>{item.price}đ</td>
                                            <td style={{minWidth:'80px'}}>
                                                {item.type.color}, {item.type.size}
                                            </td>
                                            <td style={{maxWidth:'20px'}}> {item.quantity}</td>
                                            <td style={{minWidth:'150px'}}>{item.name}</td>
                                            <td style={{maxWidth:'250px', minWidth:'150px'}}>{item.address}</td>
                                            <td>{item.telephone}</td>
                                            <td style={{maxWidth:'180px', minWidth:'100px'}}>{item.atTime}</td>
                                            <td style={{minWidth:'60px'}}>
                                                <button onClick={() => handleDelete(item.id)}>Xóa</button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
