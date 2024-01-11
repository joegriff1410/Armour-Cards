import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import { Box, Heading, Text } from "@chakra-ui/react"

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

  return (
    <Box padding='50' my='50%'>
        <Heading mx='auto' textAlign='center'>
            Oops!
        </Heading>
        <Text>
            {isRouteErrorResponse(error) ? 'This page does not exist, please go back.': 'An unexpected error occured.'}
        </Text>
    </Box>
  )
}

export default ErrorPage