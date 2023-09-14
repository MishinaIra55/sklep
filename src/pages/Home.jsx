import Card from "../components/Card";


function Home({
                  items,
                  searchValue,
                  onChangeSearchInput,
                  onAddFavorites,
                  onAddToCart,
                  handleSubmit,
                  cartItems,
                  isLoading
              }) {

    const renderItems = () => {

        const filteredItems = items.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        return (
            isLoading ? (
                [...Array(9)].map((_, index) => (
                    <Card
                        key={index}
                        loading={isLoading} // Set loading prop to true
                    />
                ))
            ) : (
                filteredItems.map((item, index) => (
                    <Card
                        key={index}
                        title={item.name}
                        price={item.price}
                        image={item.imageUrl}
                        id={item.id}
                        // onFavorite={(object) => onAddFavorites(object)}
                        onPlus={(object) => onAddToCart(object)}
                        added={cartItems.some((object) => Number(object.id) === Number(item.id))}
                    />
                ))
            )
        );

    };

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
                {renderItems()}

            </div>

        </div>
    )
}

export default Home;