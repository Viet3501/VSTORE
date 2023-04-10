import axios from 'axios';
import classNames from 'classnames/bind';
import { useContext, useEffect, useRef, useState } from 'react';
import { CartContext } from '../../../components/CartContext/CartContext';
import Table from '../../Table/Table';
import styles from './Product.module.scss';
const cx = classNames.bind(styles);
function Product() {
    const { setData, data, isLoading, setIsLoading } = useContext(CartContext);
    const [dataOrder, setDataOder] = useState([]);
    const tbodyRef = useRef();
    useEffect(() => {
        axios.get('http://localhost:3000/data').then((res) => {
            setIsLoading(false);
            setDataOder(res.data);
        });
    }, []);
    setIsLoading(false);
    return (
        <Table dataProduct={data}></Table>
    );
}

export default Product;
