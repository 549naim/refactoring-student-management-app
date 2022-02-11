import React from 'react'

function form(props) {
    // add student button function
    const addStudent = (event, name) => {
        event.preventDefault();
        if (name) {
            const newStudent = {
                id: Date.now(),
                name,
            }
            props.setStudents([newStudent, ...props.students]);
            props.setStudentsName("")

        }
        else {
            alert("Please Enter a valid student name")
        }
    }

    // update the eiditable name with update handler

    const updateHandler=(event,name) => {
        event.preventDefault();
        if(!name){
           alert('Please enter a valid name')
        }
        else{
            props.editableName.name = name || props.editableName.name;
            props.setStudentsName("");
            props.setEditable(false);
            props.setEditableName(null);
        }
    }
  return (
    <div>
        <form action="text-form">
                <input value={props.studentsName} onChange={(e) => props.setStudentsName(e.target.value)} type="text" name="student-name" placeholder="Enter Students Name"/>
                {/* <button onClick={(e) => addStudent(e, studentsName)}>Add Student</button> */}
                <button onClick={(e) => props.editAble ? updateHandler(e, props.studentsName) :addStudent(e, props.studentsName)}>{props.editAble? "Update":"Add Student"}</button>
            </form>
    </div>
  )
}

export default form