import { Component } from "react";
import students from './Students';

export default class AddStudent extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            age: '',
        }
    }
    
    addStudent = ()=>{
        console.log(students.students);
        students.students.push({
            "id":111,
            "name":"Ahmed",
            "age":20,
            "email":"ahmed@gmail.com"
        });
        this.setState({name:""});

    }
    render() {
        return (
            <div className="newone">
                <h2 className="header">Add Student</h2>
                Name:<input
                    type="text"
                    value={this.state.name}
                    onChange={(e) => {
                        this.setState({ name: e.target.value })
                    }}
                />
                <br /><br />
                Email:<input
                    type="email"
                    value={this.state.email}
                    onChange={(e) => {
                        this.setState({ email: e.target.value })
                    }}
                />
                <br /><br />
                Age:<input
                    type="text"
                    value={this.state.age}
                    onChange={(e) => {
                        this.setState({ age: e.target.value })
                    }}
                />
                <br /><br />
                <button
                className="addbtn"
                value="Add"
                 onClick={(e)=> {
                    this.props.onKeyChange({name:this.state.name,age:this.state.age,email:this.state.email});
                }}
                >Add</button>
            </div>
        )
    }
}