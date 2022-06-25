import { createGlobalStyle } from 'styled-components';
import nunito from './fonts/NunitoSans-Regular.woff';
import nunitoBold from './fonts/NunitoSans-Bold.woff';
import nunitoSemiBold from './fonts/NunitoSans-SemiBold.woff';
import nunitoExtraBold from './fonts/NunitoSans-ExtraBold.woff';

const GlobalStyle = createGlobalStyle`
   @font-face {
        font-family: 'Nunito Sans';
        src: local('Nunito Sans Regular'), 
        local('Nunito Sans Bold'), 
        local('Nunito Sans Semi Bold'), 
        local('Nunito Sans ExtraBold'),

        url(${nunito}) format('woff'),
        url(${nunitoBold}) format('woff'),
        url(${nunitoSemiBold}) format('woff'),
        url(${nunitoExtraBold}) format('woff');
    }
`;

export default GlobalStyle;
