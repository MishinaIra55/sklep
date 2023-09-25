import Card from "../components/Card";
import {useEffect, useState} from "react";
import axios from "axios";




function Orders ()  {


    // useEffect(() => {
    //     (async () => {
    //         const { data } = await axios.get('/orders');
    //     })();
    // }, []);

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
