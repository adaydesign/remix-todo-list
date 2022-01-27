import { Flex, Heading, Icon, Link } from "@chakra-ui/react";
import { FiBookOpen } from "react-icons/fi";
import { Link as RemixLink } from "remix";

const AppBar = () => {
    return (
        <Flex w='100%' position='fixed' backgroundColor='blue.800' shadow='sm' align='center' direction='row' p={2} zIndex={1}>
            <Link as={RemixLink} to='/'>
                <Heading size='xl' color='white'><Icon as={FiBookOpen} mr={1} color='white' /> Todo List</Heading>
            </Link>
        </Flex>
    )
};

export default AppBar;
