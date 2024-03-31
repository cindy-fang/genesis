import { createGlobalStyle } from 'styled-components';
import MPLUS1pRegular from './Fonts/MPLUS1p-Regular.ttf'; // Adjust the font file name and path

const GlobalFontStyle = createGlobalStyle`
@font-face {
    font-family: 'MPLUS1p-Regular';
    src: url(${MPLUS1pRegular}) format('truetype'); /* Use imported font variable */
    font-weight: normal;
    font-style: normal;
}

`;

export default GlobalFontStyle;
