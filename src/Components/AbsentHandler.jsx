import React from 'react'

function AbsentHandler(props) {
    
  return (
    <div>
        <h3>Absent</h3>
                    <div >
                        {props.students.filter(item => item.isPresent===false).map((student)=>(
                            <div className="finalshow">
                                <span>{student.name}</span><br/>
                                <button className="togglebtn" onClick={()=>props.toggleHandler(student.id)}>Present</button>
                            </div>
                        ))}
                    </div>
    </div>
  )
}

export default AbsentHandler