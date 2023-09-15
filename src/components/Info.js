const Info = ({title, description}) => {
    return (
        <div className='cartEmpty'>
            <img className='imageEmpty' width={120} height={120} src='/images/empty-cart.jpg' alt='empty cart'/>
            <h2 className='mb-20'>{title}</h2>
            <p className='opacity-6 mb-20'>{description}</p>
            <button onClick={onClose} className='greenEmptyCart' >
                <img src='/images/arrow-cart.png' alt='arrow'/>
                Повернутися назад
            </button>
        </div>
    )
}

export default Info;