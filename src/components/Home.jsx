import React from 'react';
import { NavLink } from 'react-router-dom';

function Home({ searchTerm }) {
  const courses = [
    {
      name: 'Full Stack Development',
      image: 'https://miro.medium.com/v2/resize:fit:1400/0*cl7fc6pt1MHjIF4K.png', 
      path: '/fullstack'
    },
    {
      name: 'Data Science',
      image: 'https://www.inteliment.com/wp-content/uploads/2021/05/37-The-Techniques-Team-and-Tools-for-Effective-Data-Science.jpg', 
      path: '/datascience'
    },
    {
      name: 'Cyber Security',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHn68-VsE7VrVPrsb3x0IoqFFNVUTxzVLgQ&s', 
      path: '/cybersecurity'
    },
    {
      name: 'Career',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlfrCqgNOcXeynVfvLmeFn3W8sRwF1hW1D4Q&s', 
      path: '/career'
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="course-list">
        {filteredCourses.map(course => (
          <NavLink to={course.path} key={course.name} className="course">
            <img src={course.image} alt={course.name} />
            <h3>{course.name}</h3>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Home;
