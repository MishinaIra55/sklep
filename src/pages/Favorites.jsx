import Card from "../components/Card";


function Favorites ({items})  {
    return (
        <div className='content'>
            <div className='contentBlock'>
                <h1 className='contentTitle'>Улюблені товари</h1>

            </div>

            <div className='sneakers'>
                {items
                    .map((item,index)=> (
                        <Card
                            key={index}
                            title={item.name}
                            price={item.price}
                            image={item.imageUrl}

                        />
                    ))
                }

            </div>

        </div>
    )
}

export default Favorites;