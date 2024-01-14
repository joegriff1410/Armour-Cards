import { MoonIcon } from '@chakra-ui/icons';
import { Badge, HStack, IconButton, Text } from '@chakra-ui/react';
import theme from '../theme';

const NavBar = () => {
    return (
        <HStack>
            {/* TODO: dynamically render countries */}
            <Badge
                variant="outline"
                border="1px"
                borderColor="black"
                color={theme.colors.secondary}
            >
                <Text fontFamily={theme.fonts.heading}>Russia</Text>
            </Badge>
            {/* TODO: dynamically render mode */}
            <IconButton
                aria-label={'Colour scheme change'}
                icon={<MoonIcon />}
                variant="outline"
            />
        </HStack>
    );
};

export default NavBar;
