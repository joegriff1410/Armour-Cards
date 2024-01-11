import { Box, Heading, Link, Text, VStack } from '@chakra-ui/react';
import LoginButton from '../../components/ui/LoginButton';
import theme from '../../theme';

const LoginPage = () => {
    return (
        <>
            <Box padding={5} marginTop="65vh">
                <VStack>
                    <Heading
                        fontFamily={theme.fonts.heading}
                        color={theme.colors.secondary}
                        size="2xl"
                        marginBottom={5}
                    >
                        ARMOUR CARDS
                    </Heading>
                    <LoginButton />
                    <Text color={theme.colors.secondary}>
                        Don't have an account?
                    </Text>
                    <Text color={theme.colors.secondary}>
                        {/* TODO: link to sign up page */}
                        Sign up <Link color={theme.colors.tertiary}>Here!</Link>
                    </Text>
                </VStack>
            </Box>
        </>
    );
};

export default LoginPage;
