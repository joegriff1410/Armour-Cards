import { Box, Button, Heading, Link, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import SocialLinks from '../../components/SocialLinks';
import theme from '../../theme';

const LandingPage = () => {
    return (
        <>
            <Box padding={5} marginTop="65vh">
                <VStack>
                    <Heading
                        as="h1"
                        color={theme.colors.text}
                        fontFamily={theme.fonts.heading}
                        marginBottom={5}
                        size="2xl"
                    >
                        ARMOUR CARDS
                    </Heading>
                    <Button
                        bg={theme.colors.tertiary}
                        color={theme.colors.primary}
                        fontSize={20}
                        marginBottom={3}
                        paddingX={50}
                    >
                        Login
                    </Button>

                    <Text color={theme.colors.text} fontSize="md">
                        Don't have an account?
                    </Text>
                    <Text color={theme.colors.text} fontSize="sm">
                        Sign up{' '}
                        <Link color={theme.colors.tertiary}>
                            <RouterLink to={'/sign-up'}>Here!</RouterLink>
                        </Link>
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
