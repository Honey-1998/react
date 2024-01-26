import React from "react";
import Movies from "./Components/Movies";
import CartQty from "./Components/CartQty";
import TaskList from "./Components/TaskList";
import TicToe from "./Components/TicToe";
import { createStore } from 'redux';
import SortUser from "./Components/SortUser";
import Covid19 from "./Components/Covid";
import PhoneBook from "./Components/PhoneBook";
import TextEditor from "./Components/TextEditor";
import Count from "./Components/Count";
// import RouteNav from "./Components/RouteNav";
const App = () =>{

    return(
        <div>
            {/* <Movies/> */}
            {/* <CartQty/> */}
            {/* <TaskList/> */}
            {/* <TicToe/> */}
            {/* <SortUser/> */}
            <Covid19/>
            {/* <PhoneBook/> */}
            {/* <TextEditor/> */}
            {/* <RouteNav/> */}
            {/* <Count/> */}
        
        </div>
    )
}

export default App;

