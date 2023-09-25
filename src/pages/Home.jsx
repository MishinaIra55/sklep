import Card from "../components/Card";


function Home({
                  items,
                  searchValue,
                  onChangeSearchInput,
                  onAddFavorites,
                  onAddToCart,
                  handleSubmit,
                  isLoading
              }) {

    const renderItems = () => {
        const filteredItems = items.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
        );

        if (isLoading) {
            return [...Array(9)].map((_, index) => (
                <Card
                    key={index}
                    loading={isLoading} // Set loading prop to true
                />
            ));
        }

        return filteredItems.map((item, index) => (
            // console.log('item',item),
            <Card
                key={index}
                title={item.name}
                price={item.price}
                image={item.imageUrl}
                id={item.id}
                onPlus={(object) => onAddToCart(object)}
                onFavorite={(object) => onAddFavorites(object)}
            />
        ));
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