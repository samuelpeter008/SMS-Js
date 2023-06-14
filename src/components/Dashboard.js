// import React, { useState } from 'react';

// const Dashboard = () => {
//   const [students, setStudents] = useState([]);

//   const handleCreateStudent = (student) => {
//     setStudents([...students, student]);
//   };

//   const handleModifyStudent = (id, modifiedStudent) => {
//     const updatedStudents = students.map((student) =>
//       student.id === id ? modifiedStudent : student
//     );
//     setStudents(updatedStudents);
//   };

//   const handleDeleteStudent = (id) => {
//     const updatedStudents = students.filter((student) => student.id !== id);
//     setStudents(updatedStudents);
//   };

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Phone Number</th>
//             <th>Course</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) => (
//             <tr key={student.id}>
//               <td>{student.name}</td>
//               <td>{student.age}</td>
//               <td>{student.phoneNumber}</td>
//               <td>{student.course}</td>
//               <td>
//                 <button onClick={() => handleModifyStudent(student.id, { ...student, name: 'Modified Name' })}>
//                   Modify
//                 </button>
//                 <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={() => handleCreateStudent({ id: Date.now(), name: 'New Student', age: 20, phoneNumber: '1234567890', course: 'React.js' })}>
//         Create Student
//       </button>
//     </div>
//   );
// };

// export default Dashboard;




























// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import './Dashboard.css';

// const Dashboard = () => {
//   const [students, setStudents] = useState([]);

//   const handleCreateStudent = (student) => {
//     setStudents([...students, student]);
//   };

//   const handleModifyStudent = (id, modifiedStudent) => {
//     const updatedStudents = students.map((student) =>
//       student.id === id ? modifiedStudent : student
//     );
//     setStudents(updatedStudents);
//   };

//   const handleDeleteStudent = (id) => {
//     const updatedStudents = students.filter((student) => student.id !== id);
//     setStudents(updatedStudents);
//   };

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell>Email ID</TableCell>
//             <TableCell>Phone Number</TableCell>
//             <TableCell>Course</TableCell>
//             <TableCell>Action</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {students.map((student) => (
//             <TableRow key={student.id}>
//               <TableCell>{student.name}</TableCell>
//               <TableCell>{student.email}</TableCell>
//               <TableCell>{student.phoneNumber}</TableCell>
//               <TableCell>{student.course}</TableCell>
//               <TableCell>
//                 <Button
//                   variant="contained"
//                   onClick={() =>
//                     handleModifyStudent(student.id, { ...student, name: 'Modified Name' })
//                   }
//                 >
//                   Modify
//                 </Button>
//                 <Button
//                   variant="contained"
//                   onClick={() => handleDeleteStudent(student.id)}
//                 >
//                   Delete
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <Button
//         variant="contained"
//         onClick={() =>
//           handleCreateStudent({
//             id: Date.now(),
//             name: 'New Student',
//             email: 'newstudent@example.com',
//             phoneNumber: '1234567890',
//             course: 'React.js',
//           })
//         }
//       >
//         Create Student
//       </Button>
//     </div>
//   );
// };

// export default Dashboard;





































// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';

// const Dashboard = () => {
//   const [students, setStudents] = useState([]);

//   const handleCreateStudent = (student) => {
//     setStudents([...students, student]);
//   };

//   const handleModifyStudent = (id, modifiedName, modifiedEmail, modifiedPhoneNumber, modifiedCourse) => {
//     const updatedStudents = students.map((student) =>
//       student.id === id
//         ? {
//             ...student,
//             name: modifiedName,
//             email: modifiedEmail,
//             phoneNumber: modifiedPhoneNumber,
//             course: modifiedCourse,
//           }
//         : student
//     );
//     setStudents(updatedStudents);
//   };

//   const handleDeleteStudent = (id) => {
//     const updatedStudents = students.filter((student) => student.id !== id);
//     setStudents(updatedStudents);
//   };

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell>Email ID</TableCell>
//             <TableCell>Phone Number</TableCell>
//             <TableCell>Course</TableCell>
//             <TableCell>Action</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {students.map((student) => (
//             <TableRow key={student.id}>
//               <TableCell>{student.name}</TableCell>
//               <TableCell>{student.email}</TableCell>
//               <TableCell>{student.phoneNumber}</TableCell>
//               <TableCell>{student.course}</TableCell>
//               <TableCell>
//                 <Button
//                   variant="contained"
//                   onClick={() => {
//                     const modifiedName = prompt('Enter modified name:', student.name);
//                     const modifiedEmail = prompt('Enter modified email:', student.email);
//                     const modifiedPhoneNumber = prompt(
//                       'Enter modified phone number:',
//                       student.phoneNumber
//                     );
//                     const modifiedCourse = prompt('Enter modified course:', student.course);
//                     handleModifyStudent(
//                       student.id,
//                       modifiedName,
//                       modifiedEmail,
//                       modifiedPhoneNumber,
//                       modifiedCourse
//                     );
//                   }}
//                 >
//                   Modify
//                 </Button>
//                 <Button variant="contained" onClick={() => handleDeleteStudent(student.id)}>
//                   Delete
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <Button
//         variant="contained"
//         onClick={() =>
//           handleCreateStudent({
//             id: Date.now(),
//             name: 'New Student',
//             email: 'newstudent@example.com',
//             phoneNumber: '1234567890',
//             course: 'React.js',
//           })
//         }
//       >
//         Create Student
//       </Button>
//     </div>
//   );
// };

