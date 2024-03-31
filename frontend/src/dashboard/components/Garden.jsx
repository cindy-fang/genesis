import React, { useState } from 'react';
import styled from 'styled-components';
import garden from '../../Assets/garden1.png'; // Import the image using a relative path
import Checkbox from '../../Checkbox'; // Import the Checkbox component
import axios from 'axios';

import font from '../../Fonts/MPLUS1p-Regular.ttf'; // Import the font file
import { useLocation } from 'react-router-dom';



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
    padding: 1rem;
    @font-face {
      font-family: 'MPLUS1pRegular';
      src: url(${font}) format('truetype');
    }
  
    font-family: 'MPLUS1pRegular', sans-serif;
  }
`;

const FileUploadContainer = styled.div`
  input[type='file'] {
    margin-bottom: 50px;
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

  const location = useLocation();
  const someData = location.state;

  const [displayContent, setDisplayContent] = useState('image'); // Set initial state to 'image'
  const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file

  const [diseaseMap, setDiseaseMap] = useState([]);
  const [isHealthy, setIsHealthy] = useState({});
  const [isPlant, setIsPlant] = useState({});

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // Store the selected file
  };

  const handleUpload = () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }
  
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
  
    reader.onloadend = () => {
      const base64String = reader.result.split(',')[1]; // Get the base64 encoded string without the data:image/jpeg;base64 prefix
      const base64files = [base64String]; // Convert the base64 string to an array
  
      const data = {
        api_key: 'FcLPNeCwV44ad2bFIEYCHUu8d76klHoLmuRpjj34iG5WFCXmDG',
        images: base64files,
        modifiers: ["crops_fast", "similar_images"],
        language: "en",
        disease_details: ["cause", "common_names", "classification", "description", "treatment", "url"],
      };
  
      axios
        .post('https://api.plant.id/v2/health_assessment', data)
        .then((response) => {
          console.log('Success:', response.data);
          console.log('Success:', response.data['health_assessment']['diseases'][0]['disease_details']['treatment']['prevention']);
          setDiseaseMap(response.data['health_assessment']['diseases']);
          setIsHealthy(response.data['health_assessment']['is_healthy_probability']);
          setIsPlant(response.data['is_plant_probability']);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
  };

  // const handleUpload = (base64files) => {
  //   const data = {
  //     api_key: "-- ask for one: https://web.plant.id/api-access-request/ --",
  //     images: base64files,
  //     modifiers: ["crops_fast", "similar_images"],
  //     language: "en",
  //     disease_details: ["cause", "common_names", "classification", "description", "treatment", "url"],
  //   };

  //   axios
  //     .post('https://api.plant.id/v2/health_assessment', data)
  //     .then((response) => {
  //       console.log('Success:', response.data);
  //       setDiseaseMap(response.data['result']['disease']);
  //       setIsHealthy(response.data['result']['is_healthy']);
  //       setIsPlant(response.data['result']['is_plant']);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };

  // const handleUpload = () => {
  //   const formData = new FormData();
  //   formData.append('file', selectedFile); // Append the selected file to the FormData object
  //   // formData.append('details', 'local_name,description,url,treatment,classification,common_names,cause'); // Append the details parameter to the FormData object
  //   console.log(process.env.REACT_APP_PLANTID_API_KEY)
  //   axios.post('https://plant.id/api/v3/health_assessment', formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //       'Api-Key': 'lG51So4QxcKio0mAPdBI8hfLYeBbuPGBuw5Wp5bUYP46FJDOP8'/*process.env.REACT_APP_PLANTID_API_KEY*/,
  //     }
  //   })
  //   .then(response => {
  //     console.log(response.data);
  //     setDiseaseMap(response.data['result']['disease']);
  //     setIsHealthy(response.data['result']['is_healthy']);
  //     setIsPlant(response.data['result']['is_plant']);
  //     // Handle response...
  //     console.log(diseaseMap)
  //     console.log(isHealthy)
  //     console.log(isPlant)
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //     // Handle error...
  //   });
  // };

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
            <input type="file" accept='image/*' onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>

            {
              <>
              <h2>Dr. Plant’s Diagnosis 🔍</h2>
              {diseaseMap.length && diseaseMap.map((d) => 
                (
                  <>
                    <p>{d.name} {d.probability}</p>
                    isHealthy = {isHealthy}<br/>
                    isPlant = {isPlant}
                  </>
                )

              )}
              
              </>
            }
          </FileUploadContainer>
        )}
      </ContentContainer>
      <PlantContainer>
        <Title>Your Plants</Title>

          {someData && someData.map((s) => (
            <PlantInfo>
              <PlantIcon src={`data:image/jpeg;base64,${s['image']}`} alt='Plant Icon' />
              <div>
                <PlantName>{s['name']}</PlantName>
                <PlantDescription>{s['description']}</PlantDescription>
              </div>
            </PlantInfo>
          ))}

        {/* <PlantInfo>
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
         */}
      </PlantContainer>
      <MadeWithLove>Made with 🥕 by GardenInTheSky Team</MadeWithLove>
    </Container>
  );
};

export default Dashboard;
