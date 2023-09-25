import Card from "../components/Card";




function Orders ()  {
    return (
        <div className='content'>
            <div className='contentBlock'>
                <h1 className='contentTitle'>  Мої замовлення</h1>
            </div>

            <div className='sneakers'>

                {[].map((item,index)=> (
                        <Card />
                    ))
                }
            </div>
        </div>
    )
}

export default Orders;
