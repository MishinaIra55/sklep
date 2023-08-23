
import './index.scss';

function App() {
  return<div className='wrapper'>
    <header>
      <div className='headerLeft'>
        <img src='/images/logo.svg' alt='#' width='40' height='40'/>
        <div className='headerInfo'>
          <h3>REACT SNEAKERS</h3>
          <p> Магазин найкращих кросівок</p>
        </div>
      </div>

      <ul className='headerRight'>
        <li className='headerList'>
          <img src='/images/cart.svg'  alt='#' width='18' height='18'/>
          <span> 2000грн</span>
        </li>
        <li>
          <img src='/images/user.svg'  alt='#' width='18' height='18'/>
        </li>
      </ul>
    </header>
    <div className='content'>
      <h1>Всі кроссівки</h1>

     <div className='card'>
       <img src='/images/sneakers/1.jpg' width='133' height='112'alt=''/>
       <p>Чоловічі кросівки Nike Blazer Mid Suede</p>
       <div>
         <div>
           <span>Ціна:</span>
           <b>2000грн</b>
         </div>
         <button>
           <img src='/images/plus1.svg'  alt='#' width='11' height='11'/>
         </button>
       </div>
    </div>
    </div>
  </div>
}

export default App;
