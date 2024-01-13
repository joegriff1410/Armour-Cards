import {
    Button,
    Card,
    Center,
    FormControl,
    FormLabel,
    Input,
    VStack,
} from '@chakra-ui/react';
import theme from '../theme';

const SignUpForm = () => {
    return (
        <Center>
            <Card
                backgroundColor={theme.colors.secondary}
                width="237px"
                height="316px"
                border="2px"
                borderColor="black"
            >
                <VStack>
                    <form action="">
                        <FormControl>
                            <FormLabel
                                color={theme.colors.primary}
                                fontSize="15px"
                                fontWeight="bold"
                                marginTop="10px"
                                marginX="10px"
                            >
                                Email address:
                            </FormLabel>
                            <Input
                                type="email"
                                marginX="auto"
                                border="black"
                                size="sm"
                            />
                            <FormLabel
                                color={theme.colors.primary}
                                fontSize="15px"
                                fontWeight="bold"
                                marginTop="10px"
                                marginX="10px"
                            >
                                Name:
                            </FormLabel>
                            <Input type="text" border="none" size="sm" />
                            <FormLabel
                                color={theme.colors.primary}
                                fontSize="15px"
                                fontWeight="bold"
                                marginTop="10px"
                                marginX="10px"
                            >
                                Password:
                            </FormLabel>
                            <Input type="password" border="none" size="sm" />
                        </FormControl>
                    </form>
                    <Button
                        bg={theme.colors.tertiary}
                        paddingX={50}
                        color={theme.colors.primary}
                        fontSize={20}
                        width="158px"
                        height="41px"
                    >
                        Sign Up
                    </Button>
                </VStack>
            </Card>
        </Center>
    );
};

export default SignUpForm;
