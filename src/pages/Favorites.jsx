


function Favorites ()  {
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
                Favorites

            </div>

        </div>
    )
}

export default Favorites;