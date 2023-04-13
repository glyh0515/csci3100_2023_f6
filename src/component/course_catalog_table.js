import React from 'react';
import { useTable } from 'react-table';

const columns = [
  {
    Header: 'Course ID',
    accessor: 'CourseID',
  },
  {
    Header: 'Course Name',
    accessor: 'CourseName',
  },
  {
    Header: 'Venue',
    accessor: 'Venue',
  },
  {
    Header: 'Time',
    accessor: 'Timeslot',
  },

  {
    Header: 'Department',
    accessor: 'Department',
  },
  {
    Header: 'Instructor',
    accessor: 'Instructor',
  },
  {
    Header: 'Units',
    accessor: 'Units',
  },
  {
    Header: 'Vacancy',
    accessor: 'Vacancy',
  },
  
];

//const data = [
  //{
    //id: 'CSCI3100',
    //name: 'Software Engineering',
    //venue: 'LSK LT1', 
    //time:' Mon 12:30pm-2:30pm', 
    //department: 'Computer Science',
    //instructor: 'Micheal Lyu',
    //units: '3',
    //status: 'open',
    //vacancy: '50',
  //},
  //{
    //id: 'MATH101',
    //name: 'Calculus I',
    //venue: 'YIA LT5',
    //time:' Tue 12:30pm-2:30pm',
    //department: 'Mathematics',
    //instructor: 'Jane Smith',
    //units: '2',
    //status: 'close',
    //vacancy: '0',
  //},
  //// Add more courses as needed
//];

const handleViewCourse = (courseIndex) => {
  console.log("View",courseIndex)
};

const handleEnrollCourse = (courseIndex) => {
  console.log("Enroll",courseIndex)
};

const CourseCatalogTable = ({ searchResults }) => {
    console.log("Recieved Search Results: ", searchResults)
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: searchResults });
    
  return (
    <div className='course-catalog-table-container'>
      <table className='course-catalog-table' {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  {...column.getHeaderProps()}              
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, cellIndex) => {
                  return (
                    <td
                      {...cell.getCellProps()}                    
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
                <td style={{border:'none', width:150}}>
                <button
                  className='course-action-btn'
                  onClick={() => handleViewCourse(rowIndex)}
                >
                  View Course
                </button>
                <button
                  className='course-action-btn'
                  onClick={() => handleEnrollCourse(rowIndex)}
                >
                  Enroll
                </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CourseCatalogTable;
