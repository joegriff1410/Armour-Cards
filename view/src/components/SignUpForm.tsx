import {
    Box,
    Button,
    Card,
    CardBody,
    Center,
    FormControl,
    FormLabel,
    HStack,
    Heading,
    Icon,
    Input,
    Stack,
    VStack,
} from '@chakra-ui/react';
import { FaApple, FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import theme from '../theme';

// TODO: refactor styles into objects

const SignUpForm = () => {
    return (
        <Box>
            <Center>
                <VStack spacing="4">
                    <VStack as="header" spacing="9" marginTop="8">
                        <Heading
                            as="h1"
                            color={theme.colors.text}
                            fontFamily={theme.fonts.heading}
                            marginBottom={5}
                            size="xl"
                            textAlign="center"
                            marginTop="25%"
                        >
                            SIGN UP FOR ARMOUR CARDS
                        </Heading>
                    </VStack>
                    <Center>
                        <Card
                            backgroundColor="#D9D9D9"
                            borderColor="black"
                            maxWidth="240px"
                            marginTop='30%'
                        >
                            <CardBody>
                                <form>
                                    <Stack>
                                        <FormControl>
                                            <FormLabel
                                                size="sm"
                                                color={theme.colors.primary}
                                            >
                                                Name:
                                            </FormLabel>
                                            <Input
                                                bg={theme.colors.primary}
                                                borderColor="black"
                                                borderRadius="3px"
                                                size="sm"
                                                type="text"
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel
                                                size="sm"
                                                color={theme.colors.primary}
                                            >
                                                Email Address:
                                            </FormLabel>
                                            <Input
                                                bg={theme.colors.primary}
                                                borderColor="black"
                                                borderRadius="3px"
                                                size="sm"
                                                type="email"
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel
                                                size="sm"
                                                color={theme.colors.primary}
                                            >
                                                Password:
                                            </FormLabel>
                                            <Input
                                                bg={theme.colors.primary}
                                                borderColor="black"
                                                borderRadius="3px"
                                                size="sm"
                                                type="password"
                                            />
                                        </FormControl>
                                        <Button
                                            bg={theme.colors.tertiary}
                                            color={theme.colors.primary}
                                            fontSize={20}
                                            size="sm"
                                            _active={{ bg: '#00959E50' }}
                                        >
                                            Sign Up
                                        </Button>
                                    </Stack>
                                </form>
                            </CardBody>
                        </Card>
                    </Center>

                    <Card variant="outline" borderColor="#00959E">
                        <CardBody>
                            <Center>
                                <HStack spacing="1">
                                    <Icon
                                        as={FcGoogle}
                                        background="white"
                                        paddingX="10px"
                                        width="50px"
                                        height="25px"
                                        marginX="5px"
                                        borderRadius="5px"
                                    ></Icon>
                                    <Icon
                                        as={FaApple}
                                        color="black"
                                        background="white"
                                        paddingX="10px"
                                        width="50px"
                                        height="25px"
                                        marginX="5px"
                                        borderRadius="5px"
                                    ></Icon>
                                    <Icon
                                        as={FaFacebookSquare}
                                        color="#0866ff"
                                        background="white"
                                        paddingX="10px"
                                        paddingY="5px"
                                        width="50px"
                                        height="25px"
                                        marginX="5px"
                                        borderRadius="5px"
                                    ></Icon>
                                </HStack>
                            </Center>
                        </CardBody>
                    </Card>
                </VStack>
            </Center>
        </Box>
    );
};

export default SignUpForm;
