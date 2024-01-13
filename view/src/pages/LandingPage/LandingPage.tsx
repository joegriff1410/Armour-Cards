import {
    Box,
    Button,
    Heading,
    Link,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import SocialLinks from '../../components/SocialLinks';
import theme from '../../theme';

const LandingPage = () => {
    return (
        <>
            <Stack minHeight="100vh">
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
                        <RouterLink to="login">
                            <Button
                                _hover={{ bg: '#006167' }}
                                bg={theme.colors.tertiary}
                                color={theme.colors.primary}
                                fontSize={20}
                                marginBottom={3}
                                paddingX={50}
                            >
                                Login
                            </Button>
                        </RouterLink>

                        <Text color={theme.colors.text} fontSize="md">
                            Don't have an account?
                        </Text>
                        <Text color={theme.colors.text} fontSize="sm">
                            Sign up{' '}
                            <RouterLink to={'/sign-up'}>
                                <Link as="label" color={theme.colors.tertiary}>
                                    Here!
                                </Link>
                            </RouterLink>
                        </Text>
                    </VStack>
                </Box>
                <Box marginTop="auto" marginBottom="5%">
                    <SocialLinks />
                </Box>
            </Stack>
        </>
    );
};

export default LandingPage;
