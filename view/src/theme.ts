import { extendTheme } from '@chakra-ui/react';
import '@fontsource/oxanium/600.css';

const colors = {
    primary: '#1B202C',
    secondary: '#D9D9D9',
    tertiary: '#00959E',
};

const fonts = {
    heading: `oxanium`,
    body: 'oxanium',
};

const theme = extendTheme({ colors, fonts });

export default theme;
