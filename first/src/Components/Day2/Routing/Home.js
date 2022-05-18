import Students from "../componentinteraction/Students";
import StudentsList from "../componentinteraction/students.json"
import AddStudent from "../componentinteraction/AddStudent";
import { Component } from "react";

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      AllStudents:StudentsList.students
    }
  }
  
  addStudent = (data) => {

    let newStudent = {
      name: data.name,
      age: data.age,
      email: data.email,
      id: this.state.AllStudents.length +1
    }

    let addNewStudent = this.state.AllStudents;
    addNewStudent.push(newStudent);
    this.setState({ AllStudents: addNewStudent });
  }
  render() {
    return (
      <div>
        <AddStudent onKeyChange={this.addStudent} />
    
        <Students studentslist={this.state.AllStudents}/>
      </div>
    )
  }
}