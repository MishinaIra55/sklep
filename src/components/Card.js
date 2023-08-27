function Card  (props) {
    return (
        <div className='card'>
            <div className='favorite'>
                <img src='/images/unliked.png'  width='30'  height='30' alt='unliked'/>
            </div>
            <img src={props.image} width={133}  height={112} alt='sneakers'/>
            <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
            <div className='cardBlock'>
                <div className='cardText'>
                    <span>{props.title}:</span>
                    <b>{props.price}</b>
                </div>
                <button className='button'>
                    <img src='/images/plus1.svg'  alt='plus1' width='11' height='11'/>
                </button>
            </div>
        </div>
    )
}

export default Card;