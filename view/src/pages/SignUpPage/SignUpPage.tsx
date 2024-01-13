import { Box, Button } from '@chakra-ui/react';
import SocialLinks from '../../components/ui/SocialLinks';
import CardTemplate from '../../components/ui/Card';
import theme from '../../theme';

const SignUpPage = () => {
    return (
        <>
            <CardTemplate />
            <Button
                bg={theme.colors.tertiary}
                paddingX={50}
                color={theme.colors.primary}
                marginBottom={3}
                fontSize={20}
                marginX="auto"
            >
                Sign Up
            </Button>
            <Box>
                <SocialLinks />
            </Box>
        </>
    );
};

export default SignUpPage;
