import { Button, Flex, Text, Link } from '@chakra-ui/react';
import { Link as RemixLink } from 'remix';
import { FiEdit2 } from "react-icons/fi";

const Footer = () => {
  return (
      <Flex position='fixed' bottom='0'  backgroundColor='blue.100' direction='column' w='100%' p={4}>
          <Link as={RemixLink} to='/add'>
            <Button w='100%' colorScheme='green' leftIcon={<FiEdit2 />}>New Item</Button>
          </Link>
      </Flex>
  )
};

export default Footer;
