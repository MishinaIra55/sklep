
import './index.scss';

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";
import {useState} from "react";


function App() {
    const [cartOpened, setCartOpened] = useState(false);
    const [items, setItems] = useState([]);

    fetch('https://64edba671f8721827141a748.mockapi.io/items');

  return (
      <div className='wrapper'>

          {cartOpened ? <Drawer onClose={()=> setCartOpened(false)}/> : null}
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
         {items.map((item)=> (
             <Card
                 title={item.name}
                 price={item.price}
                 image={item.imageUrl}
                 onClickFavorite={()=> console.log('о')}

                 onClickPlus={()=> console.log('нажали плюс')}
                 />
             ))
         }

     </div>

    </div>

  </div>
  )
}

export default App;
