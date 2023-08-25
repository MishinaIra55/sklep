
import './index.scss';
import Card from './components/Card';
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
      <div className='wrapper'>
  <div  style={{display: 'none'}} className='overlay'>
    <Drawer/>
  </div>
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
       <Card />

     </div>

    </div>

  </div>
  )
}

export default App;
