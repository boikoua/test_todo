import React from 'react';

type Props = {
  value: string;
  setValue: (value: string) => void;
  addTodo: (e: React.ChangeEvent<HTMLFormElement>) => void;
};

const TodoForm: React.FC<Props> = ({ value, setValue, addTodo }) => {
  return (
    <form onSubmit={addTodo} className="flex gap-4 justify-center mb-4">
      <input
        autoFocus
        type="text"
        placeholder="Enter new todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full px-4 py-2 text-xl text-gray-900 bg-gray-200 border border-gray-400 rounded-md shadow-sm outline-none transition-all duration-300 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 text-xl font-semibold rounded-md shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95"
      >
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
