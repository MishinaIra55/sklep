import Card from "../components/Card";

import axios from "axios";
import AppContext from "../context";
import {useContext, useEffect, useState} from "react";




function Orders() {
    const { onAddFavorites, onAddToCart } = useContext(AppContext);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://64edba671f8721827141a748.mockapi.io/orders');
                setOrders(data);
                setIsLoading(false);
            } catch (error) {
                alert('Ошибка при запросе заказов');
                console.error(error);
            }
        })();
    }, []);

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мои заказы</h1>
            </div>

            <div className="d-flex flex-wrap">
                {isLoading
                    ? [...Array(8)].map((_, index) => <Card key={index} />)
                    : orders.map((item) => (
                        <Card
                            key={item.id}
                            title={item.name}
                            price={item.price}
                            image={item.imageUrl}
                            id={item.id}
                            liked={true}
                            onPlus={(object) => onAddToCart(object)}
                            onFavorite={(object) => onAddFavorites(object)}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Orders;
