import Header from "./Header";
import Content from './Content';
import { useState } from 'react';
import AddTask from "./AddTask";
import Footer from './Footer';
import Search from "./Search";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('myTasks')));
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const SetItems = (Tasks) => {
    localStorage.setItem('myTasks', JSON.stringify(Tasks));
    setTasks(Tasks);
  }

  const handleCheck = (id) => {
    const newTasks = tasks.map(task => task.id === id ? { ...task, checked: !task.checked } : task)
    SetItems(newTasks);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newtask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      name: newItem,
      checked: false
    }
    const newTasks = [...tasks, newtask];
    setNewItem('');
    SetItems(newTasks);
  }

  const handleDelete = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    SetItems(newTasks);
  }
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <Header />
      <AddTask
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Search
        search={search}
        setSearch={setSearch}
      />
      <Content
        tasks={tasks.filter(task => (task.name).toLowerCase().includes(search))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer
        length={tasks.length}
      />
    </div>
  );
}

export default App;
