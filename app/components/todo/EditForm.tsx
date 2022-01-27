import { Button, FormControl, FormErrorMessage, Input, Link, VStack } from '@chakra-ui/react';
import { Form, Link as RemixLink } from 'remix';
import { FiCheck, FiArrowLeft } from "react-icons/fi";
import { Todo } from '@prisma/client';
import { ErrorData } from '~/type/error';

type EditFormProps = {
    editTodo: Todo
    error? : ErrorData | undefined
}

const EditForm = ({editTodo, error}:EditFormProps) => {

    return (
        <Form style={{ width: '100%' }} method='post' action={`/edit/${editTodo.id}`}>
            <VStack w='100%' spacing={2}>
                <FormControl isInvalid={!!error?.msg}>
                    <Input type='hidden' name='id' value={editTodo.id} />
                    <Input type='hidden' name='done' value={editTodo.done+''} />
                    <Input type='text' name='text' defaultValue={editTodo.text} placeholder='fill an item that i will do that ...' maxLength={100}></Input>
                    <FormErrorMessage>{error?.msg}</FormErrorMessage>
                </FormControl>
                <Button type='submit' w='100%' colorScheme='yellow' leftIcon={<FiCheck />}>Edit</Button>
                <Link as={RemixLink} to='/' w='100%'>
                    <Button w='100%' colorScheme='blue' leftIcon={<FiArrowLeft />}>Back</Button>
                </Link>
            </VStack>
        </Form>
    )
};

export default EditForm;