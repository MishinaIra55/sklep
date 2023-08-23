
import './index.scss';

function App() {
  return<div className='wrapper'>
    <header>
      <div className='headerLeft'>
        <svg/>
        <div className='headerInfo'>
          <h3>REACT SNEAKERS</h3>
          <p> Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className='headerRight'>
        <li>
          <svg/>
          <span> 2000грн</span>
        </li>
        <li>
          <svg/>
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
