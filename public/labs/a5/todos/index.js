// alert('Hello World!');

// $('#wd-todo').append(`
//    <div class="container">
//        <h1>Todo example</h1>
//    </div>
// `);

import TodoList from "./TodoList.js";

$('#wd-todo').append(`
   <div class="container">
       <h1>Todo example</h1>
       ${TodoList()}  <!--       TodoList function to render the list of todos-->
   </div>
`);
