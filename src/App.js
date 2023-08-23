
import './index.scss';

function App() {
  return<div className='wrapper'>
    <header>
      <div className='headerLeft'>
        <svg/>
        <div className='headerInfo'>
          <h3>React Cookies</h3>
          <p> Магазин вкусняшек</p>
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
  </div>
}

export default App;
