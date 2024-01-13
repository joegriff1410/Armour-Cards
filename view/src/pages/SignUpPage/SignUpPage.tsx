import { Box, VStack } from '@chakra-ui/react';
import SignUpForm from '../../components/SignUpForm';
import SocialLinks from '../../components/SocialLinks';

const SignUpPage = () => {
    return (
        <>
            <VStack minHeight="100vh">
                <SignUpForm />
                <Box marginTop="auto" marginBottom="5%">
                    <SocialLinks />
                </Box>
            </VStack>
        </>
    );
};

export default SignUpPage;
