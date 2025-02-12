import React from 'react';
import cn from 'classnames';
import { ITodo } from '@/types/ITodo';
import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';

type Props = {
  todo: ITodo;
  deleteTodo: (id: string) => void;
  toggleCompleted: (id: string) => void;
};

const TodoItem: React.FC<Props> = ({ todo, deleteTodo, toggleCompleted }) => {
  const { id, title, completed } = todo;

  return (
    <article
      className={cn(
        'flex justify-between items-center px-4 py-2 rounded-md transition-all duration-300',
        {
          'bg-gray-200 text-gray-900 shadow-sm hover:bg-gray-300 hover:shadow-md':
            !completed,
          'bg-green-200 text-gray-500 line-through': completed,
        }
      )}
    >
      <div className="flex gap-3 items-center">
        <RiTodoFill className="w-6 h-6 flex-shrink-0" />
        <span className="text-lg">{title}</span>
      </div>

      <div className="flex gap-3 items-center">
        <RiDeleteBin2Line
          className="w-6 h-6 flex-shrink-0 cursor-pointer hover:text-red-500 hover:scale-110 transition-all duration-300"
          onClick={() => deleteTodo(id)}
        />

        <FaCheck
          className="w-6 h-6 flex-shrink-0 cursor-pointer hover:text-green-500 hover:scale-110 transition-all duration-300"
          onClick={() => toggleCompleted(id)}
        />
      </div>
    </article>
  );
};

export default TodoItem;
