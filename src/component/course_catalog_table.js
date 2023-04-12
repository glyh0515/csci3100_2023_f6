import React from 'react';
import { useTable } from 'react-table';

const columns = [
  {
    Header: 'Course ID',
    accessor: 'id',
  },
  {
    Header: 'Course Name',
    accessor: 'name',
  },
  {
    Header: 'Venue',
    accessor: 'venue',
  },
  {
    Header: 'Time',
    accessor: 'time',
  },

  {
    Header: 'Department',
    accessor: 'department',
  },
  {
    Header: 'Instructor',
    accessor: 'instructor',
  },
  {
    Header: 'Units',
    accessor: 'units',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Vacancy',
    accessor: 'vacancy',
  },
  
];

const data = [
  {
    id: 'CSCI3100',
    name: 'Software Engineering',
    venue: 'LSK LT1', 
    time:' Mon 12:30pm-2:30pm', 
    department: 'Computer Science',
    instructor: 'Micheal Lyu',
    units: '3',
    status: 'open',
    vacancy: '50',
  },
  {
    id: 'MATH101',
    name: 'Calculus I',
    venue: 'YIA LT5',
    time:' Tue 12:30pm-2:30pm',
    department: 'Mathematics',
    instructor: 'Jane Smith',
    units: '2',
    status: 'close',
    vacancy: '0',
  },
  // Add more courses as needed
];

const handleViewCourse = (courseIndex) => {
  console.log("View",courseIndex)
};

const handleEnrollCourse = (courseIndex) => {
  console.log("Enroll",courseIndex)
};

const CourseCatalog = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

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

export default CourseCatalog;
