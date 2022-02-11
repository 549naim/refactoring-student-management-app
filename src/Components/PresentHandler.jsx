import React from 'react'

function PresentHandler(props) {
  
  return (
    <div>
        <h3>Present</h3>
                    <div>
                        {props.students.filter(item => item.isPresent===true).map((student)=>(
                            <div className="finalshow">
                                <span>{student.name}</span><br/>
                                <button className="togglebtn1" onClick={()=>props.toggleHandler(student.id)}>Ansent</button>
                            </div>
                        ))}
                    </div>
    </div>
  )
}

export default PresentHandler