// import Card from "../components/Card";
//
// import '../index.scss';
// import {useContext} from "react";
// import AppContext from "../context";
//
//
// function Favorites ({ onAddFavorites})  {
//     const {favorites} = useContext(AppContext);
//
//
//     return (
//         <div className='content'>
//             <div className='contentBlock'>
//                 <h1 className='contentTitle'>Улюблені товари</h1>
//             </div>
//
//             <div className='sneakers'>
//                 {favorites.map((item,index)=> (
//                         <Card
//                             key={index}
//                             title={item.title}
//                             price={item.price}
//                             image={item.image}
//                             id={item.id}
//                             liked={true}
//                             onFavorite={onAddFavorites}
//                         />
//                     ))
//                 }
//
//             </div>
//
//         </div>
//     )
// }
//
// export default Favorites;