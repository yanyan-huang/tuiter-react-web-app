// import {Link} from "react-router-dom";
// import Nav from "../../nav";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
// import TodoItemtodo from "./todo/todo-item.js";
import TodoList from "./todo/todo-list";

function Assignment6() {
    return(
        <div>
            {/*<Link to="/">Lab</Link> |*/}
            {/*<Link to="/hello">Hello</Link> |*/}
            {/*<Link to="/tuiter">Tuiter</Link>*/}
            {/*<Nav/>*/}
            <h1>Assignment 6</h1>
            {/*<TodoItemtodo/>*/}
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>
    )
}
export default Assignment6;


// function Assignment6() {
//     return (
//         <div>
//             <h1>Assignment 6</h1>
//         </div>
//     );
// }
// export default Assignment6;
