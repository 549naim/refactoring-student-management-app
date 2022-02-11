import React from 'react'
import AllstudentList from './AllstudentList'
import PresentHandler from './PresentHandler'
import AbsentHandler from './AbsentHandler'

function Studentportal(props) {

  // toggle handler
  const toggleHandler = (studentid) => {
    const student = props.students.find((item) => item.id === studentid);
    student.isPresent = !student.isPresent
    props.setStudents([...props.students])
  }
  return (
    <div className="portal">
      <div className="nameportal">
        <AllstudentList
          students={props.students}
          setStudents={props.setStudents}
          setEditable={props.setEditable}
          setEditableName={props.setEditableName}

        />
      </div>
      <div className="present">
        <PresentHandler
          students={props.students}
          toggleHandler={toggleHandler}
        />

      </div>
      <div className="absent">
        <AbsentHandler
          students={props.students}
          toggleHandler={toggleHandler}
        />
      </div>
    </div>
  )
}

export default Studentportal