import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    if (colorMode === 'dark')
        return (
            <IconButton
                aria-label={'Colour scheme change'}
                icon={<MoonIcon />}
                variant="outline"
                onClick={toggleColorMode}
            />
        );

    if (colorMode === 'light')
        return (
            <IconButton
                aria-label={'Colour scheme change'}
                icon={<SunIcon />}
                variant="outline"
                onClick={toggleColorMode}
            />
        );
};

export default ColorModeSwitch;
