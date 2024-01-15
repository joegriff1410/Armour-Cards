import { Button, HStack, theme, useColorModeValue } from '@chakra-ui/react';

const RatingButtons = () => {
    // Hooks
    const ratingButtonColor = useColorModeValue('#1a202c', '#D9D9D9')

    return (
        <HStack>
            <Button color="red" variant='outline' fontFamily={theme.fonts.body} backgroundColor={ratingButtonColor}>
                Again
            </Button>
            <Button color="orange" variant='outline' fontFamily={theme.fonts.body} backgroundColor={ratingButtonColor}>
                Hard
            </Button>
            <Button color="green" variant='outline' fontFamily={theme.fonts.body} backgroundColor={ratingButtonColor}>
                Easy
            </Button>
        </HStack>
    );
};
export default RatingButtons;
