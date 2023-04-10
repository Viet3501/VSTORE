import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import classNames from 'classnames/bind';
import styles from './LoginAdmin.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function LoginAdmin() {
    return (
        <div className={cx('container')}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Acount</Form.Label>
                    <Form.Control type="email" placeholder="Enter Acount" />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Link to='/adminProduct' variant="primary" type="submit">
                    Login
                </Link>
            </Form>
        </div>
    );
}

export default LoginAdmin;
