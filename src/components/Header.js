import {Link} from "react-router-dom";
import {useContext} from "react";
import AppContext from "../context";

function Header (props) {
    const {cartItems} = useContext(AppContext);
    const totalPrice = cartItems.reduce((sum, object) => Number(object.price) + sum, 0);


    return (
        <header>
            <Link to="/">
                    <div className='headerLeft'>
                    <img src='/images/logo.svg' alt='#' width={40} height= {40}/>
                    <div className='headerInfo'>
                        <h3>REACT SNEAKERS</h3>
                        <p> Магазин найкращих кросівок</p>
                    </div>
                    </div>
            </Link>

            <ul className='headerRight'>
                <li onClick={props.onClickCart} className='headerList'>
                    <img src='/images/cart.svg'  alt='cart' width={18} height={18}/>
                    <span> {totalPrice}</span>
                </li>
                <li className='mr-20 cu-p'>
                    <Link to='/favorites'>
                        <img src='/images/favorites.png'  alt='закладки' width={18} height={18} />
                    </Link>

                </li>
                <li>
                    <img src='/images/user.svg'  alt='user' width='18' height='18'/>
                </li>
            </ul>
        </header>
    )
}

export default Header;