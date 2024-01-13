import { Button } from '@chakra-ui/react';
import theme from '../../theme';

const SignUpButton = () => {
    return (
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
    );
};

export default SignUpButton;
