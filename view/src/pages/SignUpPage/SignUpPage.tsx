import { Box } from '@chakra-ui/react';
import SocialLinks from '../../components/ui/SocialLinks';
import CardTemplate from '../../components/ui/Card';

const SignUpPage = () => {
    return (
        <>
          <CardTemplate />
            <Box>
                <SocialLinks />
            </Box>
        </>
    );
};

export default SignUpPage;
