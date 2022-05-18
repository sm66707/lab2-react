import { NavLink } from "react-router-dom";
let Students=({studentslist})=>{
    let renderStudents=()=>{
        return studentslist.map((student)=>{
            return(
                <div className="studentitem">
                    <h4>{student.name}</h4>
                    <h4>{student.email}</h4>
                    <NavLink to={`students/${student.id}`}>View</NavLink>
                </div>
            )
        })
    }
    return(
        <div>
            <h2 className="header">All Students</h2>
            {renderStudents()}
        </div>
    )
}
export default Students;