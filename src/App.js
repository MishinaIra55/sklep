
import './index.scss';

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";

const array = [
    {name:"Чоловічі кросівки Nike Blazer Mid Suede",price:'2000', imageUrl:'/images/sneakers/1.jpg'},
    {name:"Чоловічі кросівки Nike Air Max 270",price:'3000', imageUrl:'/images/sneakers/2.jpg'},
    {name:"Чоловічі кросівки  Nike Blazer Mid Suede",price:'5000', imageUrl:'/images/sneakers/3.jpg'},
    {name:"Чоловічі кросівки Puma X Aka Boku Future Rider ",price:'1500', imageUrl:'/images/sneakers/4.jpg'},
]
function App() {
  return (
      <div className='wrapper'>

        <Drawer/>
        <Header/>
    <div className='content'>
     <div className='contentBlock'>
       <h1 className='contentTitle'>Всі кроссівки</h1>
       <div className='search'>
         <img src='/images/search.svg' alt='search'/>
         <input placeholder='Search...'/>
       </div>
     </div>

     <div className='sneakers'>
         {array.map((item)=> (
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
