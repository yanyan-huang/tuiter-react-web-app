import React, {useState}  from "react"; // import useState to work with local state
import {useDispatch, useSelector} from "react-redux"; // import useDispatch to hook all reducers/dispatch actions
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const [todo, setTodo] = useState({do: ''}); // create todo local state variable
    
    const dispatch = useDispatch();

    const toggleTodoDone = (todo) => {
        dispatch(todoDoneToggle(todo))
      }     

    const deleteTodoClickHandler = (index) => {
        dispatch(deleteTodo(index))
       }
       
    const createTodoClickHandler = () => {
      dispatch(addTodo(todo))
    }
   
    const todoChangeHandler = (event) => { // handle keystroke changes in input field
        const doValue = event.target.value; // get data from input field
        const newTodo = { // create new todo object instance
            do: doValue   // setting the todo‘s do property
        };
        setTodo(newTodo); // change local state todovariable
    }

    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <button onClick={createTodoClickHandler}
                            className="btn btn-primary w-25 float-end">
                    Create</button>
                    <input onChange={todoChangeHandler}
                           value={todo.do}
                           className="form-control w-75"/>
                </li>
                
                {todos.map((todo, index) => (
                    <li key={todo._id} className="list-group-item">
                    <button
                        onClick={() => deleteTodoClickHandler(index)}
                        className="btn btn-danger float-end ms-2">
                        Delete
                    </button>
                    <input
                        type="checkbox"
                        checked={todo.done}
                        onChange={() => toggleTodoDone(todo)}
                        className="me-2"
                    />
                    {todo.do}
                    </li>
                ))}
            </ul>
        </>
    );
};
export default Todos;
