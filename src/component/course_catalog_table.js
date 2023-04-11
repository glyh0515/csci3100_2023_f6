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
    Header: 'Instructor',
    accessor: 'instructor',
  },
  {
    Header: 'Department',
    accessor: 'department',
  },
];

const data = [
  {
    id: 'CSCI3100',
    name: 'Software Engineering',
    instructor: 'Micheal Lyu',
    department: 'Computer Science',
  },
  {
    id: 'MATH101',
    name: 'Calculus I',
    instructor: 'Jane Smith',
    department: 'Mathematics',
  },
  // Add more courses as needed
];

const CourseCatalog = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{  borderRadius: '10px', overflow: 'hidden' }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, columnIndex) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  background: '#b87742',
                  color: 'white',
                  fontWeight: 'bold',
                  borderTopLeftRadius: columnIndex === 0 ? '10px' : undefined,
                  borderTopRightRadius: columnIndex === headerGroup.headers.length - 1 ? '10px' : undefined,
                }}
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
                    style={{
                      padding: '10px',
                      background: '#d49b6f',
                      borderBottomLeftRadius: rowIndex === rows.length - 1 && cellIndex === 0 ? '10px' : undefined,
                      borderBottomRightRadius: rowIndex === rows.length - 1 && cellIndex === row.cells.length - 1 ? '10px' : undefined,
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CourseCatalog;
