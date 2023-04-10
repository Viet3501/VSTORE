import styles from './GlobalStyles.scss'
import classNames from 'classnames/bind';
function GlobalStyles({children}) {
    return ( 
        <div >
            {children}
        </div>
     );
}

export default GlobalStyles;