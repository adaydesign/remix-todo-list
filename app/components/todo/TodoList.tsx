import { Flex, HStack, IconButton, Spacer, Text, VStack } from "@chakra-ui/react";
import { Todo } from "@prisma/client";
import { FiCircle, FiCheckCircle, FiEdit3, FiX } from "react-icons/fi";
import { Link } from "remix";

type TodoListProps = {
    data?: Array<Todo>
}

const TodoItem = ({ item }: { item: Todo }) => {
    return (
        <HStack spacing={2} w='100%' p={2}>
            <Link to={`edit/${item.id}/mark`}>
            <IconButton aria-label='edit todo state' icon={item.done ? <FiCheckCircle /> : <FiCircle />} />
            </Link>
            <Text as={item.done ? 'del' : 'mark'}>{item.text}</Text>
            <Spacer />
            <Link to={`edit/${item.id}`}>
                <IconButton aria-label='edit todo' icon={<FiEdit3 />} />
            </Link>
            <Link to={`delete/${item.id}`}>
            <IconButton aria-label='delete todo' icon={<FiX />} />
            </Link>
        </HStack>
    )
}

const TodoList = ({ data }: TodoListProps) => {
    return (
        <VStack w='100%' spacing={0} mb='120px'>
            {
                (!data || data.length === 0) && (
                    <Flex p={4}>
                        <Text colorScheme='red'>... No item ...</Text>
                    </Flex>
                )
            }
            {
                data?.map(i => <TodoItem item={i} key={i.id} />)
            }
        </VStack>
    )
};

export default TodoList;
