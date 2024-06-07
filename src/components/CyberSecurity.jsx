import React from 'react';
import cyberSecurityImage from '../images/cybersecurity.jpeg';

function CyberSecurity() {
  return (
    <div>
      <h2>Cyber Security</h2>
      <img src={cyberSecurityImage} alt="Cyber Security" style={{ width: '40%', height: 'auto' }} />
      <p>
        Cybersecurity refers to the practice of protecting systems, networks, and programs from digital attacks. It encompasses various technologies, processes, and practices designed to safeguard against unauthorized access, data breaches, and other cyber threats.
      </p>
      <p>
        This blog will cover topics related to cybersecurity, including network security, cryptography, ethical hacking, and cybersecurity strategies for businesses and individuals.
      </p>
    </div>
  );
}

export default CyberSecurity;
