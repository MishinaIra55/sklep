import Card from "../components/Card";


function Home ({items,searchValue,setSearchValue,onChangeSearchInput,onAddFavorites,onAddToCart,handleSubmit})  {


    return (
        <div className='content'>
            <div className='contentBlock'>
                <h1 className='contentTitle'>Всі кроссівки</h1>
                <form onSubmit={handleSubmit}>
                    <div className='search'>
                        <img src='/images/search.svg' alt='search'/>
                        <input value={searchValue} onChange={onChangeSearchInput} placeholder='Search...'
                               onSubmit={handleSubmit}
                        />

                    </div>
                </form>
            </div>

            <div className='sneakers'>
                {items
                    .filter((item) => item.name.toLowerCase().includes(searchValue))
                    .map((item,index)=> (
                        <Card
                            key={index}
                            title={item.name}
                            price={item.price}
                            image={item.imageUrl}
                            onFavorite={(object)=> onAddFavorites(object)}

                            onPlus={(object)=> onAddToCart(object)}
                        />
                    ))
                }

            </div>

        </div>
    )
}

export default Home;