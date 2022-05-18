
import { useParams } from 'react-router-dom';
import students from '../componentinteraction/students.json'


let StudentDetails = () => {
    let {id}=useParams();
    let flag=false;
    let showStudent = () => {
        return students.students.map((student) => {
            if (Number(student.id) === Number(id)) {
                flag=true;
                return (
                    <div className="studentItem">
                        <h3>ID: {student.id}</h3>
                        <h3>Name: {student.name}</h3>
                        <h3>Age: {student.age}</h3>
                        <h3>Email: {student.email}</h3>
                    </div>
                   
                )
            }
            if (Number(student.id) === students.students.length && !flag) {
                return (<h1 style={{textAlign:"center",backgroundColor:"red"}}>No Student</h1>)
            }
         
        })
    }

    return (
        
        <div className="studentitem">
            <h2 className="header">Student Details</h2>
            {showStudent()}

            
        </div>
    )
}

export default StudentDetails;