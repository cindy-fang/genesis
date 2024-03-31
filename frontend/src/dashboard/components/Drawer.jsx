import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Catalogue = () => {
    const [open, setOpen] = useState(false);

    const handleToggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <div>
            <button onClick={handleToggleDrawer}>Open Sidebar</button>
            <Drawer
                anchor="left"
                open={open}
                onClose={handleToggleDrawer}
            >
                <List>
                    <ListItem button onClick={handleToggleDrawer}>
                        <ListItemText primary="YOUR PLANTS" />
                    </ListItem>
                    <ListItem button onClick={handleToggleDrawer}>
                        <ListItemText primary="Aloe vera" />
                    </ListItem>
                    <ListItem button onClick={handleToggleDrawer}>
                        <ListItemText primary="Venus fly trap" />
                    </ListItem>
                    <ListItem button onClick={handleToggleDrawer}>
                        <ListItemText primary="Carrot" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};

export default Catalogue;



// import React, { useState } from 'react'
// import {slide as Menu} from 'react-burger-menu';
// import styled from 'styled-components'

// const Dashboard = () => {

//     const [showDialogue, setShowDialogue] = useState(false);

//     return (
//         <div>
//             <center>
//                 <div>
//                     <div>
//                         {
//                             showDialogue && (<BurgerMenu/>)
//                         }
//                         <button onClick={() => setShowDialogue(!showDialogue)}>CATALOGUE</button>
//                     </div>
//                     <div>
//                         <h1>(User&apos;s) Garden</h1>
//                         <TABLE>
//                             <tbody>
//                                 <tr>
//                                     <td>1</td>
//                                     <td>2</td>
//                                     <td>3</td>
//                                 </tr>
//                                 <tr>
//                                     <td>4</td>
//                                     <td>5</td>
//                                     <td>6</td>
//                                 </tr>
//                                 <tr>
//                                     <td>7</td>
//                                     <td>8</td>
//                                     <td>9</td>
//                                 </tr>
//                             </tbody>
//                         </TABLE>
//                     </div>
//                 </div>

//                 <div>
//                     <ul>
//                         YOUR PLANTS
//                         <LI>Aloe vera</LI>
//                         <LI>Venus fly trap</LI>
//                         <LI>carrot</LI>
//                     </ul>
//                 </div>
//             </center>
//         </div>
//     )
// }

// const BurgerMenu = () => {
//     return (
//         <Menu>
//             <ul>
//                 RECOMMENDED PLANTS
//                 <LI>Aloe vera</LI>
//                 <LI>Venus fly trap</LI>
//                 <LI>carrot</LI>
//                 <LI>abcdef</LI>
//             </ul>
//         </Menu>
//     );
// };

// const TABLE = styled.table`
//     background-color: red;
//     padding: 3rem;
//     margin-bottom: 4rem;
// `;

// const LI = styled.li`
//     list-style-type: none;
// `;

// export default Dashboard