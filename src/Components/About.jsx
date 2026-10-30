import React from 'react';
import styled from 'styled-components';

function About() {
  return (
    <AboutStyle>
      <h1>About Page</h1>
      <p>This is the about content area.</p>
    </AboutStyle>
  );
}

// Added baseline styling variables to prevent zero-height hidden renders
const AboutStyle = styled.div`
  padding: 20px;
  color: #333;
  min-height: 100vh;
  display: block;
`;

export default About;
