import { HamburgerIcon, MoonIcon } from '@chakra-ui/icons';
import {
    Badge,
    HStack,
    IconButton,
    Text,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Spacer,
    Center,
    Box,
    VStack,
    Flex,
    Icon,
} from '@chakra-ui/react';
import theme from '../theme';
import { useRef } from 'react';

const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return (
        <Flex
            as="nav"
            padding="10px"
            justify="space-between"
            alignItems="center"
            gap="5px"
        >
            {/* TODO: add logo */}
            <Icon marginRight="40px" />
            {/* TODO: dynamically render countries */}
            <Badge
                background={theme.colors.secondary}
                border="1px"
                borderColor="black"
                color={theme.colors.primary}
                borderRadius="5px"
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
                    ref={btnRef}
                    color={theme.colors.tertiary}
                    onClick={onOpen}
                    variant="outline"
                    icon={<HamburgerIcon />}
                    marginLeft="5px"
                >
                    Open
                </IconButton>
            </Box>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
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
