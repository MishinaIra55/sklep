
import './index.scss';

function App() {
  return (
      <div className='wrapper'>
  <div className='overlay'>
    <div className='drawer'>
    <h2 className='mb-30'>Кошик</h2>

     <div className='items'>
       <div className='cartItem'>
         <div style={{backgroundImage:'url(/images/sneakers/1.jpg)'}} className='cartItemImg'> </div>

         <div className='cartInfo'>
           <p className='cartText'>Мужские Кроссовки Nike Air Max 270</p>
           <b>2000 грн</b>
         </div>
         <img className='btnClose' src='/images/btnclose.svg'  alt='btnclose'/>
       </div>
       <div className='cartItem'>
         <div style={{backgroundImage:'url(/images/sneakers/1.jpg)'}} className='cartItemImg'> </div>

         <div className='cartInfo'>
           <p className='cartText'>Мужские Кроссовки Nike Air Max 270</p>
           <b>2000 грн</b>
         </div>
         <img className='btnClose' src='/images/btnclose.svg'  alt='btnclose'/>
       </div>
     </div>

     <div className='cartTotalInfo'>
       <ul >
         <li >
           <span>Разом:</span>
           <div></div>
           <b> 20000 грн </b>
         </li>
         <li >
           <span>Податок 5%:</span>
           <div></div>
           <b>2000 грн</b>
         </li>
       </ul>
       <button className='greenButton'>Замовити замовлення <img src='/images/arrow.svg' alt='arrow'/></button>
     </div>
    </div>
  </div>
    <header>
      <div className='headerLeft'>
        <img src='/images/logo.svg' alt='#' width={40} height= {40}/>
        <div className='headerInfo'>
          <h3>REACT SNEAKERS</h3>
          <p> Магазин найкращих кросівок</p>
        </div>
      </div>

      <ul className='headerRight'>
        <li className='headerList'>
          <img src='/images/cart.svg'  alt='cart' width={18} height={18}/>
          <span> 2000грн</span>
        </li>
        <li>
          <img src='/images/user.svg'  alt='user' width='18' height='18'/>
        </li>
      </ul>
    </header>
    <div className='content'>
     <div className='contentBlock'>
       <h1 className='contentTitle'>Всі кроссівки</h1>
       <div className='search'>
         <img src='/images/search.svg' alt='search'/>
         <input placeholder='Search...'/>
       </div>
     </div>

     <div className='sneakers'>
       <div className='card'>
         <div className='favorite'>
           <img src='/images/unliked.png'  width='30'  height='30' alt='unliked'/>
         </div>
         <img src='/images/sneakers/1.jpg' width={133}  height={112} alt='sneakers'/>
         <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
         <div className='cardBlock'>
           <div className='cardText'>
             <span>Ціна:</span>
             <b>2000грн</b>
           </div>
           <button className='button'>
             <img src='/images/plus1.svg'  alt='plus1' width='11' height='11'/>
           </button>
         </div>
       </div>
       <div className='card'>
         <img src='/images/sneakers/2.jpg' width={133} height={112} alt='sneakers'/>

         <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
         <div className='cardBlock'>
           <div className='cardText'>
             <span>Ціна:</span>
             <b>2000грн</b>
           </div>
           <button className='button'>
             <img src='/images/plus1.svg'  alt='plus1' width='11' height='11'/>
           </button>
         </div>
       </div>
       <div className='card'>
         <img src='/images/sneakers/3.jpg' width={133} height={112}  alt=''/>
         <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
         <div className='cardBlock'>
           <div className='cardText'>
             <span>Ціна:</span>
             <b>2000грн</b>
           </div>
           <button className='button'>
             <img src='/images/plus1.svg'  alt='button' width='11' height='11'/>
           </button>
         </div>
       </div>
       <div className='card'>
         <img src='/images/sneakers/4.jpg' width={133} height={112}  alt='sneakers'/>
         <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
         <div className='cardBlock'>
           <div className='cardText'>
             <span>Ціна:</span>
             <b>2000грн</b>
           </div>
           <button className='button'>
             <img src='/images/plus1.svg'  alt='button' width='11' height='11'/>
           </button>
         </div>
       </div>
     </div>

    </div>

  </div>
  )
}

export default App;
