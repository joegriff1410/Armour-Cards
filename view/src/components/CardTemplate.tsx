import { Card, CardBody, Center } from '@chakra-ui/react';

const CardTemplate = () => {
    return (
        // <Center>
        //     <Card
        //         backgroundColor={theme.colors.secondary}
        //         width="237px"
        //         height="316px"
        //         border="2px"
        //         borderColor="black"
        //     ></Card>
        // </Center>
        <Center>
                        <Card
                            backgroundColor="#D9D9D9"
                            borderColor="black"
                            maxWidth="240px"
                            marginTop="30%"
                        >
                            <CardBody>
                                
                            </CardBody>
                        </Card>
                    </Center>
    );
};

export default CardTemplate;
