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
                    <VStack as="header" spacing="9">
                        <Heading
                            as="h1"
                            color={theme.colors.text}
                            fontFamily={theme.fonts.heading}
                            marginBottom={5}
                            size="xl"
                            textAlign="center"
                            marginTop="5%"
                        >
                            SIGN UP FOR ARMOUR CARDS
                        </Heading>
                    </VStack>
                    <Center>
                        <Card
                            backgroundColor="#D9D9D9"
                            borderColor="black"
                            maxWidth="240px"
                            marginTop="30%"
                        >
                            <CardBody>
                                <form>
                                    <Stack>
                                        <FormControl>
                                            <FormLabel
                                                color={theme.colors.primary}
                                                size="sm"
                                                fontFamily={theme.fonts.body}
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
                                                color={theme.colors.primary}
                                                fontFamily={theme.fonts.body}
                                                size="sm"
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
                                                color={theme.colors.primary}
                                                size="sm"
                                                fontFamily={theme.fonts.body}
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
                                            _hover={{ bg: '#006167' }}
                                            bg={theme.colors.tertiary}
                                            color={theme.colors.primary}
                                            fontFamily={theme.fonts.body}
                                            fontSize={20}
                                            size="sm"
                                        >
                                            Sign Up
                                        </Button>
                                    </Stack>
                                </form>
                            </CardBody>
                        </Card>
                    </Center>

                    <Card variant="outline" borderColor="#fff">
                        <CardBody>
                            <Center>
                                <HStack spacing="1">
                                    <Icon
                                        as={FcGoogle}
                                        background="white"
                                        borderRadius="5px"
                                        height="25px"
                                        marginX="5px"
                                        paddingX="10px"
                                        width="50px"
                                    ></Icon>
                                    <Icon
                                        as={FaApple}
                                        background="white"
                                        borderRadius="5px"
                                        color="black"
                                        height="25px"
                                        marginX="5px"
                                        paddingX="10px"
                                        width="50px"
                                    ></Icon>
                                    <Icon
                                        as={FaFacebookSquare}
                                        background="white"
                                        borderRadius="5px"
                                        color="#0866ff"
                                        height="25px"
                                        marginX="5px"
                                        paddingX="10px"
                                        paddingY="5px"
                                        width="50px"
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
