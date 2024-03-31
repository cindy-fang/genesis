import React from 'react';
import { useNavigate } from 'react-router-dom';

function GardenQuiz() {
  const [selectedAnswers, setSelectedAnswers] = React.useState({
    garden: null,
    season: null,
    size: null,
    experience: null,
    goal: null, // Allow multiple selections
    timeCommitment: null,
  });

  const handleClick = (question, answer) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));
    console.log(selectedAnswers[question])
  };

  // const handleGoalClick = (goal) => {
  //   setSelectedAnswers((prevAnswers) => ({
  //     ...prevAnswers,
  //     goal: prevAnswers.goal.includes(goal)
  //       ? prevAnswers.goal.filter((g) => g !== goal)
  //       : [...prevAnswers.goal, goal],
  //   }));
    
  // };

  const handleGoalClick = (goal) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      goal: prevAnswers.goal === goal
        ? ''  // If the selected goal matches the current goal, clear it
        : goal, // Otherwise, set the selected goal
    }));
    console.log(selectedAnswers.goal)
  };

  const isSelected = (question, answer) => selectedAnswers[question] === answer;

  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log(selectedAnswers)
    const res = await (
      await fetch(`http://localhost:4040/questions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          garden: selectedAnswers.garden,
          season: selectedAnswers.season,
          size: selectedAnswers.size,
          experience: selectedAnswers.experience,
          goal: selectedAnswers.goal,
          timeCommitment: selectedAnswers.timeCommitment,
        }),
      })
    ).text();
    console.log(res);
  }

  return (
    <div style={{ backgroundColor: 'pastelGreen', padding: '20px' }}>
      <h2>Where is your garden?</h2>
      {/* Existing question and answer choices */}
      <div>
      <button
          onClick={() => {handleClick('garden', 'Condo interior');}}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('garden', 'Condo interior') ? '#d2f5d8' : '',
            border: isSelected('garden', 'Condo interior') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('garden', 'Condo interior') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Condo interior
        </button>
        <button
          onClick={() => handleClick('garden', 'Condo balcony')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('garden', 'Condo balcony') ? '#d2f5d8' : '',
            border: isSelected('garden', 'Condo balcony') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('garden', 'Condo balcony') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Condo balcony
        </button>
        <button
          onClick={() => handleClick('garden', 'Company office')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('garden', 'Company office') ? '#d2f5d8' : '',
            border: isSelected('garden', 'Company office') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('garden', 'Company office') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Company office
        </button>
        <button
          onClick={() => handleClick('garden', 'Factory interior')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('garden', 'Factory interior') ? '#d2f5d8' : '',
            border: isSelected('garden', 'Factory interior') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('garden', 'Factory interior') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Factory interior
        </button>
        <button
          onClick={() => handleClick('garden', 'Building Rooftop')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('garden', 'Building Rooftop') ? '#d2f5d8' : '',
            border: isSelected('garden', 'Building Rooftop') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('garden', 'Building Rooftop') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Building Rooftop
        </button>
      </div>

      {/* Current Season */}
      <div>
        <h3>Current season?</h3>
        <button
          onClick={() => handleClick('season', 'Spring')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('season', 'Spring') ? '#d2f5d8' : '',
            border: isSelected('season', 'Spring') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('season', 'Spring') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Spring
        </button>
        <button
          onClick={() => handleClick('season', 'Summer')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('season', 'Summer') ? '#d2f5d8' : '',
            border: isSelected('season', 'Summer') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('season', 'Summer') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Summer
        </button>
        <button
          onClick={() => handleClick('season', 'Fall')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('season', 'Fall') ? '#d2f5d8' : '',
            border: isSelected('season', 'Fall') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('season', 'Fall') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Fall
        </button>
        <button
          onClick={() => handleClick('season', 'Winter')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('season', 'Winter') ? '#d2f5d8' : '',
            border: isSelected('season', 'Winter') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('season', 'Winter') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Winter
        </button>
      </div>

      {/* Garden Size */}
      <div>
        <h3>What size is your future garden?</h3>
        <button
          onClick={() => handleClick('size', 'Tiny (1-2 plants, 20 cm longest side)')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('size', 'Tiny (1-2 plants, 20 cm longest side)') ? '#d2f5d8' : '',
            border: isSelected('size', 'Tiny (1-2 plants, 20 cm longest side)') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('size', 'Tiny (1-2 plants, 20 cm longest side)') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Tiny (1-2 plants, 20 cm longest side)
        </button>
        <button
          onClick={() => handleClick('size', 'Small (3-5 plants, 50 cm longest side)')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('size', 'Small (3-5 plants, 50 cm longest side)') ? '#d2f5d8' : '',
            border: isSelected('size', 'Small (3-5 plants, 50 cm longest side)') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('size', 'Small (3-5 plants, 50 cm longest side)') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Small (3-5 plants, 50 cm longest side)
        </button>        <button
          onClick={() => handleClick('size', 'Medium (6-10 plants, 1 m longest side)')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('size', 'Medium (6-10 plants, 1 m longest side)') ? '#d2f5d8' : '',
            border: isSelected('size', 'Medium (6-10 plants, 1 m longest side)') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('size', 'Medium (6-10 plants, 1 m longest side)') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Medium (6-10 plants, 1 m longest side)
        </button>        <button
          onClick={() => handleClick('size', 'Large (11-20 plants, 1.5 m longest side)')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('size', 'Large (11-20 plants, 1.5 m longest side)') ? '#d2f5d8' : '',
            border: isSelected('size', 'Large (11-20 plants, 1.5 m longest side)') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('size', 'Large (11-20 plants, 1.5 m longest side)') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Large (11-20 plants, 1.5 m longest side)
        </button>        <button
          onClick={() => handleClick('size', 'Extra large (20+ plants, 2 m longest side)')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('size', 'Extra large (20+ plants, 2 m longest side)') ? '#d2f5d8' : '',
            border: isSelected('size', 'Extra large (20+ plants, 2 m longest side)') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('size', 'Extra large (20+ plants, 2 m longest side)') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Extra large (20+ plants, 2 m longest side)
        </button>
      </div>

      {/* Gardening Experience */}
      <div>
        <h3>What is your gardening experience?</h3>
        <button
          onClick={() => handleClick('experience', 'No prior gardening experience')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('experience', 'No prior gardening experience') ? '#d2f5d8' : '',
            border: isSelected('experience', 'No prior gardening experience') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('experience', 'No prior gardening experience') ? '0px 0px 5px 1px #40c267' : 'none',
          }}        >
          No prior gardening experience
        </button>
        <button
          onClick={() => handleClick('experience', 'Some Experience')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('experience', 'Some Experience') ? '#d2f5d8' : '',
            border: isSelected('experience', 'Some Experience') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('experience', 'Some Experience') ? '0px 0px 5px 1px #40c267' : 'none',
          }}        >
          Some gardening experience 
        </button>
        <button
          onClick={() => handleClick('experience', 'Experienced gardener')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('experience', 'Experienced gardener') ? '#d2f5d8' : '',
            border: isSelected('experience', 'Experienced gardener') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('experience', 'Experienced gardener') ? '0px 0px 5px 1px #40c267' : 'none',
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
            onChange={() => handleGoalClick('Save on Groceries')}
            checked={selectedAnswers.goal === 'Save on Groceries'}
          />
          Save money on groceries
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleGoalClick('Save money on transportation for groceries ')}
            checked={selectedAnswers.goal === 'Save money on transportation for groceries '}
          />
          Save money on transportation for groceries 
        </label>        <label>
          <input
            type="checkbox"
            onChange={() => handleGoalClick('Reduce carbon footprint')}
            checked={selectedAnswers.goal === 'Reduce carbon footprint'}
          />
          Reduce carbon footprint
        </label>        <label>
          <input
            type="checkbox"
            onChange={() => handleGoalClick('Learn how to garden ')}
            checked={selectedAnswers.goal === 'Learn how to garden'}
          />
          Learn how to garden 
        </label>        <label>
          <input
            type="checkbox"
            onChange={() => handleGoalClick('Eat self-grown crops ')}
            checked={selectedAnswers.goal === 'Eat self-grown crops'}
          />
          Eat self-grown crops 
        </label>        <label>
          <input
            type="checkbox"
            onChange={() => handleGoalClick('Improve health and nutrient intake')}
            checked={selectedAnswers.goal === 'Improve health and nutrient intake'}
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
          onClick={() => handleClick('timeCommitment', '2-4 Hours')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('timeCommitment', '2-4 Hours') ? '#d2f5d8' : '',
            border: isSelected('timeCommitment', '2-4 Hours') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('timeCommitment', '2-4 Hours') ? '0px 0px 5px 1px #40c267' : 'none',
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
          <button onClick={handleSubmit}>submit</button>
        </>
      )}
    </div>
  );
}

export default GardenQuiz;
