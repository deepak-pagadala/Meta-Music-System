import React, { useState } from 'react';
import Drawer from '../components/Drawer';

const Playlists = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  };

  return (
    <div className="flex">
      <div className="w-64 bg-base-200">
        <Drawer />
      </div>
      <div className="flex-1 p-8">
        <div className='mb-5'>
        <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold text-primary">Create Play List</h1>
          
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Add a new song"
            value={newTodo}
            onChange={handleInputChange}
            className="input input-bordered w-full"
          />
          <button onClick={handleAddTodo} className="btn btn-primary mt-2">
            Add To Playlist 
          </button>
        </div>
        <ul className="list-disc pl-4">
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Playlists;