// export default Dashboard;



























































// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';

// const Dashboard = () => {
//   const [students, setStudents] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState('React.js');
//   const [selectedStudentId, setSelectedStudentId] = useState(null);
//   const [modifiedName, setModifiedName] = useState('');
//   const [modifiedEmail, setModifiedEmail] = useState('');
//   const [modifiedPhoneNumber, setModifiedPhoneNumber] = useState('');

//   const handleCreateStudent = (student) => {
//     setStudents([...students, student]);
//   };

//   const handleModifyStudent = (id, modifiedName, modifiedEmail, modifiedPhoneNumber, modifiedCourse) => {
//     const updatedStudents = students.map((student) =>
//       student.id === id
//         ? {
//             ...student,
//             name: modifiedName,
//             email: modifiedEmail,
//             phoneNumber: modifiedPhoneNumber,
//             course: modifiedCourse,
//           }
//         : student
//     );
//     setStudents(updatedStudents);
//     setSelectedStudentId(null);
//     setModifiedName('');
//     setModifiedEmail('');
//     setModifiedPhoneNumber('');
//   };

//   const handleDeleteStudent = (id) => {
//     const updatedStudents = students.filter((student) => student.id !== id);
//     setStudents(updatedStudents);
//   };

//   const courseOptions = ['React.js', 'JavaScript', 'Python', 'Java', 'HTML/CSS'];

