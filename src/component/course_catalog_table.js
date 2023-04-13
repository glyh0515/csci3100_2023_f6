import React, { useState } from 'react';
import { useTable } from 'react-table';
import { Modal, Fade, Typography, Box } from '@mui/material';

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

/*const data = [
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
 //  Add more courses as needed
];*/
const CourseCatalogTable = ({ searchResults }) => {
  console.log("Recieved Search Results: ", searchResults)
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: searchResults });
  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleViewCourse = (courseIndex) => {
    setSelectedCourse(searchResults[courseIndex]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEnrollCourse = (courseIndex) => {
    console.log("Enroll",courseIndex)
  };


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
          </tbody> <Modal
              open={open}
              onClose={handleClose}
              closeAfterTransition
              >                
                <Fade in={open}>
                  <Box sx={{
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    boxShadow: 24,
                    padding: '20px',
                    maxWidth: '600px',
                    minWidth: '400px',
                    overflow: 'auto'
                    }}>
                    <Typography variant="h6" component="h2" sx={{ marginBottom: '20px' }}>
                      {selectedCourse && `${selectedCourse.CourseID} - ${selectedCourse.CourseName}`}
                    </Typography>
                    {selectedCourse && (
                      <>
                        <Typography variant="subtitle1" component="h3" sx={{ marginBottom: '10px' }}>
                          Course Description
                        </Typography>
                        <Typography variant="body1" sx={{ whiteSpace: 'pre-line', marginBottom: '20px' }}>
                          {selectedCourse.CourseDescription}
                        </Typography>
                        <Typography variant="subtitle1" component="h3" sx={{ marginBottom: '10px' }}>
                          Instructor
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                          {selectedCourse.Instructor}
                        </Typography>
                        <Typography variant="subtitle1" component="h3" sx={{ marginBottom: '10px' }}>
                          Schedule
                        </Typography>
                        <Typography variant="body1" sx={{ whiteSpace: 'pre-line', marginBottom: '20px' }}>
                          {selectedCourse.Schedule}
                        </Typography>
                        <Typography variant="subtitle1" component="h3" sx={{ marginBottom: '10px' }}>
                          Units
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                          {selectedCourse.Units}
                        </Typography>
                      </>
                    )}
                  </Box>
                </Fade>
            </Modal>
      </table>
    </div>
  );
};

export default CourseCatalogTable;
