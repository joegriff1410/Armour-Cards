import { Box, Button } from '@chakra-ui/react';
import SocialLinks from '../../components/SocialLinks';
import CardTemplate from '../../components/CardTemplate';
import theme from '../../theme';

const SignUpPage = () => {
    return (
        <>
            <Box marginTop="60%">
                <CardTemplate>
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
                </CardTemplate>
                <Box marginTop="65%">
                    <SocialLinks />
                </Box>
            </Box>
        </>
    );
};

export default SignUpPage;
