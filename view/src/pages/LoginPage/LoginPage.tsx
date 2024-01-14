import { Box, VStack } from '@chakra-ui/react';
import LoginForm from '../../components/LoginForm';
import SocialLinks from '../../components/SocialLinks';

const LoginPage = () => {
    return (
        <>
            <VStack minHeight="100vh">
                <LoginForm />
                <Box marginTop="auto" marginBottom="5%">
                    <SocialLinks />
                </Box>
            </VStack>
        </>
    );
};

export default LoginPage;
