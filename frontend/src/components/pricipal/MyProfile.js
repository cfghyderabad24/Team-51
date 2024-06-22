import React from 'react';
import './MyProfile.css';

const MyProfile = () => {
  const students = [
    { id: 1, name: 'John Doe', score: 85 },
    { id: 2, name: 'Jane Smith', score: 90 },
    { id: 3, name: 'Emily Johnson', score: 78 },
    // Add more student data as needed
  ];

  return (
    <div className="principal-dashboard">
      <h1>Welcome, JAYA SCHOOL!</h1>
      <p>Your students' latest scores are:</p>
      <table className="student-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Student ID</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.id}</td>
              <td>{student.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
     
      <div>    </div>
    </div>
  );
};

export default MyProfile;
