import Item from './Item';

const ListItems = ({ tasks, handleCheck, handleDelete }) => {
    return (
        <ul className="flex flex-col justify-start items-center w-screen">
            {
                tasks.map(task => (
                    <Item
                        task={task}
                        key={task.id}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                ))
            }
        </ul>
    )
}
export default ListItems