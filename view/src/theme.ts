import { ThemeConfig, extendTheme } from '@chakra-ui/react';
import '@fontsource/oxanium/600.css';

const colors = {
    primary: '#1B202C',
    secondary: '#D9D9D9',
    tertiary: '#00959E',
    text: '#FFFFFF',
    links: '#FFFFFF60'
};

const fonts = {
    heading: `oxanium`,
    body: 'oxanium',
};

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme({ colors, fonts, config });

export default theme;
