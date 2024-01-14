import { Button, HStack, theme } from '@chakra-ui/react';

const RatingButtons = () => {
    return (
        <HStack>
            <Button color="red" variant='outline' fontFamily={theme.fonts.body}>
                Again
            </Button>
            <Button color="orange" variant='outline' fontFamily={theme.fonts.body}>
                Hard
            </Button>
            <Button color="green" variant='outline' fontFamily={theme.fonts.body}>
                Easy
            </Button>
        </HStack>
    );
};
export default RatingButtons;
