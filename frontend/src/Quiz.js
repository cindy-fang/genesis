import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Checkbox from './Checkbox'; // Import the Checkbox component

function Quiz() {
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

  useEffect(() => {
    const handleScroll = () => {
      const questions = document.querySelectorAll('.question-container');
      questions.forEach(question => {
        if (isElementInViewport(question)) {
          question.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

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
    navigate('/garden');
    console.log(res);
  }

  return (
    <div>
    <style>{`
      .question-container {
        opacity: 0;
        transition: opacity 3s ease; /* Smoothly transition opacity over 0.5 seconds */
      }
      
      .question-container.show {
        opacity: 1;
      }
      
    `}</style>

    <div className="question-container">
    <div style={{ backgroundColor: 'pastelGreen', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "300px"}}>
      <h2 style={{ textAlign: 'center' }}>Where is your garden?</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
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
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
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
          onClick={() => handleClick('garden', 'Building rooftop')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('garden', 'Building rooftop') ? '#d2f5d8' : '',
            border: isSelected('garden', 'Building rooftop') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('garden', 'Building rooftop') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Building Rooftop
        </button>
      </div>
      </div>
      </div>
        
      {/* Current Season */}
      <div className="question-container">
      <div style={{ backgroundColor: 'pastelGreen', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Current Season?</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
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
      </div>
      </div>

      {/* Garden Size */}
      <div className="question-container">
      <div style={{ backgroundColor: 'pastelGreen', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>What size is your future garden?</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
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
        </button>        
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>

        <button
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
          onClick={() => handleClick('size', 'Extra Large (20+ plants, 2 m longest side)')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('size', 'Extra Large (20+ plants, 2 m longest side)') ? '#d2f5d8' : '',
            border: isSelected('size', 'Extra Large (20+ plants, 2 m longest side)') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('size', 'Extra Large (20+ plants, 2 m longest side)') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          Extra large (20+ plants, 2 m longest side)
        </button>
      </div>
      </div>
      </div>

      {/* Gardening Experience */}
      <div className="question-container">
      <div style={{ backgroundColor: 'pastelGreen', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>What is your gardening experience?</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
        <button
          onClick={() => handleClick('experience', 'No Prior Experience')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('experience', 'No Prior Experience') ? '#d2f5d8' : '',
            border: isSelected('experience', 'No Prior Experience') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('experience', 'No Prior Experience') ? '0px 0px 5px 1px #40c267' : 'none',
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
          onClick={() => handleClick('experience', 'Experienced')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('experience', 'Experienced') ? '#d2f5d8' : '',
            border: isSelected('experience', 'Experienced') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('experience', 'Experienced') ? '0px 0px 5px 1px #40c267' : 'none',
          }}        >
          Experienced gardener 
        </button>
      </div>
      </div>
      </div>


{/* Gardening Goals (allow multiple selections) */}
<div className="question-container">
<div style={{ backgroundColor: 'pastelGreen', padding: '20px' }}>
  <h2 style={{ textAlign: 'center' }}>What are your gardening goals? (Select all that apply)</h2>
  <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
    <label style={{ margin: '0.5rem', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
      <Checkbox
        type="checkbox"
        onChange={() => handleGoalClick('Save on Groceries')}
        checked={selectedAnswers.goal === 'Save on Groceries'}
        style={{ marginRight: '0.5rem', width: '20px', height: '20px' }}
      />
      Save money on groceries
    </label>
    <label style={{ margin: '0.5rem', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
      <Checkbox
        type="checkbox"
        onChange={() => handleGoalClick('Reduce Transportation Costs')}
        checked={selectedAnswers.goal === 'Reduce Transportation Costs'}
        style={{ marginRight: '0.5rem', width: '20px', height: '20px' }}
      />
      Save money on transportation for groceries 
    </label>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
    <label style={{ margin: '0.5rem', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
      <Checkbox
        type="checkbox"
        onChange={() => handleGoalClick('Reduce Carbon Footprint')}
        checked={selectedAnswers.goal === 'Reduce Carbon Footprint'}
        style={{ marginRight: '0.5rem', width: '20px', height: '20px' }}
      />
      Reduce carbon footprint
    </label>
    <label style={{ margin: '0.5rem', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
      <Checkbox
        type="checkbox"
        onChange={() => handleGoalClick('Learn to Garden')}
        checked={selectedAnswers.goal === 'Learn to Garden'}
        style={{ marginRight: '0.5rem', width: '20px', height: '20px' }}
      />
      Learn how to garden 
    </label>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
    <label style={{ margin: '0.5rem', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
      <Checkbox
        type="checkbox"
        onChange={() => handleGoalClick('Eat Self-Grown')}
        checked={selectedAnswers.goal === 'Eat Self-Grown'}
        style={{ marginRight: '0.5rem', width: '20px', height: '20px' }}
      />
      Eat self-grown crops 
    </label>
    <label style={{ margin: '0.5rem', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
      <Checkbox
        type="checkbox"
        onChange={() => handleGoalClick('Improve Health')}
        checked={selectedAnswers.goal === 'Improve Health'}
        style={{ marginRight: '0.5rem', width: '20px', height: '20px' }}
      />
      Improve health and nutrient intake
    </label>
  </div>
</div>
</div>

      <div className="question-container">
      <div style={{ backgroundColor: 'pastelGreen', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Time commitment</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
        <button
          onClick={() => handleClick('timeCommitment', 'Less Than 2 Hours')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('timeCommitment', 'Less Than 2 Hours') ? '#d2f5d8' : '',
            border: isSelected('timeCommitment', 'Less Than 2 Hours') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('timeCommitment', 'Less Than 2 Hours') ? '0px 0px 5px 1px #40c267' : 'none',
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
          onClick={() => handleClick('timeCommitment', '4-7 Hours')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('timeCommitment', '4-7 Hours') ? '#d2f5d8' : '',
            border: isSelected('timeCommitment', '4-7 Hours') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('timeCommitment', '4-7 Hours') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          4-7 hours per week
        </button>
        <button
          onClick={() => handleClick('timeCommitment', '7+ Hours')}
          style={{
            margin: '1rem',
            padding: '1rem',
            backgroundColor: isSelected('timeCommitment', '7+ Hours') ? '#d2f5d8' : '',
            border: isSelected('timeCommitment', '7+ Hours') ? '2px solid #40c267' : 'none',
            borderRadius: '10px',
            boxShadow: isSelected('timeCommitment', '7+ Hours') ? '0px 0px 5px 1px #40c267' : 'none',
          }}
        >
          7+ hours per week 
        </button>
      </div>
      </div>
      </div>

      {Object.values(selectedAnswers).every((answer) => answer !== null) && (
      
          <div className="question-container">
          <div style={{ backgroundColor: 'pastelGreen', padding: '20px' }}>
          <h2 style={{ textAlign: 'center' }}>Analyzing Answers...</h2>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
          <button
            onClick={handleSubmit}
            style={{
              padding: '1rem',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Go to My Garden
          </button>
          
        </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
