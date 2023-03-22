// import logo from './logo.svg';
// do we still need the above imports??
import './App.css';

import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Assignment7 from "./labs/a7";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index element={<Labs/>}/>
                    <Route path="/*" element={<Labs/>}/>
                    <Route path="/hello" element={<HelloWorld/>}/>
                    <Route path="/tuiter/*" element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

// function App() {
//   return (
//       <div className="container">
//         {/*<h1>Hello World!</h1>*/}
//         <HelloWorld/>
//         <Labs/>
//         <Tuiter/>
//       </div>
//   );
// }
export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
