import { Button, Flex, Progress, SimpleGrid, Link } from "@chakra-ui/react";
import { Link as RemixLink } from "remix";

type ProgressBarProps = {
    total: number
    done: number
}
const ProgressBar = ({ total, done }: ProgressBarProps) => {

    const value = total === 0 ? 0 : Math.round((done / total) * 100)
    const doing = total-done
    return (
        <Flex w='100%' p={2} direction='column' backgroundColor='orange.50'>
            <SimpleGrid columns={3} spacing={2} mb={2}>
                <Flex justify='center'>
                    <Link as={RemixLink} to='/' w='100%'>
                        <Button w='100%' colorScheme='blue'>Total : {total}</Button>
                    </Link>
                </Flex>
                <Flex justify='center'>
                    <Link as={RemixLink} to='/?done=done' w='100%'>
                        <Button w='100%' colorScheme='green'>Done : {done} ({value} %)</Button>
                    </Link>
                </Flex>
                <Flex justify='center'>
                    <Link as={RemixLink} to='/?done=todo' w='100%'>
                        <Button w='100%' colorScheme='red'>To do : {doing}</Button>
                    </Link>
                </Flex>
            </SimpleGrid>
            <Flex w='100%'>
                <Progress value={value} height='32px' colorScheme={value > 80 ? 'green' : 'yellow'} w='100%' />
            </Flex>
        </Flex>
    )
};

export default ProgressBar;
