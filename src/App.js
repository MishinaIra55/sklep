
import './index.scss';

import Header from "./components/Header";
import Drawer from "./components/Drawer";

import { useEffect, useState} from "react";
import AppContext from "./context";


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
    const [isLoading, setIsLoading] = useState(true);// для загрузки скелетона


    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const cartResponse = await axios.get('https://64edba671f8721827141a748.mockapi.io/cart');
            const itemsResponse = await axios.get('https://64edba671f8721827141a748.mockapi.io/items');
             // const favoriteResponse = await axios.get('https://64edba671f8721827141a748.mockapi.io/favorites');



            setIsLoading(false);
            setCartItems(cartResponse.data);
            setItems(itemsResponse.data);
           // setFavorites(favoriteResponse.data);
         }
        fetchData();
        },[]);



    //метод удаления карточки товара
    const onRemoveItem = (id) => {

        axios.delete(`https://64edba671f8721827141a748.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));


    };

//     const onAddFavorites = async (object) => {
//     try {
//         if (favorites.find((objectFav) => objectFav.id === object.id)) {
//              axios.delete(`https://64edba671f8721827141a748.mockapi.io/favorites/${object.id}`);
//         } else {
//             const {data} = await axios.post('https://64edba671f8721827141a748.mockapi.io/favorites', object);
//
//             setFavorites(prev => [...prev, data]);
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

    const isItemsAdded = (id) => {
        // console.log("Checking if item is added with id:", id);

        const isAdded = cartItems.some((object) => Number(object.id) === Number(id));
        // console.log("cartItems:", cartItems);
        // console.log("Item with id is added:", isAdded);

        return isAdded;
    };



    return (
      <AppContext.Provider value={{ items, cartItems, isItemsAdded, setCartOpened, setCartItems}}>
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
                                                 isLoading={isLoading}
                  />} />
                  {/*<Route path="/favorites" element={<Favorites*/}
                  {/*                                             onAddFavorites={onAddFavorites}/>} />*/}

              </Routes>
          </div>
      </AppContext.Provider>
  )
}

export default App;
