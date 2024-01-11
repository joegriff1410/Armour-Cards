import { Link as ReactRouterLink, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { Box, Heading, Text, Link } from '@chakra-ui/react';
import theme from '../../theme';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        // TODO: add styles
        <Box padding="50" my="50%">
            <Heading mx="auto" textAlign="center">
                Oops!
            </Heading>
            <Text>
                {isRouteErrorResponse(error)
                    ? 'This page does not exist.'
                    : 'An unexpected error occured.'}
                <Link color={theme.colors.tertiary}><ReactRouterLink to="/">{' '}Press me to Go Home</ReactRouterLink></Link>
            </Text>
        </Box>
    );
};

export default ErrorPage;
