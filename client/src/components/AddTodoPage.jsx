import { Link } from "react-router-dom";
import AddNewTodoForm from "./AddNewTodoForm";
import TodosList from "./TodosList";

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        {/* APP HEADING / TITLE */}
        <h1 className="my-5 text-3xl font-bold text-black">Todo Application</h1>
        <div className="d-flex justify-end">
          <Link to='/add'>
            <button className="p-4 bg-black text-white rounded-3xl shadow-md my-4 py-2 transition-all duration-100 hover:bg-blue-600">
              Search Todo
            </button>
          </Link>
        </div>

        {/* ADD NEW TODOS FORM COMPONENT */}
        <AddNewTodoForm />

        {/* TODOS LIST COMPONENTS */}
        <TodosList />
      </div>
    </div>
  );
};

export default HomePage;
