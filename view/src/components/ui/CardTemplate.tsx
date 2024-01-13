import { Card, Center } from '@chakra-ui/react';
import theme from '../../theme';

const CardTemplate = () => {
    return (
        <Center>
            <Card
                backgroundColor={theme.colors.secondary}
                width="237px"
                height="316px"
                border='2px'
                borderColor='black'
            ></Card>
        </Center>
    );
};

export default CardTemplate;
