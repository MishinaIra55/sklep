import Card from "../components/Card";

import '../index.scss';

function Favorites ({items})  {
    return (
        <div className='content'>
            <div className='contentBlock'>
                <h1 className='contentTitle'>Улюблені товари</h1>
            </div>

            <div className='sneakers'>
                {items.map((item,index)=> (
                        <Card
                            key={index}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                        />
                    ))
                }

            </div>

        </div>
    )
}

export default Favorites;