
import './index.scss';

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";
import {useEffect, useState} from "react";


function App() {
    const [cartOpened, setCartOpened] = useState(false);
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);//хранение товаров в корзине

    useEffect(() => {
        fetch('https://64edba671f8721827141a748.mockapi.io/items').then(response => {
            return response.json();
        }).then((json) => {
            setItems(json);
        });
    },[]);

    const onAddToCart = () => {
        console.log(122);
    }

  return (
      <div className='wrapper'>

          {cartOpened ? <Drawer items = {cartItems} onClose={()=> setCartOpened(false)}/> : null}
        <Header onClickCart={()=> setCartOpened(true)}/>
    <div className='content'>
     <div className='contentBlock'>
       <h1 className='contentTitle'>Всі кроссівки</h1>
       <div className='search'>
         <img src='/images/search.svg' alt='search'/>
         <input placeholder='Search...'/>
       </div>
     </div>

     <div className='sneakers'>
         {items.map((item,index)=> (
             <Card
                 key={index}
                 title={item.name}
                 price={item.price}
                 image={item.imageUrl}
                 onClickFavorite={()=> console.log('о')}

                 onPlus={onAddToCart}
                 />
             ))
         }

     </div>

    </div>

  </div>
  )
}

export default App;
