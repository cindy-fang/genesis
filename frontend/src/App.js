import styled from 'styled-components';
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';
import 'survey-core/defaultV2.min.css';


const surveyJson = {
    elements: [
        {
            type: 'radiogroup',
            name: 'Location',
            title: 'Where is your garden?',
            choices: ['Condo interior','Condo balcony','Company office','Factory interior','Building Rooftop']
        },
        {
            type: 'radiogroup',
            name: 'Season',
            title: 'Current Season',
            choices: ['Sprint','Summer','Fall','Winter']
        },
        {
            name: "Experience",
            title: "Experience level?",
            type: "text",
        },
        {
            name: "Goal",
            title: "Goals?",
            type: "text"
        },
        {
            name: "TimeCommitment",
            title: "Time Commitment?",
            type: "text",
        }, 
    ]
  };

function App() {
    const onCompleteSurvey = (survey, options) => {
        const surveyData = survey.getPlainData();
        console.log(surveyData);
    }

    const model = new Model(surveyJson);
    return <Survey model={model} onComplete={onCompleteSurvey} />
    return (
    <div className="App">
        <center>
            <FORM action="">
                <label htmlFor="">Where is your garden? </label>
                <select name="" id="">
                    <option value="indoor">indoor</option>
                    <option value="outdoor">outdoor</option>
                    <option value="yard">yard</option>
                    <option value="balcony">balcony</option>
                </select>
                <br />

                <label htmlFor="">Current season? </label>
                <input type="text" name="" id="" /><br />

                <label htmlFor="">Take a picture of the garden space (or some way to determine future garden size dimensions): </label>
                <input type="text" name="" id="" /><br />

                <label htmlFor="">User gardening experience level? </label>
                <select name="" id="">
                    <option value="entry">entry</option>
                    <option value="mid">mid</option>
                    <option value="senior">senior</option>
                </select><br />

                <label htmlFor="">User goals: </label>
                <select name="" id="">
                    <option value="save money">save money</option>
                    <option value="eat healthy">eat healthy</option>
                    <option value="other">other</option>
                </select><br />

                <label htmlFor="">User time commitment </label>
                <input type="text" name="" id="" /><br />

                <button type="submit">Submit!</button>
            </FORM>
        </center>
    </div>
    );
}

const FORM = styled.form`
    padding: 2rem;
    background-color: lightgray;
    border: solid black;
    border-radius: 8px;
    font-family: sans-serif;
`;

export default App;
