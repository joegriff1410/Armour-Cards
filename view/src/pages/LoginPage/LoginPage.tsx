import { Box, Heading, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import LoginButton from '../../components/ui/LoginButton';

const LoginPage = () => {
    return (
        <>
            <Box padding={5} mt="75vh">
                <VStack>
                    <Heading fontFamily="Oxanium">ARMOUR CARDS</Heading>
                    <LoginButton />
                    <Text>Don't have an account?</Text>
                    <Text>
                        Sign up <Link>Here</Link>
                    </Text>
                </VStack>
            </Box>
        </>
    );
};

export default LoginPage;
