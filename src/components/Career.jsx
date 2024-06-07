import React from 'react';
import careerImage from '../images/career.jpeg'; 

function Career() {
  return (
    <div>
      <h2>Career</h2>
      <img src={careerImage} alt="career" style={{ width: '40%', height: 'auto' }} />
      <p>
        Career development is the process of managing one's career path over time. It involves setting goals, acquiring skills and experiences, networking, and making strategic decisions to advance in one's chosen profession.
      </p>
      <p>
        This blog will provide insights and tips on career development, including resume writing, job search strategies, interview preparation, and professional networking.
      </p>
    </div>
  );
}

export default Career;