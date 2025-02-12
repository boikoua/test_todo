import React from 'react';
import TodoItem from './TodoItem';
import { ITodo } from '@/types/ITodo';

type Props = {
  todos: ITodo[];
  deleteTodo: (id: string) => void;
  toggleCompleted: (id: string) => void;
};

const TodoList: React.FC<Props> = ({ todos, deleteTodo, toggleCompleted }) => {
  const showTodos = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      deleteTodo={deleteTodo}
      toggleCompleted={toggleCompleted}
    />
  ));

  return <section className="flex flex-col gap-4 mb-4">{showTodos}</section>;
};

export default TodoList;
