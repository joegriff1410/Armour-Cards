import { Card, CardBody } from '@chakra-ui/react';
import theme from '../../theme';

const CardTemplate = () => {
    return (
        <Card
            backgroundColor={theme.colors.secondary}
            width="237px"
            marginX="auto"
            marginY="70%"
        >
            <CardBody></CardBody>
        </Card>
    );
};

export default CardTemplate;
