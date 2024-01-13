import { Center, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import theme from '../theme';

const SocialLinks = () => {
    return (
        // TODO: Refactor using hstack
        <>
            <Center>
                <Link
                    color={theme.colors.links}
                    fontSize="sm"
                    href="#"
                    isExternal
                    marginEnd={16}
                >
                    Donate <ExternalLinkIcon />
                </Link>
                <Link
                    color={theme.colors.links}
                    fontSize="sm"
                    href="https://github.com/joegriff1410"
                    isExternal
                >
                    GitHub <ExternalLinkIcon />
                </Link>
                <Link
                    color={theme.colors.links}
                    fontSize="sm"
                    href="#"
                    isExternal
                    marginStart={10}
                >
                    Instagram <ExternalLinkIcon />
                </Link>
            </Center>
        </>
    );
};

export default SocialLinks;
