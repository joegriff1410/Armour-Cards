import { Box, Stack } from '@chakra-ui/react';
import SocialLinks from '../../components/SocialLinks';
import NavBar from '../../components/NavBar';

const FlashCardsPage = () => {
    return (
        <>
            <Stack minHeight="100vh">
                <NavBar />
                <Box marginTop="auto" marginBottom="5%">
                    <SocialLinks />
                </Box>
            </Stack>
        </>
    );
};

export default FlashCardsPage;
