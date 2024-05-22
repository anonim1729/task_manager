import { FaTrashAlt } from 'react-icons/fa';

const Item = ({ task, handleDelete, handleCheck }) => {
    return (
        <li className="flex justify-between bg-slate-600 text-white m-1 p-3 w-1/2 min-w-96 text-xl">
            <div className='flex'>
                <input
                    type="checkbox"
                    className='w-4'
                    onChange={() => { handleCheck(task.id) }}
                    checked={task.checked}
                />
                <p className={`mx-2 ${task.checked ? 'line-through' : ''}`}>{task.name}</p>
            </div>
            <FaTrashAlt className='hover:text-rose-600'
                onClick={(e) => { handleDelete(task.id) }}
            />
        </li>
    )
}
export default Item