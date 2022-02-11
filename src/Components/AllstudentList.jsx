import React from 'react'

function AllstudentList(props) {

     // delete student name button function
     const deleteHandler = (studentid) => {
        const newStudentlist=props.students.filter((student) =>(
            student.id !== studentid)
        )
        props.setStudents(newStudentlist);
    }

    //  Edit handler for edit button

    const editHandler=(studentid)=>{       
        props.setEditable(true);
        const neweditableStudent=props.students.find((item)=>item.id === studentid);
        props.setEditableName(neweditableStudent);
        props.setStudentsName(neweditableStudent.name);
    }

    // Present hadnder for present student
  const presentHandler = (studentid) => {
    const student=props.students.find((item)=>item.id===studentid);
    if(student.isPresent===undefined){
        student.isPresent=true;
        
    }
    else if(student.isPresent===true){
       alert("the student is already  present list")
    }
    else{
        alert("the studentis alrady absent list")
    }
    props.setStudents([...props.students])
}
   

     

    // absent handler for absent student
    const absentHandler = (studentid) => {
        const student=props.students.find((item)=>item.id===studentid);
        if(student.isPresent===undefined){
            student.isPresent=false;
            
        }
        else if(student.isPresent===false){
           alert("the student is already  absent list")
        }
        else{
            alert("the studentis alrady present list")
        }
        props.setStudents([...props.students])
    }
  return (
    <div>
         <div>
                    <h3>Student Name</h3>

                    
                        {props.students.map(student => (
                            <div className="studentsname">
                                <span>{student.name}</span>
                                <div className="allbtn">
                                <button className="editbtn" onClick={()=>editHandler(student.id)}>Edit</button>
                                <button className="dltbtn" onClick={()=>deleteHandler(student.id)}>Delete</button>
                                <button className="presentbtn" onClick={()=>presentHandler(student.id)}>Present</button>
                                <button className="absentbtn"onClick={()=>absentHandler(student.id)}>Absent</button>
                                </div>
                                
                            </div>


                        ))}
                    
                </div>
    </div>
  )
}

export default AllstudentList