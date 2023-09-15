import Info from "./Info";

function Drawer ({onRemove, onClose,items= []}) {

    return (
        <div className='overlay'>
        <div className='drawer'>
            <h2 className='mb-30'>Кошик
                <img onClick={onClose}className='btnClose' src='/images/btnclose.svg'  alt='btnclose'/>
            </h2>
            {
                items.length > 0 ? (
                    <div className='d-flex flex-column flex'>
                        <div className='items'>
                            {items.map((object,index) => (
                                <div key={index} className='cartItem'>
                                    <div style={{ backgroundImage:`url(${object.image})`}} className='cartItemImg'> </div>

                                    <div className='cartInfo'>
                                        <p className='cartText'>{object.title}</p>
                                        <b>{object.price} грн</b>
                                    </div>
                                    <img onClick={()=> onRemove(object.id)} className='btnClose' src='/images/btnclose.svg'  alt='btnclose'/>
                                </div>
                            ))
                            }</div>
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
                    ) : (
                        <Info
                            title='Кошик пустий'
                            description='Добавте хоть один товар, щоб зробити замовлення'
                            image='/images/empty-cart.jpg'/>

                )}

        </div>
        </div>
    )
}

export default Drawer;
