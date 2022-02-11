import React from 'react';
import { useState } from 'react'
import  Form from './Form'
import Studentportal from './Studentportal'

function Mainpage() {
    //  all useState
    const [studentsName, setStudentsName] = useState("");
    const [students, setStudents] = useState([]);
    const [editAble,setEditable]=useState(false);
    const [editableName,setEditableName]=useState(null);
    
    return (
        <div className="mainpage">
            <div>
                <Form
                studentsName={studentsName}
                setStudentsName={setStudentsName}
                editAble={editAble}
                setEditable={setEditable}
                students={students}
                setStudents={setStudents}
                editableName={editableName}
                setEditableName={setEditableName}


                />
            </div>
            <div >
            <Studentportal
             students={students}
             setStudents={setStudents}
             setEditable={setEditable}
             setEditableName={setEditableName}

            />
                
            </div>
           


        </div>
    )



}

export default Mainpage;
