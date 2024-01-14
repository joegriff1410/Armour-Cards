import { HamburgerIcon, MoonIcon } from '@chakra-ui/icons';
import {
    Badge,
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Icon,
    IconButton,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import theme from '../theme';

const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);

    return (
        <Flex
            alignItems="center"
            as="nav"
            gap="5px"
            justify="space-between"
            padding="10px"
        >
            {/* TODO: add logo */}
            <Icon marginRight="40px" />
            {/* TODO: dynamically render countries */}
            <Badge
                background={theme.colors.secondary}
                border="1px"
                borderColor="black"
                borderRadius="5px"
                color={theme.colors.primary}
                marginLeft="50px"
            >
                <Text
                    fontFamily={theme.fonts.heading}
                    fontSize="20px"
                    padding="4px"
                >
                    Russia
                </Text>
            </Badge>
            {/* TODO: dynamically render mode */}
            <Box marginLeft="40px">
                <IconButton
                    aria-label={'Colour scheme change'}
                    icon={<MoonIcon />}
                    variant="outline"
                />
                <IconButton
                    aria-label={'menu button'}
                    color={theme.colors.tertiary}
                    icon={<HamburgerIcon />}
                    marginLeft="5px"
                    onClick={onOpen}
                    ref={btnRef}
                    variant="outline"
                >
                    Open
                </IconButton>
            </Box>
            <Drawer
                finalFocusRef={btnRef}
                isOpen={isOpen}
                onClose={onClose}
                placement="right"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader fontFamily={theme.fonts.heading}>
                        Pick a country
                    </DrawerHeader>
                    <DrawerBody>
                        {/* TODO: dynamically render based on data */}
                        <Button>China</Button>
                    </DrawerBody>
                    <DrawerFooter>
                        <Text
                            color={theme.colors.links}
                            fontFamily={theme.fonts.body}
                            fontSize="sm"
                        >
                            ARMOUR CARDS
                        </Text>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
};

export default NavBar;
