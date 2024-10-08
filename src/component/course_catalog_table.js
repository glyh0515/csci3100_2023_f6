import React, { useState } from 'react';
import { useTable } from 'react-table';
import { Modal, Fade, Typography, Box } from '@mui/material';
import Message from './Message';
import Loading from './Loading';

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
  //CourseID: 'CSCI3100',
  //CourseName: 'Software Engineering',
  //Venue: 'LSK LT1', 
  //Timeslot:' Mon 12:30pm-2:30pm', 
  //Department: 'Computer Science',
  //Instructor: 'Micheal Lyu',
  //Units: '3',
  //Status: 'open',
  //Vacancy: '50',
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
 ////  Add more courses as needed
//];

const CourseCatalogTable = ({ searchResults }) => {
  console.log("Recieved Search Results: ", searchResults)
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: searchResults });
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const studentID = localStorage.getItem('studentID');
  const [loading, setIsLoading] = useState(false);

  

  const handleViewCourse = (courseIndex) => {
    setSelectedCourse(searchResults[courseIndex]);
    setOpenModal(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const Msg = (message,status) => {         // call message
    setMessage(message);                    
    setSeverity(status);                   
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  function handleEnrollCourse(courseIndex) {
    const confirmed = window.confirm('Confirm Enroll?');
    if (confirmed) {
      const courseID = searchResults[courseIndex].CourseID;
      setIsLoading(true);
      const url = `http://localhost:8080/add/${studentID}/${courseID}`;
      fetch(url, {
        method: 'PUT'
      })
      .then(response => {
        if (response.ok) {
          setIsLoading(false);
          console.log(`Successfully enrolled in course ${courseID}.`);
          Msg(`Successfully enrolled in course ${courseID}.`,"success");
        } else {
          setIsLoading(false);
          console.error(`Failed to enroll in course ${courseID}.`);
          Msg(`Failed to enroll in course ${courseID}.`,"error");
        }
      })
      .catch(error => {
        setIsLoading(false);
        console.error(`Error enrolling in course ${courseID}: ${error}`);
        Msg(`Failed to enroll in course ${courseID}`,"error");
      });
    }
  }

  return (
    <div className='course-catalog-table-container'>
      {loading && <Loading />}
      <Message open={open} 
            message={message} 
            severity={severity} 
            handleClose={handleClose} />
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
          <Modal
              open={openModal}
              onClose={handleCloseModal}
              closeAfterTransition
              >                
                <Fade in={openModal}>
                  <Box sx={{
                    backgroundColor: '#d7cdc3',
                    borderRadius: '20px',
                    boxShadow: 24,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    border: '2px solid #551805',
                    padding: '40px',
                    maxWidth: '800px',
                    minWidth: '600px',
                    overflow: 'auto'
                    }}>
                    <Typography variant="h6" component="h2" sx={{ marginBottom: '20px',width:'100%' }}>
                      {selectedCourse && `${selectedCourse.CourseID} - ${selectedCourse.CourseName}`}
                    </Typography>
                    {selectedCourse && (
                      <>
                        <Typography variant="body1" sx={{ marginBottom: '5px',width:'50%' }}>
                          Venue : {selectedCourse.Venue}
                        </Typography>
                        
                        <Typography variant="body1" sx={{ marginBottom: '5px',width:'50%'  }}>
                          Instructor : {selectedCourse.Instructor}
                        </Typography>
                        <Typography variant="body1" sx={{ whiteSpace: 'pre-line', marginBottom: '5px',width:'50%'  }}>
                          Timeslot : {selectedCourse.Timeslot}
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px',width:'50%' }}>
                          Department : {selectedCourse.Department}
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px',width:'50%' }}>
                          Units : {selectedCourse.Units}
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px',width:'50%' }}>
                          Vacancy : {selectedCourse.Vacancy}
                        </Typography>
                        <Typography variant="body1" sx={{ whiteSpace: 'pre-line', marginBottom: '5px',width:'100%', textAlign:'left' }}>
                          Course Description:
                        </Typography>
                        <Typography variant="body1" sx={{ whiteSpace: 'pre-line', marginBottom: '20px',width:'100%', textAlign:'left' }}>
                          {selectedCourse.CourseDescription}
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
