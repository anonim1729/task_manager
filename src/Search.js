const Search = ({ search, setSearch }) => {
    return (
        <form className="addForm flex justify-center items-center bg-gray-500 text-white m-2 p-3 w-1/2 min-w-96 rounded" onSubmit={(e) => { e.preventDefault() }}>
            <input
                type="text"
                autoFocus
                id='address'
                placeholder="Search . . ."
                required
                autoComplete='off'
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
                name="search"
                className='bg-gray-500 text-white border-b-2 border-white outline-none placeholder-white mx-2 p-1 w-full'
            />
        </form>
    )
}
export default Search