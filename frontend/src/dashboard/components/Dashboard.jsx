import React from 'react'
import styled from 'styled-components'
import Catalogue from './Drawer';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {

    const location = useLocation();
    const imgData = location.state;
    
    // const imgData = localStorage.getItem('imgData');

    return (
        <div>
            <center>
                <h1>(User&apos;s) Garden</h1>
                <img src={`data:image/jpeg;base64,${imgData}`} alt="" />
                <div>
                    <div>
                        <Catalogue/>
                    </div>
                    <div>
                        <TABLE>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>9</td>
                                </tr>
                            </tbody>
                        </TABLE>

                    </div>
                </div>

                <div>
                    <ul>
                        YOUR PLANTS
                        <LI>Aloe vera</LI>
                        <LI>Venus fly trap</LI>
                        <LI>carrot</LI>
                    </ul>
                </div>
            </center>
        </div>
    )
}

const TABLE = styled.table`
    background-color: red;
    padding: 3rem;
    margin-bottom: 4rem;
`;

const LI = styled.li`
    list-style-type: none;
`;


export default Dashboard