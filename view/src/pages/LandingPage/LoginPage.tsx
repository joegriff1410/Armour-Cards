import { Box, Heading, Link, Text, VStack } from '@chakra-ui/react';
import LoginButton from '../../components/ui/LoginButton';
import theme from '../../theme';
import SocialLinks from '../../components/ui/SocialLinks';

const LandingPage = () => {
    return (
        <>
            <Box padding={5} marginTop="65vh">
                <VStack>
                    <Heading
                        fontFamily={theme.fonts.heading}
                        color={theme.colors.text}
                        size="2xl"
                        marginBottom={5}
                    >
                        ARMOUR CARDS
                    </Heading>
                    <LoginButton />
                    <Text color={theme.colors.text} fontSize="md">
                        Don't have an account?
                    </Text>
                    <Text color={theme.colors.text} fontSize="sm">
                        {/* TODO: link to sign up page */}
                        Sign up <Link color={theme.colors.tertiary}>Here!</Link>
                    </Text>
                </VStack>
            </Box>
            <Box marginTop="7">
                <SocialLinks />
            </Box>
        </>
    );
};

export default LandingPage;
