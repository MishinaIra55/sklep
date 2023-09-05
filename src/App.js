
import './index.scss';

import Header from "./components/Header";
import Drawer from "./components/Drawer";

import {useEffect, useState} from "react";

import axios from 'axios';


function App() {
    const [cartOpened, setCartOpened] = useState(false);
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);//хранение товаров в корзине
    const [searchValue, setSearchValue] = useState('');//для поиска кросовок
    const [favorites, setFavorites] = useState([]);//массив закладок


    useEffect(() => {
        axios.get('https://64edba671f8721827141a748.mockapi.io/items')
            .then((response) => {
                setItems(response.data);
            });
        axios.get('https://64edba671f8721827141a748.mockapi.io/cart')
            .then((response) => {
                setCartItems(response.data);
            });
    },[]);



    //метод удаления карточки товара
    const onRemoveItem = (id) => {
        axios.delete(`https://64edba671f8721827141a748.mockapi.io/cart/${id}`);
         setCartItems((prev) => prev.filter((item) => item.id !== id));
    };
    //метод добавления фоварита товара
    const onAddFavorites = (object) => {
        // axios.post('https://64edba671f8721827141a748.mockapi.io/favorites', object);
        setFavorites(prev => [...prev, object]);
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setSearchValue("");
    };
    //метод добавления карточки товара
    const onAddToCart = (object) => {
        axios.post('https://64edba671f8721827141a748.mockapi.io/cart', object);
        setCartItems(prev => [...prev, object]);
    };


  return (
      <div className='wrapper'>

          {cartOpened ? <Drawer onRemove={onRemoveItem } items = {cartItems} onClose={()=> setCartOpened(false)}/> : null }
        <Header onClickCart={()=> setCartOpened(true)}/>


  </div>
  )
}

export default App;
