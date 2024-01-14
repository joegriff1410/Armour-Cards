import { Card, CardBody, Center, Image, useColorModeValue } from '@chakra-ui/react';

const vehicles = [
    {
        id: 1,
        src: './src/assets/T-90S-Main-Battle-Tank.webp',
        name: 't-90',
        wheels: 8,
        hull: 'hullish',
        armanent: '120mm',
        turret: 'shitora sight',
    },
];

const CardTemplate = () => {
    const primaryColor = useColorModeValue('#1B202C', '#D9D9D9');

    return (
        <Center>
            <Card
                backgroundColor={primaryColor}
                border="1px"
                borderColor="black"
                maxWidth="240px"
                minHeight="320px"
                marginTop="30%"
            >
                <CardBody>
                    <Image
                        src={vehicles[0].src}
                        borderRadius="5px"
                        border="1px"
                        borderColor="black"
                        marginTop="25%"
                    ></Image>
                </CardBody>
            </Card>
        </Center>
    );
};

export default CardTemplate;
