let Students=({studentslist})=>{
    let renderStudents=()=>{
        return studentslist.map((student)=>{
            return(
                <div className="studentitem">
                    <h3>{student.name}</h3>
                    <h3>{student.email}</h3>
                </div>
            )
        })
    }
    return(
        <div>
            <h2 className="header">Filtered Students</h2>
            {renderStudents()}
        </div>
    )
}
export default Students;