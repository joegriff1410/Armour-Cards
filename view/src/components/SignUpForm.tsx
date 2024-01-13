import {
    Box,
    Button,
    Card,
    CardBody,
    Center,
    Container,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Heading,
    Icon,
    Input,
    Stack,
    VStack,
} from '@chakra-ui/react';
import theme from '../theme';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';

// TODO: refactor styles into objects

const SignUpForm = () => {
    return (
        // <Center>
        //     <Card
        //         backgroundColor={theme.colors.secondary}
        //         width="237px"
        //         height="316px"
        //         border="10px"
        //         borderColor="black"
        //     >
        //         <VStack>
        //             <form action="">
        //                 <FormControl>
        //                     <FormLabel
        //                         color={theme.colors.primary}
        //                         fontSize="15px"
        //                         fontWeight="bold"
        //                         marginTop="10px"
        //                         marginBottom="0"
        //                         marginX="3px"
        //                     >
        //                         Email address:
        //                     </FormLabel>
        //                     <Input
        //                         type="email"
        //                         marginX="auto"
        //                         border="1px"
        //                         borderColor="black"
        //                         borderRadius="5px"
        //                         background="black"
        //                         color={theme.colors.secondary}
        //                         size="sm"
        //                     />
        //                     <FormLabel
        //                         color={theme.colors.primary}
        //                         fontSize="15px"
        //                         fontWeight="bold"
        //                         marginTop="10px"
        //                         marginBottom="0"
        //                         marginX="3px"
        //                     >
        //                         Name:
        //                     </FormLabel>
        //                     <Input
        //                         type="text"
        //                         marginX="auto"
        //                         border="1px"
        //                         borderColor="black"
        //                         borderRadius="5px"
        //                         background="black"
        //                         color={theme.colors.secondary}
        //                         size="sm"
        //                     />
        //                     <FormLabel
        //                         color={theme.colors.primary}
        //                         fontSize="15px"
        //                         fontWeight="bold"
        //                         marginTop="10px"
        //                         marginBottom="0"
        //                         marginX="3px"
        //                     >
        //                         Password:
        //                     </FormLabel>
        //                     <Input
        //                         type="password"
        //                         marginX="auto"
        //                         border="1px"
        //                         borderColor="black"
        //                         borderRadius="5px"
        //                         background="black"
        //                         color={theme.colors.secondary}
        //                         size="sm"
        //                     />
        //                 </FormControl>
        //                 <Container margin={['10px', 'auto']}>
        //                     <Icon
        //                         as={FcGoogle}
        //                         background="white"
        //                         paddingX="10px"
        //                         width="50px"
        //                         height='25px'
        //                         marginX="5px"
        //                         borderRadius='5px'
        //                     ></Icon>
        //                     <Icon
        //                         as={AiFillApple}
        //                         background="white"
        //                         paddingX="10px"
        //                         width="50px"
        //                         height='25px'
        //                         marginX="5px"
        //                         borderRadius='5px'
        //                     ></Icon>
        //                     <Icon
        //                         as={FaFacebookSquare}
        //                         color="#0866ff"
        //                         background="white"
        //                         paddingX="10px"
        //                         paddingY='5px'
        //                         width="50px"
        //                         height='25px'
        //                         marginX="5px"
        //                         borderRadius='5px'
        //                     ></Icon>
        //                 </Container>
        //             </form>
        //             <Button
        //                 bg={theme.colors.tertiary}
        //                 paddingX={50}
        //                 color={theme.colors.primary}
        //                 fontSize={20}
        //                 width="158px"
        //                 height="41px"
        //                 // marginTop="30px"
        //             >
        //                 Sign Up
        //             </Button>
        //         </VStack>
        //     </Card>
        // </Center>

        <Box>
            <Center>
                <Stack spacing='4'>
                    <VStack as="header" spacing="6" marginTop="8">
                        <Heading
                            as="h1"
                            color={theme.colors.text}
                            fontFamily={theme.fonts.heading}
                            marginBottom={5}
                            size="2xl"
                            textAlign="center"
                        >
                            SIGN UP FOR ARMOUR CARDS
                        </Heading>
                    </VStack>
                    <Card
                        backgroundColor="#D9D9D9"
                        borderColor="black"
                        maxWidth="240px"
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
                </Stack>
            </Center>
        </Box>
    );
};

export default SignUpForm;
