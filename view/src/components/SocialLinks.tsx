import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Center, Link, Spacer, useColorModeValue } from '@chakra-ui/react';
import theme from '../theme';

const SocialLinks = () => {
    // Hooks
    const linksColor = useColorModeValue('#8A8A8A','#FFFFFF60')

    return (
        // TODO: Refactor using hstack
        <>
            <Center width="100%">
                <Link
                    color={linksColor}
                    fontFamily={theme.fonts.body}
                    fontSize="sm"
                    href="#"
                    isExternal
                    marginLeft="40px"
                >
                    Donate <ExternalLinkIcon />
                </Link>
                <Spacer />
                <Link
                    color={linksColor}
                    fontFamily={theme.fonts.body}
                    fontSize="sm"
                    href="https://github.com/joegriff1410"
                    isExternal
                    marginX='40px'
                >
                    GitHub <ExternalLinkIcon />
                </Link>
                <Spacer />
                <Link
                   color={linksColor}
                    fontFamily={theme.fonts.body}
                    fontSize="sm"
                    href="#"
                    isExternal
                    marginRight="40px"
                >
                    Instagram <ExternalLinkIcon />
                </Link>
            </Center>
        </>
    );
};

export default SocialLinks;
