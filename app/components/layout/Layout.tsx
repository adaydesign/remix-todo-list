import { Flex } from "@chakra-ui/react";
import AppBar from "./AppBar";

type LayoutProps = {
    children : React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <Flex direction='column' w='100%'>
        <AppBar />
        <Flex w='100%' mt='60px' backgroundColor='gray.100'>
            {children}
        </Flex>
    </Flex>
  )

};

export default Layout;
