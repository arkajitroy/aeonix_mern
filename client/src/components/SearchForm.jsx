import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchForm = () => {
    const [query, setQuery] = useState("");
    const [validationError, setValidationError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();

        // form validation check and set error message
        if (query.length === 0) {
            setValidationError("Search query is required!");
        }

        // if validation is ok, then add new todo
        if (query) {
            setValidationError("");

            // add new todo to the list
            setIsLoading(true)
            axios.post(process.env.REACT_APP_API_BASE_URL + "/api/v1/search", {
                query
            }).then(response => {
                setIsLoading(false)
                if (response && response.data) {
                    console.log(response);
                    setTodos(response.data)
                }
            }).catch(error => {
                console.log(error);
            })

        }
    };

    const handleDeleteTodo = (id) => () => {
        axios.delete(process.env.REACT_APP_API_BASE_URL + "/api/v1/todo/" + id).then(response => {
            if (response && response.data) {
                handleSubmit({ preventDefault: () => { } })
            }
        }).catch(err => {
            console.log('error', err);
            alert('failed to delete!')
        })
    }

    return (
        <div className="bg-violet-50 w-[90%] md:w-[80%] lg:w-[50%] p-5 rounded-sm shadow-md">
            {/* Form Validation Message */}
            {validationError && (
                <div className="w-full h-[40px] bg-red-500 text-center py-2 rounded-sm">
                    <p className="text-white text-md">{validationError}</p>
                </div>
            )}

            {/* Form Success Message */}
            {successMessage && (
                <div className="w-full h-[40px] bg-green-500 text-center py-2 rounded-sm">
                    <p className="text-white text-md">{successMessage}</p>
                </div>
            )}

            <form
                className="flex flex-col items-center justify-center"
                onSubmit={(e) => {
                    handleSubmit(e);
                }}>
                {/* TODOS TITLE INPUT FIELD */}
                <input type="text" className="w-full border-0 border-gray-500 px-5 py-2 rounded-sm my-2" placeholder="Search todo..." value={query} onChange={(e) => setQuery(e.target.value)} />

                {/* SEARCH BUTTON */}
                <button type="submit" className="bg-indigo-600 text-white rounded-md shadow-md w-full my-2 py-2 transition-all duration-400 hover:bg-indigo-800">
                    {isLoading ? "Loading..." : "Search"}
                </button>
            </form>

            <div className="flex flex-col items-center justify-center w-[90%] md:w-[80%] lg:w-[50%] my-5">
                {/* Updated Todos List */}
                {todos.length === 0 ? (
                    null
                ) : (
                    todos.todos.map((todo, index) => (
                      <div key={index} className="bg-gray-100 w-full rounded-sm shadow-md p-5 my-2 transition-all duration-100 hover:shadow-lg">
                        <h2 className="text-black text-2xl font-bold my-2">
                          {/* <span className="text-blue-500 font-bold">Title: </span> */}
                          <span className={todo.completed ? "line-through decoration-green-500" : "none"}>{todo.title}</span>
                        </h2>
            
                        <p className="text-black text-lg font-normal text-justify my-2">
                          {/* <span className="text-blue-500 font-bold">Description: </span> */}
                          {todo.description}
                        </p>
            
                        <div className="flex flex-row items-center justify-center mt-2">
                          <Link to={`edit-todo/?id=${todo._id}`} className="bg-teal-600 text-white text-center rounded-sm shadow-md w-full my-2 py-2 mr-2 transition-all duration-400 hover:bg-teal-800">
                            Edit
                          </Link>
            
                          <button className="bg-red-500 text-white rounded-sm shadow-md w-full my-2 py-2 ml-2 transition-all duration-400 hover:bg-red-600" onClick={() => handleDeleteTodo(todo._id)}>
                            Delete
                          </button>
                        </div>
                      </div>
                    ))
                  )}
            </div>
        </div>
    );
};

export default SearchForm;
