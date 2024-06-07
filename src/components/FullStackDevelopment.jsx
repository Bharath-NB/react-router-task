import React from 'react';
import fullstackImage from '../images/fullstack.png'; 

function FullStackDevelopment() {
  return (
    <div>
      <h2>Full Stack Development</h2>
      <img src={fullstackImage} alt="Full Stack Development" style={{ width: '40%', height: 'auto' }} />
      <p>
        Full Stack Development covers both the front-end and back-end aspects of web development. It involves working with technologies like HTML, CSS, JavaScript, React, Node.js, Express.js, and databases like MongoDB. It's a comprehensive skill set for building modern web applications.
      </p>
      <p>
        This blog will cover various aspects of full stack development, including frameworks, tools, best practices, and career opportunities in the field.
      </p>
    </div>
  );
}

export default FullStackDevelopment;
