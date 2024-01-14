import { Card, CardBody, Center, Image } from '@chakra-ui/react';

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
                border="1px"
                borderColor="black"
                maxWidth="240px"
                minHeight='320px'
                marginTop="30%"
            >
                <CardBody>
                    <Image src={vehicles[0].src} borderRadius='5px' border='1px' borderColor='black' marginTop='25%'></Image>
                </CardBody>
            </Card>
        </Center>
    );
};

export default CardTemplate;
