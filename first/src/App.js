import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./Components/Day2/componentinteraction/Search";
import Students from "./Components/Day2/componentinteraction/Students";
import StudentsList from "./Components/Day2/componentinteraction/students.json"
import Task1 from "./Components/Task1";
import Task2 from "./Components/Task2";
import Users from "./Components/Day2/Routing/Users";
import About from "./Components/Day2/Routing/About";
import Home from "./Components/Day2/Routing/Home";
import Error from "./Components/Day2/Routing/Error";
import Header from "./Components/Day2/Routing/Header";
import StudentDetails from "./Components/Day2/Routing/StudentDetails";
// let App= ()=>{
//     return(
//         <div>
//             {/* <Task1/>
//             <br></br>
//             <Task2/> */}
        
//         <Search onKeyChange>
//             </Search>
//             <Students></Students>
//         </div>
//     )
// }
class App extends Component{
    constructor(){
        super();
        this.state={
           AllStudents:StudentsList.students
        }
    }
   
    render(){
        return(
            <div>
                {/* <Search /> */}
                <BrowserRouter>
                <Header/>
                <Routes>
                <Route path="" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="students/:id" element={<StudentDetails />} />
                 <Route path="about" element={<About />} />
                 <Route path="error" element={<Error />} />
                 <Route path="*" element={<Error />} />
                </Routes>
                </BrowserRouter>
                {/* <Students studentslist={this.state.AllStudents}/> */}
           </div>
        )
    }
}
export default App;