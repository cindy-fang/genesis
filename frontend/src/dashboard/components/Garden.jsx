import React, { useState } from 'react';
import styled from 'styled-components';
import garden from '../../Assets/garden1.png'; // Import the image using a relative path


const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: -20px; /* Adjust the margin to remove vertical space */
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-top-left-radius: 5px;
`;

const ContentContainer = styled.div`
  border: 1px solid #ccc;
  margin-top: 20px; /* Adjust the margin to remove vertical space */
  position: relative;
`;

const ImageContainer = styled.div`
  text-align: center;
`;

const ChecklistContainer = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
  }
`;

const FileUploadContainer = styled.div`
  input[type='file'] {
    margin-bottom: 500px;
  }
`;

const Dashboard = () => {
  const [displayContent, setDisplayContent] = useState(null);

  const handleButtonClick = (content) => {
    setDisplayContent(content);
  };

  return (
    <Container>
      <Title>Your Garden</Title>
      <ButtonContainer>
        <Button onClick={() => handleButtonClick('image')}>View Garden</Button>
        <Button onClick={() => handleButtonClick('checklist')}>Daily To-Do</Button>
        <Button onClick={() => handleButtonClick('fileUpload')}>Plant Hospital</Button>
      </ButtonContainer>
      <ContentContainer>
        {displayContent === 'image' && (
          <ImageContainer>
            <img src={garden} alt="Garden" style={{ width: '600px'}}/>
          </ImageContainer>
        )}
        {displayContent === 'checklist' && (
          <ChecklistContainer>
            <h2>Checklist</h2>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </ChecklistContainer>
        )}
        {displayContent === 'fileUpload' && (
          <FileUploadContainer>
            <h2>File Upload</h2>
            <input type="file" />
          </FileUploadContainer>
        )}
      </ContentContainer>
    </Container>
  );
};

export default Dashboard;
