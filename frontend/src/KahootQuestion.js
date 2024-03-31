import React from 'react';
import { useNavigate } from 'react-router-dom';

function GardenQuiz() {
  const [selectedAnswers, setSelectedAnswers] = React.useState({
    location: null,
    currentSeason: null,
    gardenSize: null,
    gardeningExperience: null,
    gardeningGoals: [], // Allow multiple selections
    timeCommitment: null,
  });

  const handleClick = (question, answer) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));
  };

  const handleGoalClick = (goal) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      gardeningGoals: prevAnswers.gardeningGoals.includes(goal)
        ? prevAnswers.gardeningGoals.filter((g) => g !== goal)
        : [...prevAnswers.gardeningGoals, goal],
    }));
    
  };

  const isSelected = (question, answer) => selectedAnswers[question] === answer;

  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: 'pastelGreen', padding: '20px' }}>
      <h2>Where is your garden?</h2>
      {/* Existing question and answer choices */}
      <div>
      <button
          onClick={() => handleClick('location', 'Condo interior')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('location', 'Condo interior') ? '#d2f5d8' : '',
            border: isSelected('location', 'Condo interior') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('location', 'Condo interior') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Condo interior
        </button>
        <button
          onClick={() => handleClick('location', 'Condo balcony')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('location', 'Condo balcony') ? '#d2f5d8' : '',
            border: isSelected('location', 'Condo balcony') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('location', 'Condo balcony') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Condo balcony
        </button>
        <button
          onClick={() => handleClick('location', 'Company office')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('location', 'Company office') ? '#d2f5d8' : '',
            border: isSelected('location', 'Company office') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('location', 'Company office') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Company office
        </button>
        <button
          onClick={() => handleClick('location', 'Factory interior')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('location', 'Factory interior') ? '#d2f5d8' : '',
            border: isSelected('location', 'Factory interior') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('location', 'Factory interior') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Factory interior
        </button>
        <button
          onClick={() => handleClick('location', 'Building Rooftop')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('location', 'Building Rooftop') ? '#d2f5d8' : '',
            border: isSelected('location', 'Building Rooftop') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('location', 'Building Rooftop') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Building Rooftop
        </button>
      </div>

      {/* Current Season */}
      <div>
        <h3>Current season?</h3>
        <button
          onClick={() => handleClick('currentSeason', 'Spring')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('currentSeason', 'Spring') ? '#d2f5d8' : '',
            border: isSelected('currentSeason', 'Spring') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('currentSeason', 'Spring') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Spring
        </button>
        <button
          onClick={() => handleClick('currentSeason', 'Summer')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('currentSeason', 'Summer') ? '#d2f5d8' : '',
            border: isSelected('currentSeason', 'Summer') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('currentSeason', 'Summer') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Summer
        </button>
        <button
          onClick={() => handleClick('currentSeason', 'Fall')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('currentSeason', 'Fall') ? '#d2f5d8' : '',
            border: isSelected('currentSeason', 'Fall') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('currentSeason', 'Fall') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Fall
        </button>
        <button
          onClick={() => handleClick('currentSeason', 'Winter')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('currentSeason', 'Winter') ? '#d2f5d8' : '',
            border: isSelected('currentSeason', 'Winter') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('currentSeason', 'Winter') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Winter
        </button>
      </div>

      {/* Garden Size */}
      <div>
        <h3>What size is your future garden?</h3>
        <button
          onClick={() => handleClick('gardenSize', 'Tiny (1-2 plants, 20 cm longest side)')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('gardenSize', 'Tiny (1-2 plants, 20 cm longest side)') ? '#d2f5d8' : '',
            border: isSelected('gardenSize', 'Tiny (1-2 plants, 20 cm longest side)') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('gardenSize', 'Tiny (1-2 plants, 20 cm longest side)') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Tiny (1-2 plants, 20 cm longest side)
        </button>
        <button
          onClick={() => handleClick('gardenSize', 'Small (3-5 plants, 50 cm longest side)')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('gardenSize', 'Small (3-5 plants, 50 cm longest side)') ? '#d2f5d8' : '',
            border: isSelected('gardenSize', 'Small (3-5 plants, 50 cm longest side)') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('gardenSize', 'Small (3-5 plants, 50 cm longest side)') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Small (3-5 plants, 50 cm longest side)
        </button>        <button
          onClick={() => handleClick('gardenSize', 'Medium (6-10 plants, 1 m longest side)')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('gardenSize', 'Medium (6-10 plants, 1 m longest side)') ? '#d2f5d8' : '',
            border: isSelected('gardenSize', 'Medium (6-10 plants, 1 m longest side)') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('gardenSize', 'Medium (6-10 plants, 1 m longest side)') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Medium (6-10 plants, 1 m longest side)
        </button>        <button
          onClick={() => handleClick('gardenSize', 'Large (11-20 plants, 1.5 m longest side)')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('gardenSize', 'Large (11-20 plants, 1.5 m longest side)') ? '#d2f5d8' : '',
            border: isSelected('gardenSize', 'Large (11-20 plants, 1.5 m longest side)') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('gardenSize', 'Large (11-20 plants, 1.5 m longest side)') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Large (11-20 plants, 1.5 m longest side)
        </button>        <button
          onClick={() => handleClick('gardenSize', 'Extra large (20+ plants, 2 m longest side)')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('gardenSize', 'Extra large (20+ plants, 2 m longest side)') ? '#d2f5d8' : '',
            border: isSelected('gardenSize', 'Extra large (20+ plants, 2 m longest side)') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('gardenSize', 'Extra large (20+ plants, 2 m longest side)') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Extra large (20+ plants, 2 m longest side)
        </button>
      </div>

      {/* Gardening Experience */}
      <div>
        <h3>What is your gardening experience?</h3>
        <button
          onClick={() => handleClick('gardeningExperience', 'No prior gardening experience')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('gardeningExperience', 'No prior gardening experience') ? '#d2f5d8' : '',
            border: isSelected('gardeningExperience', 'No prior gardening experience') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('gardeningExperience', 'No prior gardening experience') ? '0px 0px 5px 1px #40c267' : 'none',
          }}        >
          No prior gardening experience
        </button>
        <button
          onClick={() => handleClick('gardeningExperience', 'Some gardening experience')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('gardeningExperience', 'Some gardening experience') ? '#d2f5d8' : '',
            border: isSelected('gardeningExperience', 'Some gardening experience') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('gardeningExperience', 'Some gardening experience') ? '0px 0px 5px 1px #40c267' : 'none',
          }}        >
          Some gardening experience 
        </button>
        <button
          onClick={() => handleClick('gardeningExperience', 'Experienced gardener')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('gardeningExperience', 'Experienced gardener') ? '#d2f5d8' : '',
            border: isSelected('gardeningExperience', 'Experienced gardener') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('gardeningExperience', 'Experienced gardener') ? '0px 0px 5px 1px #40c267' : 'none',
          }}        >
          Experienced gardener 
        </button>
      </div>

      {/* Gardening Goals (allow multiple selections) */}
      <div>
        <h3>What are your gardening goals? (Select all that apply)</h3>
        <label>
          <input
            type="checkbox"
            onChange={() => handleGoalClick('Save money on grocery')}
            checked={selectedAnswers.gardeningGoals.includes('Save money on grocery')}
          />
          Save money on groceries
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleGoalClick('Save money on transportation for groceries ')}
            checked={selectedAnswers.gardeningGoals.includes('Save money on transportation for groceries ')}
          />
          Save money on transportation for groceries 
        </label>        <label>
          <input
            type="checkbox"
            onChange={() => handleGoalClick('Reduce carbon footprint')}
            checked={selectedAnswers.gardeningGoals.includes('Reduce carbon footprint')}
          />
          Reduce carbon footprint
        </label>        <label>
          <input
            type="checkbox"
            onChange={() => handleGoalClick('Learn how to garden ')}
            checked={selectedAnswers.gardeningGoals.includes('Learn how to garden')}
          />
          Learn how to garden 
        </label>        <label>
          <input
            type="checkbox"
            onChange={() => handleGoalClick('Eat self-grown crops ')}
            checked={selectedAnswers.gardeningGoals.includes('Eat self-grown crops')}
          />
          Eat self-grown crops 
        </label>        <label>
          <input
            type="checkbox"
            onChange={() => handleGoalClick('Improve health and nutrient intake')}
            checked={selectedAnswers.gardeningGoals.includes('Improve health and nutrient intake')}
          />
          Improve health and nutrient intake
        </label>        
      </div>

      <div>
        <h3>Time commitment</h3>
        <button
          onClick={() => handleClick('timeCommitment', 'Less than 2 hours per week')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('timeCommitment', 'Less than 2 hours per week') ? '#d2f5d8' : '',
            border: isSelected('timeCommitment', 'Less than 2 hours per week') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('timeCommitment', 'Less than 2 hours per week') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Less than 2 hours per week
        </button>
        <button
          onClick={() => handleClick('timeCommitment', '2-4 hours per week')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('timeCommitment', '2-4 hours per week') ? '#d2f5d8' : '',
            border: isSelected('timeCommitment', '2-4 hours per week') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('timeCommitment', '2-4 hours per week') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          2-4 hours per week
        </button>
        <button
          onClick={() => handleClick('timeCommitment', '4-7 hours per week')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('timeCommitment', '4-7 hours per week') ? '#d2f5d8' : '',
            border: isSelected('timeCommitment', '4-7 hours per week') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('timeCommitment', '4-7 hours per week') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          4-7 hours per week
        </button>
        <button
          onClick={() => handleClick('timeCommitment', '7+ hours per week')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('timeCommitment', '7+ hours per week') ? '#d2f5d8' : '',
            border: isSelected('timeCommitment', '7+ hours per week') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('timeCommitment', '7+ hours per week') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          7+ hours per week 
        </button>
      </div>

      {Object.values(selectedAnswers).every((answer) => answer !== null) && (
        <>
          <p>Great! You've answered all the questions. Let's get you started on your gardening journey!</p>
          <button onClick={() => navigate('/dashboard')}>submit</button>
        </>
      )}
    </div>
  );
}

export default GardenQuiz;
