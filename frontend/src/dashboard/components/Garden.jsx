import React, { useState } from 'react';
import styled from 'styled-components';
import garden from '../../Assets/garden1.png'; // Import the image using a relative path
import tomato from '../../Assets/tomato.png'; // Import the plant icon image using a relative path
import lettuce from '../../Assets/lettuce.png'; // Import the plant icon image using a relative path
import carrot from '../../Assets/carrot.png'; // Import the plant icon image using a relative path
import basil from '../../Assets/basil.png'; // Import the plant icon image using a relative path
import pepper from '../../Assets/pepper.png'; // Import the plant icon image using a relative path
import cucumber from '../../Assets/cucumber.png'; // Import the plant icon image using a relative path
import spinach from '../../Assets/spinach.png'; // Import the plant icon image using a relative path
import strawberry from '../../Assets/strawberry.png'; // Import the plant icon image using a relative path
import Checkbox from '../../Checkbox'; // Import the Checkbox component

import font from '../../Fonts/MPLUS1p-Regular.ttf'; // Import the font file



const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  @font-face {
    font-family: 'MPLUS1pRegular';
    src: url(${font}) format('truetype');
  }

  font-family: 'MPLUS1pRegular', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
  @font-face {
    font-family: 'MPLUS1pRegular';
    src: url(${font}) format('truetype');
  }

  font-family: 'MPLUS1pRegular', sans-serif;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: -20px; /* Adjust the margin to remove vertical space */
  @font-face {
    font-family: 'MPLUS1pRegular';
    src: url(${font}) format('truetype');
  }

  font-family: 'MPLUS1pRegular', sans-serif;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-top-left-radius: 5px;
  border: 1px solid darkgreen
`;

const ContentContainer = styled.div`
  border: 1px solid #ccc;
  margin-top: 20px; /* Adjust the margin to remove vertical space */
  position: relative;
  @font-face {
    font-family: 'MPLUS1pRegular';
    src: url(${font}) format('truetype');
  }

  font-family: 'MPLUS1pRegular', sans-serif;
`;

const ImageContainer = styled.div`
  text-align: center;
`;

const ChecklistContainer = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    @font-face {
      font-family: 'MPLUS1pRegular';
      src: url(${font}) format('truetype');
    }
  
    font-family: 'MPLUS1pRegular', sans-serif;
  }
`;

const FileUploadContainer = styled.div`
  input[type='file'] {
    margin-bottom: 500px;
    @font-face {
      font-family: 'MPLUS1pRegular';
      src: url(${font}) format('truetype');
    }
  
    font-family: 'MPLUS1pRegular', sans-serif;
  }
`;


const PlantContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  @font-face {
    font-family: 'MPLUS1pRegular';
    src: url(${font}) format('truetype');
  }

  font-family: 'MPLUS1pRegular', sans-serif;
`;

const PlantIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

const PlantInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const PlantName = styled.div`
  font-weight: bold;
`;

const PlantDescription = styled.div`
  margin-top: 5px;
