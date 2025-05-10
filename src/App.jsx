import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, clearTodos } from "./store/features/TodosSlice";

const formSchema = z.object({
  todo: z.string().min(5, "Мінімум 5 символів"),
});

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const handleAdd = (data) => {
    dispatch(
      addTodo({
        id: Date.now(),
        text: data.todo,
        completed: false,
      })
    );
    reset(); // очищення форми після додавання
  };

  const handleClear = () => {
    dispatch(clearTodos());
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-black">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4 text-black">ToDo List</h1>
        <form onSubmit={handleSubmit(handleAdd)} className="flex mb-4">
          <div className="flex flex-col w-full">
            <div className="flex">
              <input
                type="text"
                {...register("todo")}
                className="flex-1 border border-gray-300 px-3 py-2 rounded-l"
                placeholder="Введи завдання..."
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
              >
                Додати
              </button>
            </div>
            {errors.todo && (
              <p className="text-red-500 self-baseline mt-1">
                {errors.todo.message}
              </p>
            )}
          </div>
        </form>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded"
            >
              <span
                className={`flex-1 cursor-pointer ${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {todo.text}
              </span>
            </li>
          ))}
        </ul>
        <button onClick={handleClear}> Clear ALL</button>
        <span>Усього: {todos.length} завдань</span>
      </div>
    </div>
  );
}

export default App;
