import Info from "./Info";
import {useContext, useState} from "react";
import AppContext from "../context";

function Drawer ({onRemove, onClose,items= []}) {
    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const { setCartItems, cartItems } = useContext(AppContext);

    const totalPrice = cartItems.reduce((sum, object) => Number(object.price) + sum, 0);

    const onClickOrder = () => {
        setIsOrderComplete(true);
        setCartItems([]);//очищаю корзину
    }

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
                                    <b> {totalPrice} грн </b>
                                </li>
                                <li >
                                    <span>Податок 5%:</span>
                                    <div></div>
                                    <b>{totalPrice / 100 * 5} грн</b>
                                </li>
                            </ul>
                            <button onClick={onClickOrder} className='greenButton'>Замовити замовлення <img src='/images/arrow.svg' alt='arrow'/></button>
                        </div>
                    </div>
                    ) : (
                        <Info
                            title={isOrderComplete ? "Замовлення оформлене,дякуємо за заказ" : 'Кошик пустий'}
                            description={isOrderComplete ? "Ваше замовлення буде передане курьеру найближчим часом" : 'Добавте хоть один товар, щоб зробити замовлення'}
                            image={isOrderComplete ? '/images/cart-added.png' : '/images/empty-cart.jpg'}/>

                )}

        </div>
        </div>
    )
}

export default Drawer;
