function Drawer ({onClose,items= []}) {
    return (
        <div className='overlay'>
        <div className='drawer'>
            <h2 className='mb-30'>Кошик
                <img onClick={onClose}className='btnClose' src='/images/btnclose.svg'  alt='btnclose'/>
            </h2>

            <div className='items'>
                {
                    items.map((object) => (
                    <div className='cartItem'>
                    <div style={{backgroundImage:'url(/images/sneakers/1.jpg)'}} className='cartItemImg'> </div>

                    <div className='cartInfo'>
                    <p className='cartText'>Мужские Кроссовки Nike Air Max 270</p>
                    <b>2000 грн</b>
                    </div>
                    <img className='btnClose' src='/images/btnclose.svg'  alt='btnclose'/>
                    </div>
                    ))
                }

            </div>

            <div className='cartTotalInfo'>
                <ul >
                    <li >
                        <span>Разом:</span>
                        <div></div>
                        <b> 20000 грн </b>
                    </li>
                    <li >
                        <span>Податок 5%:</span>
                        <div></div>
                        <b>2000 грн</b>
                    </li>
                </ul>
                <button className='greenButton'>Замовити замовлення <img src='/images/arrow.svg' alt='arrow'/></button>
            </div>
        </div>
        </div>
    )
}

export default Drawer;
