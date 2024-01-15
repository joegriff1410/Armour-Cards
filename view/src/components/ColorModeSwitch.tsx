import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';

const ColorModeSwitch = () => {
    // Hooks
    const { colorMode, toggleColorMode } = useColorMode();
    const primaryColor = useColorModeValue('#1B202C', '#D9D9D9');
    const menuButtonColor = useColorModeValue('#fff', '#1B202C');

    if (colorMode === 'dark')
        return (
            <IconButton
                aria-label={'Colour scheme change'}
                bgColor={primaryColor}
                color={menuButtonColor}
                icon={<MoonIcon />}
                variant="outline"
                onClick={toggleColorMode}
            />
        );

    if (colorMode === 'light')
        return (
            <IconButton
                aria-label={'Colour scheme change'}
                bgColor={primaryColor}
                color={menuButtonColor}
                icon={<SunIcon />}
                variant="outline"
                onClick={toggleColorMode}
            />
        );
};

export default ColorModeSwitch;
