import { MoonIcon } from '@chakra-ui/icons';
import { Badge, HStack, IconButton } from '@chakra-ui/react';

const NavBar = () => {
    return (
        <HStack>
            {/* TODO: dynamically render countries */}
            <Badge variant="outline" border="1px" borderColor="black">
                Russia
            </Badge>
            <IconButton aria-label={'Colour scheme change'} icon={<MoonIcon />} variant='outline'/>
        </HStack>
    );
};

export default NavBar;