//   const handleModify = () => {
//     handleModifyStudent(
//       selectedStudentId,
//       modifiedName,
//       modifiedEmail,
//       modifiedPhoneNumber,
//       selectedCourse
//     );
//   };

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell>Email ID</TableCell>
//             <TableCell>Phone Number</TableCell>
//             <TableCell>Course</TableCell>
//             <TableCell>Action</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {students.map((student) => (
//             <TableRow key={student.id}>
//               <TableCell>{student.name}</TableCell>
//               <TableCell>{student.email}</TableCell>
//               <TableCell>{student.phoneNumber}</TableCell>
//               <TableCell>
//                 {student.id === selectedStudentId ? (
//                   <Select
//                     value={selectedCourse}
//                     onChange={(event) => setSelectedCourse(event.target.value)}
//                   >
//                     {courseOptions.map((option) => (
//                       <MenuItem key={option} value={option}>
//                         {option}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 ) : (
//                   student.course
//                 )}
//               </TableCell>
//               <TableCell>
//                 <Button
//                   variant="contained"
//                   onClick={() => {
//                     setSelectedStudentId(student.id);
//                     setSelectedCourse(student.course);
//                     setModifiedName(student.name);
//                     setModifiedEmail(student.email);
//                     setModifiedPhoneNumber(student.phoneNumber);
//                   }}
//                 >
//                   Modify
//                 </Button>
//                 <Button variant="contained" onClick={() => handleDeleteStudent(student.id)}>
//                   Delete
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       {selectedStudentId && (
//         <div>
//           <TextField
//             label="Modified Name"
//             value={modifiedName}
//             onChange={(event) => setModifiedName(event.target.value)}
//           />
//           <br></br>
//           <TextField
//             label="Modified Email"
//             value={modifiedEmail}
//             onChange={(event) => setModifiedEmail(event.target.value)}
//           />
//           <br></br>
//           <TextField
//             label="Modified Phone Number"
//             value={modifiedPhoneNumber}
//             onChange={(event) => setModifiedPhoneNumber(event.target.value)}
//           />
//           <br></br>
//           <Button variant="contained" onClick={handleModify}>
//             Save Changes
//           </Button>
//         </div>
//       )}
//       <Button
//         variant="contained"
//         onClick={() =>
//           handleCreateStudent({
//             id: Date.now(),
//             name: 'New Student',
//             email: 'newstudent@example.com',
//             phoneNumber: '1234567890',
//             course: selectedCourse,
//           })
//         }
//       >
//         Create Student
//       </Button>
//     </div>
//   );
// };

// export default Dashboard;

























































import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './Dashboard.css';


const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('React.js');
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [modifiedName, setModifiedName] = useState('');
  const [modifiedEmail, setModifiedEmail] = useState('');
  const [modifiedPhoneNumber, setModifiedPhoneNumber] = useState('');

  useEffect(() => {
    getdata();
  }, []);

  const getdata = (id) => {
    axios.get('http://localhost:3000/api/students')
      .then((response) => {
        console.log(response)
        setStudents(response.data);
        // setStudents([...students, response.data]);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      });
  };


  const handleCreateStudent = (student) => {
    console.log(student)
    var data = student;
    axios.post('http://localhost:3000/api/students', data)
    .then((response) => {
      console.log(response)
      // setStudents(response.data);
      getdata();

    })
    .catch((error) => {
      console.error('Error fetching students:', error);
    });
    // setStudents([...students, student]);
  };

  const handleModifyStudent = (id, modifiedName, modifiedEmail, modifiedPhoneNumber, modifiedCourse) => {
    const updatedStudents = students.map((student) =>
      student.id == id
        ? {
            ...student,
            name: modifiedName,
            email: modifiedEmail,
            phoneNumber: modifiedPhoneNumber,
            course: modifiedCourse,
          }
        : student
    );
    setStudents(updatedStudents);
    setSelectedStudentId(null);
    setModifiedName('');
    setModifiedEmail('');
    setModifiedPhoneNumber('');

    var data = {            
      name: modifiedName,
      email: modifiedEmail,
      phoneNumber: modifiedPhoneNumber,
      course: modifiedCourse};
    axios.put(`http://localhost:3000/api/students/${id}`, data)
    .then((response) => {
      console.log(response)
      // setStudents(response.data);
      getdata();
    })
    .catch((error) => {
      console.error('Error fetching students:', error);
    });

  };

  const handleDeleteStudent = (id) => {

    // Make the API call
    axios.delete(`http://localhost:3000/api/students/${id}`)
      .then(response => {
        // Handle the API response
        console.log(response.data);
        getdata();
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });

    // const updatedStudents = students.filter((student) => student.id !== id);
    // setStudents(updatedStudents);
  };

  const courseOptions = ['React.js', 'JavaScript', 'Python', 'Java', 'HTML/CSS'];

  const handleModify = () => {
    handleModifyStudent(
      selectedStudentId,
      modifiedName,
      modifiedEmail,
      modifiedPhoneNumber,
      selectedCourse
    );
  };

  const isEmailValid = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPhoneNumberValid = (phoneNumber) => {
    // Regular expression to validate phone number format
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  return (
    <div class='dashboard-bg'>
    <div class='dashboard-container'>
      <h2 class='dashboard-title'>Dashboard</h2>
      <Table class='dashboard-table'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email ID</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.phoneNumber}</TableCell>
              <TableCell>
                {student.id === selectedStudentId ? (
                  <Select
                    value={selectedCourse}
                    onChange={(event) => setSelectedCourse(event.target.value)}
                  >
                    {courseOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                ) : (
                  student.course
                )}
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => {
                    setSelectedStudentId(student.id);
                    setSelectedCourse(student.course);
                    setModifiedName(student.name);
                    setModifiedEmail(student.email);
                    setModifiedPhoneNumber(student.phoneNumber);
                  }}
                >
                  Modify
                </Button>
                <Button variant="contained" onClick={() => handleDeleteStudent(student.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedStudentId && (
        <div>
          <TextField
            label="Modified Name"
            value={modifiedName}
            onChange={(event) => setModifiedName(event.target.value)}
          />
          <TextField
            label="Modified Email"
            value={modifiedEmail}
            onChange={(event) => setModifiedEmail(event.target.value)}
            error={!isEmailValid(modifiedEmail)}
            helperText={!isEmailValid(modifiedEmail) && 'Invalid email format'}
          />
          <TextField
            label="Modified Phone Number"
            value={modifiedPhoneNumber}
            onChange={(event) => setModifiedPhoneNumber(event.target.value)}
            error={!isPhoneNumberValid(modifiedPhoneNumber)}
            helperText={!isPhoneNumberValid(modifiedPhoneNumber) && 'Invalid phone number format'}
          />
          <Button variant="contained" onClick={handleModify}>
            Save Changes
          </Button>
        </div>
      )}
      <Button
        variant="contained"
        onClick={() =>
          handleCreateStudent({
            id: Date.now(),
            name: 'New Student',
            email: 'newstudent@example.com',
            phoneNumber: '1234567890',
            course: selectedCourse,
          })
        }
      >
        Create Student
      </Button>
    </div>
    </div>
  );
};

export default Dashboard;
