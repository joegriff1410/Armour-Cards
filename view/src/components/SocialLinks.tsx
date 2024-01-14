import { Center, Link, Spacer } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import theme from '../theme';

const SocialLinks = () => {
    return (
        // TODO: Refactor using hstack
        <>
            <Center width="100%">
                <Link
                    color={theme.colors.links}
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
                    color={theme.colors.links}
                    fontFamily={theme.fonts.body}
                    fontSize="sm"
                    href="https://github.com/joegriff1410"
                    isExternal
                >
                    GitHub <ExternalLinkIcon />
                </Link>
                <Spacer />
                <Link
                    color={theme.colors.links}
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
