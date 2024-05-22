import { FaPlus } from 'react-icons/fa';

const AddTask = ({ newItem, setNewItem, handleSubmit }) => {
    return (
        <form className="addForm flex justify-center items-center bg-gray-500 text-white m-2 p-3 w-1/2 min-w-96 rounded" onSubmit={(e) => { handleSubmit(e) }}>
            <input
                type="text"
                autoFocus
                id='address'
                placeholder="Add Task"
                required
                value={newItem}
                onChange={(e) => { setNewItem(e.target.value) }}
                className='bg-gray-500 text-white border-b-2 border-white outline-none placeholder-white mx-2 p-1 w-full'
            />
            <button
                type='submit'
                aria-label='Add Item'
                className='bg-gray-500 text-white p-2 hover:text-rose-600'
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddTask;
