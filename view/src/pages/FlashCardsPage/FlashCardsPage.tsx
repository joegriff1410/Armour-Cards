import { Box } from '@chakra-ui/react';
import SocialLinks from '../../components/SocialLinks';
import NavBar from '../../components/NavBar';

const FlashCardsPage = () => {
    return (
        <>
            <NavBar />
            <Box marginTop="auto" marginBottom="5%">
                <SocialLinks />
            </Box>
        </>
    );
};

export default FlashCardsPage;
