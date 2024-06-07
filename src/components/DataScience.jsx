import React from 'react';
import dataScienceImage from '../images/datascience.jpg'; 

function DataScience() {
  return (
    <div>
      <h2>Data Science</h2>
      <img src={dataScienceImage} alt="Data Science" style={{ width: '40%', height: 'auto' }} />
      <p>
        Data Science is an interdisciplinary field that uses scientific methods, algorithms, processes, and systems to extract knowledge and insights from structured and unstructured data. It involves skills in programming, statistics, machine learning, and domain knowledge.
      </p>
      <p>
        This blog will explore various topics in data science, such as data analysis, machine learning algorithms, data visualization, and real-world applications of data science.
      </p>
    </div>
  );
}

export default DataScience;
