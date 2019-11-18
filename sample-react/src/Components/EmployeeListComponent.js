import React from 'react';
import PropTypes from 'prop-types';

let employeesObject = [{
        name: "Mohamd",
        gender: "Male",
        age: 20,
        id:1
    },
    {
        name: "Subhash",
        gender: "Male",
        age: 21,
        id:2
    },
    {
        name: "Kumar",
        gender: "Male",
        age: 25,
        id:3
    },
    {
        name: "Santhosh",
        gender: "Male",
        age: 28,
        id:4
    },
    {
        name: "Ravi",
        gender: "Male",
        age: 29,
        id:5
    }
    ];

function handleEmployeeList() {
    return employeesObject.map((item, index) => {
        return (
            <li key={item.id}>
               <div>{item.name}</div>
               <div>{item.gender}</div>
               <div>{item.age}</div>
            </li>
       )
    });
}

function EmployeeListComponent(props) {
  return(
      <div>
          EmployeeListComponent
          <br />
          <ul>
          {handleEmployeeList()}
          </ul>
      </div>
  );
}

export default EmployeeListComponent;