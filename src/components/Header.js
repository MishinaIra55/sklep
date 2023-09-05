function Header (props) {
    return (
        <header>
            <div className='headerLeft'>
                <img src='/images/logo.svg' alt='#' width={40} height= {40}/>
                <div className='headerInfo'>
                    <h3>REACT SNEAKERS</h3>
                    <p> Магазин найкращих кросівок</p>
                </div>
            </div>

            <ul className='headerRight'>
                <li onClick={props.onClickCart} className='headerList'>
                    <img src='/images/cart.svg'  alt='cart' width={18} height={18}/>
                    <span> 2000грн</span>
                </li>
                <li className='mr-20 cu-p'>
                    <img src='/images/favorites.png'  alt='закладки' width='18' height='18'/>
                </li>
                <li>
                    <img src='/images/user.svg'  alt='user' width='18' height='18'/>
                </li>
            </ul>
        </header>
    )
}

export default Header;