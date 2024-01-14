import { Box, Stack, VStack } from '@chakra-ui/react';
import SocialLinks from '../../components/SocialLinks';
import NavBar from '../../components/NavBar';
import CardTemplate from '../../components/CardTemplate';
import RatingButtons from '../../components/RatingButtons';

const FlashCardsPage = () => {
    return (
        <>
            <Stack minHeight="100vh">
                <NavBar />
                <CardTemplate />
                <VStack marginTop='50%'>
                    <RatingButtons />
                </VStack>
                <Box marginTop="auto" marginBottom="5%">
                    <SocialLinks />
                </Box>
            </Stack>
        </>
    );
};

export default FlashCardsPage;
