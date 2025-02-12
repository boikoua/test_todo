'use client';

import React, { useEffect, useState } from 'react';
import { v4 as uniqueID } from 'uuid';
import axios from 'axios';
import TodoActions from '@/components/TodoActions';
import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';
import { ITodo } from '@/types/ITodo';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export default function Home() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const { data } = await axios.get<ITodo[]>(`${API_URL}?_limit=10`);

        const todosWithUniqueIds = data.map((todo) => ({
          ...todo,
          id: uniqueID(),
        }));

        setTodos(todosWithUniqueIds);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const addTodoHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const newTodoItem: ITodo = {
      id: uniqueID(),
      title: newTodo,
      completed: false,
    };

    setTodos((prevTodos) => [newTodoItem, ...prevTodos]);
    setNewTodo('');
  };

  const toggleCompletedHandler = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const clearAllTodos = () => {
    setTodos([]);
  };

  const clearOnlyCompleteTodos = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const completedTodosLength = todos.filter((todo) => todo.completed).length;

  return (
    <main>
      <TodoForm
        value={newTodo}
        setValue={setNewTodo}
        addTodo={addTodoHandler}
      />

      <TodoActions
        clearTodos={clearAllTodos}
        clearComplete={clearOnlyCompleteTodos}
      />

      {isError && !isLoading && (
        <h2 className="text-red-500 text-3xl font-bold text-center animate-pulse">
          ❌ Something went wrong, reload the page please!
        </h2>
      )}

      {!isError && isLoading && (
        <h2 className="text-blue-400 text-3xl font-bold text-center animate-bounce">
          ⏳ Data loading in progress...
        </h2>
      )}

      {!isError && !isLoading && todos.length > 0 && (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodoHandler}
          toggleCompleted={toggleCompletedHandler}
        />
      )}

      {!isError && !isLoading && !todos.length && (
        <h2 className="text-slate-100 text-4xl font-bold text-center">
          Todo list is empty
        </h2>
      )}

      {completedTodosLength ? (
        <h2 className="text-slate-100 text-2xl font-bold text-center">
          You have completed {completedTodosLength}{' '}
          {completedTodosLength === 1 ? 'todo' : 'todos'}!
        </h2>
      ) : (
        ''
      )}
    </main>
  );
}
