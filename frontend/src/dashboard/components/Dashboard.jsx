import React from 'react'
import styled from 'styled-components'
import Catalogue from './Drawer';

const Dashboard = () => {

    return (
        <div>
            <center>
                <h1>(User&apos;s) Garden</h1>
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