`;

const MadeWithLove = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Dashboard = () => {
  const [displayContent, setDisplayContent] = useState('image'); // Set initial state to 'image'

  const handleButtonClick = (content) => {
    setDisplayContent(content);
  };

  return (
    <Container>
      <Title>Your Garden</Title>
      <ButtonContainer>
        <Button onClick={() => handleButtonClick('image')}>🌻View Garden</Button>
        <Button onClick={() => handleButtonClick('checklist')}>😎Daily To-Do</Button>
        <Button onClick={() => handleButtonClick('fileUpload')}>🚑Plant Hospital</Button>
      </ButtonContainer>
      <ContentContainer>
        {displayContent === 'image' && (
          <ImageContainer>
            <img src={garden} alt="Garden" style={{ width: '600px'}}/>
          </ImageContainer>
        )}
        {displayContent === 'checklist' && (
          <ChecklistContainer>
            <h2>Daily Checklist</h2>
            <ul>
      <li>
        <Checkbox defaultChecked={false} onChange={(isChecked) => console.log('Checkbox 1 checked:', isChecked)} />
        <label>Water plants</label>
      </li>
      <li>
        <Checkbox defaultChecked={false} onChange={(isChecked) => console.log('Checkbox 2 checked:', isChecked)} />
        <label>Fertilize soil</label>
      </li>
      <li>
        <Checkbox defaultChecked={false} onChange={(isChecked) => console.log('Checkbox 3 checked:', isChecked)} />
        <label>Prune branches</label>
      </li>
      <li>
        <Checkbox defaultChecked={false} onChange={(isChecked) => console.log('Checkbox 4 checked:', isChecked)} />
        <label>6-8 hours direct sunlight: tomatoes, carrot, pepper, cucumber, strawberry</label>
      </li>
      <li>
        <Checkbox defaultChecked={false} onChange={(isChecked) => console.log('Checkbox 4 checked:', isChecked)} />
        <label>3-4 hours direct sunlight: lettuce, spinach</label>
      </li>
      
    </ul>
          </ChecklistContainer>
        )}
        {displayContent === 'fileUpload' && (
          <FileUploadContainer>
            <h2>Worry not, your plant child is in the right lens!</h2>
            <p>Take a picture and upload it for our in house 24/7 availabe plant doctor to diagnose and cure!</p>
            <input type="file" />
          </FileUploadContainer>
        )}
      </ContentContainer>
      <PlantContainer>
        <Title>Your Plants</Title>
        <PlantInfo>
          <PlantIcon src={tomato} alt="Plant Icon"/>
          <div>
            <PlantName>Cherry Tomato (Solanum lycopersicum)</PlantName>
            <PlantDescription>Cherry Tomatoes are versatile plants that thrive in warm climates. With proper care and pruning, they can yield abundant, juicy fruits perfect for salads, sauces, and sandwiches.
            </PlantDescription>
          </div>
        </PlantInfo>

        <PlantInfo>
          <PlantIcon src={lettuce} alt="Plant Icon"/>
          <div>
            <PlantName>Lettuce (Lactuca sativa)</PlantName>
            <PlantDescription>Lettuce is a cool-season crop that grows quickly and can be harvested continuously. Its tender leaves are ideal for fresh salads and sandwiches, providing essential vitamins and minerals.</PlantDescription>
          </div>
        </PlantInfo>

        <PlantInfo>
          <PlantIcon src={carrot} alt="Plant Icon"/>
          <div>
            <PlantName>Carrot (Daucus carota subsp. sativus)</PlantName>
            <PlantDescription>Carrots are root vegetables known for their crunchy texture and sweet flavor. They're easy to grow and require well-drained soil, making them a favorite among gardeners for fresh snacks and culinary dishes.</PlantDescription>
          </div>
        </PlantInfo>

        <PlantInfo>
          <PlantIcon src={basil} alt="Plant Icon"/>
          <div>
            <PlantName>Basil (Ocimum basilicum)</PlantName>
            <PlantDescription>Basil is a fragrant herb popular in Mediterranean cuisine and prized for its aroma and flavor. It thrives in warm, sunny conditions and enhances dishes like pasta, salads, and sauces with its fresh, peppery taste.</PlantDescription>
          </div>
        </PlantInfo>

        <PlantInfo>
          <PlantIcon src={pepper} alt="Plant Icon"/>
          <div>
            <PlantName>Pepper (Capsicum spp.)</PlantName>
            <PlantDescription>Peppers come in various shapes, sizes, and flavors, ranging from sweet to spicy. They require ample sunlight and well-drained soil, producing vibrant fruits that add color and flavor to dishes like stir-fries, salsas, and stuffed peppers.</PlantDescription>
          </div>
        </PlantInfo>

        <PlantInfo>
          <PlantIcon src={cucumber} alt="Plant Icon"/>
          <div>
            <PlantName>Cucumber (Cucumis sativus)</PlantName>
            <PlantDescription>Cucumbers are refreshing and hydrating vegetables that grow best in warm weather. Their crisp texture and mild flavor make them perfect for salads, sandwiches, pickles, and refreshing beverages.</PlantDescription>
          </div>
        </PlantInfo>

        <PlantInfo>
          <PlantIcon src={spinach} alt="Plant Icon"/>
          <div>
            <PlantName>Spinach (Spinacia oleracea)</PlantName>
            <PlantDescription>Spinach is a nutrient-rich leafy green packed with vitamins, minerals, and antioxidants. It grows well in cool weather and can be harvested multiple times, adding nutritional value and versatility to salads, smoothies, and cooked dishes.</PlantDescription>
          </div>
        </PlantInfo>

        <PlantInfo>
          <PlantIcon src={strawberry} alt="Plant Icon"/>
          <div>
            <PlantName>Strawberry (Fragaria × ananassa)</PlantName>
            <PlantDescription>Strawberries are delicious, juicy fruits prized for their sweetness and vibrant color. They're perennial plants that spread quickly, producing succulent berries perfect for fresh eating, desserts, jams, and preserves.</PlantDescription>
          </div>
        </PlantInfo>
        
      </PlantContainer>
      <MadeWithLove>Made with 🥕 by GardenInTheSky Team</MadeWithLove>
    </Container>
  );
};

export default Dashboard;
