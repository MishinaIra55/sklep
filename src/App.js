
import './index.scss';

import Header from "./components/Header";
import Drawer from "./components/Drawer";

import {useEffect, useState} from "react";

import axios from 'axios';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
// import Favorites from "./pages/Favorites";


function App() {
    const [cartOpened, setCartOpened] = useState(false);
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);//хранение товаров в корзине
    const [searchValue, setSearchValue] = useState('');//для поиска кросовок
    // const [favorites, setFavorites] = useState([]);//массив закладок


    useEffect(() => {
        async function fetchData() {
            const cartResponse = await axios.get('https://64edba671f8721827141a748.mockapi.io/cart');
            const itemsResponse = await axios.get('https://64edba671f8721827141a748.mockapi.io/items');
            // const favoriteResponse = await axios.get('https://64edba671f8721827141a748.mockapi.io/favorites');

            setCartItems(cartResponse.data);
            setItems(itemsResponse.data);
            //setFavorites(favoriteResponse.data);
         }
        fetchData();
        },[]);



    //метод удаления карточки товара
    const onRemoveItem = (id) => {
        console.log(id)
        axios.delete(`https://64edba671f8721827141a748.mockapi.io/cart/${id}`);
         setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

//     const onAddFavorites = async (object) => {
//     try {
//         if (favorites.find((objectFav) => objectFav.id === object.id)) {
//             // axios.delete(`https://64edba671f8721827141a748.mockapi.io/favorites/${object.id}`);
//         } else {
//             // const {data} = await axios.post('https://64edba671f8721827141a748.mockapi.io/favorites', object);
//
//             // setFavorites(prev => [...prev, data]);
//         }
//     } catch (error) {
//         alert('Не вдалось добавити в фаворити')
//     }
//
// }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setSearchValue("");
    };

    //метод добавления карточки товара
    const onAddToCart = (object) => {
        if (cartItems.find((item)=> Number(item.id) === Number(object.id))) {
            axios.delete(`https://64edba671f8721827141a748.mockapi.io/cart/${object.id}`);
            setCartItems((prev) => prev.filter((item) =>  Number(item.id) !== Number(object.id)));
        } else {
            axios.post('https://64edba671f8721827141a748.mockapi.io/cart', object);
            setCartItems(prev => [...prev, object]);
        }
    };


  return (
      <div className='wrapper'>

          {cartOpened ? <Drawer onRemove={onRemoveItem } items = {cartItems} onClose={()=> setCartOpened(false)}/> : null }
        <Header onClickCart={()=> setCartOpened(true)}/>

          <Routes>
              <Route path="/" element={<Home items={items}
                                             cartItems={cartItems}
                                             searchValue={searchValue}
                                             setSearchValue={setSearchValue}
                                             onChangeSearchInput={onChangeSearchInput}
                                             // onAddFavorites={onAddFavorites}
                                             onAddToCart={onAddToCart}
                                             handleSubmit={handleSubmit}
              />} />
              {/*<Route path="/favorites" element={<Favorites items={favorites}*/}
              {/*                                             onAddFavorites={onAddFavorites}/>} />*/}

          </Routes>
  </div>
  )
}

export default App;
