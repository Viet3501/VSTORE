import styles from './Statistical.module.scss';
import classNames from 'classnames/bind';
import Header from '../Header/Header';
import Navbar from '../Content/Navbar/Navbar';
import { useContext, useEffect, useMemo, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { CartContext } from '../../components/CartContext/CartContext';
ChartJS.register(ArcElement, Tooltip, Legend);
const cx = classNames.bind(styles);
function Statistical() {
    const { isLoading, setIsLoading } = useContext(CartContext);
    const [getMonth, setGetMonth] = useState(2);
    const [orderData, setOrderData] = useState({});
    const [isData, setIsData] = useState(false);
    const [dataOrder, setDataOder] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/orderUsers').then((res) => {
            setIsLoading(false);
            setDataOder(res.data);
        });
    }, []);
    useEffect(() => {
        const fetData = () => {
            // const labelsData = data.map((item) => {
            //     if (item.month == getMonth) {
            //         return item.title;
            //     } else {
            //         return [];
            //     }
            // });
            // console.log(data);
            // const setLabels = new Set(labelsData);
            setOrderData({
                labels: dataOrder.map((item) => {
                    if (item.month == getMonth) {
                        return item.title;
                    } else {
                        return [];
                    }
                }),
                datasets: [
                    {
                        label: 'Số lượng',
                        data: dataOrder.map((item, index) => {
                            if (item.month == getMonth) {
                                return item.quantity;
                            } else {
                                return [];
                            }
                        }),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                    },
                ],
            });
            setIsData(true);
        };
        fetData();
    }, [getMonth]);

    const result = dataOrder.reduce((acc, curr) => {
        if (curr.month == getMonth) {
            return acc + curr.price;
        }
    }, 0);
    return (
        <div>
            <Header />
            <div className={cx('inner')}>
                <Navbar />
                <div className={cx('container')}>
                    <div className={cx('wrapper')}>
                        <div className={cx('choose-month')}>
                            <h3>---Lựa chọn---</h3>
                            <ul className={cx('getMonth')}>
                                <button onClick={() => setGetMonth(1)}>Tháng 1</button>
                                <button onClick={() => setGetMonth(2)}>Tháng 2</button>
                                <button onClick={() => setGetMonth(3)}>Tháng 3</button>
                                <button onClick={() => setGetMonth(4)}>Tháng 4</button>
                                <button onClick={() => setGetMonth(5)}>Tháng 5</button>
                                <button onClick={() => setGetMonth(6)}>Tháng 6</button>
                                <button onClick={() => setGetMonth(7)}>Tháng 7</button>
                                <button onClick={() => setGetMonth(8)}>Tháng 8</button>
                                <button onClick={() => setGetMonth(9)}>Tháng 9</button>
                                <button onClick={() => setGetMonth(10)}>Tháng 10</button>
                                <button onClick={() => setGetMonth(11)}>Tháng 11</button>
                                <button onClick={() => setGetMonth(12)}>Tháng 12</button>
                            </ul>
                        </div>
                        <div className={cx('PieChart')}>{isData && <Pie data={orderData} />}</div>
                    </div>
                    <h2 style={{ fontSize: '25px' }}>Doanh thu: {result}đ</h2>
                </div>
            </div>
        </div>
    );
}

export default Statistical;
