
import './index.scss';

function App() {
  return<div className='wrapper'>
    <header>
      <div className='headerLeft'>
        <img src='/images/logo.svg' alt='#' width='40' height='40'/>
        <div className='headerInfo'>
          <h3>REACT SNEAKERS</h3>
          <h1> Магазин лучших кроссовок</h1>
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
      <h1>Все кроссовки</h1>
      ....
    </div>
  </div>
}

export default App;
