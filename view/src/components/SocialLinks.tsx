import { Center, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import theme from '../theme';

const SocialLinks = () => {
    return (
        // TODO: Refactor using hstack
        <>
            <Center >
                <Link
                    href="#"
                    isExternal
                    marginEnd={16}
                    color={theme.colors.links}
                    fontSize="sm"
                >
                    Donate <ExternalLinkIcon />
                </Link>
                <Link
                    href="https://github.com/joegriff1410"
                    isExternal
                    color={theme.colors.links}
                    fontSize="sm"
                >
                    GitHub <ExternalLinkIcon />
                </Link>
                <Link
                    href="#"
                    isExternal
                    marginStart={10}
                    color={theme.colors.links}
                    fontSize="sm"
                >
                    Instagram <ExternalLinkIcon />
                </Link>
            </Center>
        </>
    );
};

export default SocialLinks;
