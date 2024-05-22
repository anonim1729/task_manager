import ListItems from './ListItems';

const Content = ({ tasks, handleCheck, handleDelete }) => {
    return (
        <main className="">
            {
                tasks.length ?
                    <ListItems
                        tasks={tasks}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                    : <p className="text-3xl">No Tasks</p>
            }
        </main>
    )
}
export default Content