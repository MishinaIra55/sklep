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
                <li className='headerList'>
                    <img src='/images/cart.svg'  alt='cart' width={18} height={18}/>
                    <span> 2000грн</span>
                </li>
                <li>
                    <img src='/images/user.svg'  alt='user' width='18' height='18'/>
                </li>
            </ul>
        </header>
    )
}

export default Header;