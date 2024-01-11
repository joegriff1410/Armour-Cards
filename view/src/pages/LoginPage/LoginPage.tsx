import { SimpleGrid } from "@chakra-ui/react";
import LoginButton from "../../components/ui/LoginButton";

const LoginPage = () => {
    return (
        <>
            <SimpleGrid columns={1}>
                <LoginButton />
            </SimpleGrid>
        </>
    );
};

export default LoginPage;
