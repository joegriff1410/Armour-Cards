import { Box } from '@chakra-ui/react';
import SignUpForm from '../../components/SignUpForm';
import SocialLinks from '../../components/SocialLinks';

const SignUpPage = () => {
    return (
        <>
            <Box marginTop="60%">
                <SignUpForm />
                <Box marginTop="65%">
                    <SocialLinks />
                </Box>
            </Box>
        </>
    );
};

export default SignUpPage;
