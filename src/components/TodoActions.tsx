import { RiDeleteBin6Fill } from 'react-icons/ri';
import { LuRefreshCcw } from 'react-icons/lu';

type Props = {
  clearTodos: () => void;
  clearComplete: () => void;
};

const TodoActions: React.FC<Props> = ({ clearTodos, clearComplete }) => {
  return (
    <section className="flex justify-center items-center gap-8 mb-8">
      <button
        onClick={clearTodos}
        title="Clear all todos"
        className="p-2 rounded-md bg-gray-200 transition-all duration-300 hover:text-blue-500 hover:scale-110"
      >
        <LuRefreshCcw className="w-8 h-8" />
      </button>

      <button
        onClick={clearComplete}
        title="Clear only completed todos"
        className="p-2 rounded-md bg-gray-200 transition-all duration-300 hover:text-red-500 hover:scale-110"
      >
        <RiDeleteBin6Fill className="w-8 h-8" />
      </button>
    </section>
  );
};

export default TodoActions;
