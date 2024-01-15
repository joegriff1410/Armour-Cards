import { Box, Stack, VStack, useColorModeValue } from '@chakra-ui/react';
import SocialLinks from '../../components/SocialLinks';
import NavBar from '../../components/NavBar';
import CardTemplate from '../../components/CardTemplate';
import RatingButtons from '../../components/RatingButtons';

const FlashCardsPage = () => {
    const backgroundColor = useColorModeValue('#D9D9D9', '#1B202C')

    return (
        <>
            <Stack minHeight="100vh" backgroundColor={backgroundColor}>
                <NavBar />
                <Box marginTop='150px'>
                    <CardTemplate />
                </Box>
                <VStack marginTop='60px'>
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
