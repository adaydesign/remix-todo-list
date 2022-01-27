import { Button, FormControl, FormErrorMessage, Input, Link, VStack } from '@chakra-ui/react';
import { Form, Link as RemixLink } from 'remix';
import { FiCheck, FiArrowLeft } from "react-icons/fi";
import { ErrorData } from '~/type/error';

type AddFormProps = {
    error? : ErrorData | undefined
} 

const AddForm = ({error}:AddFormProps) => {
    return (
        <Form style={{ width: '100%' }} method='post' action='/add'>
            <VStack w='100%' spacing={2}>
                <FormControl isInvalid={!!error?.msg}>
                    <Input type='text' name='text' placeholder='fill an item that i will do that ...' maxLength={100}></Input>
                    <FormErrorMessage>{error?.msg}</FormErrorMessage>
                </FormControl>
                <Button type='submit' w='100%' colorScheme='green' leftIcon={<FiCheck />}>Add</Button>
                <Link as={RemixLink} to='/' w='100%'>
                    <Button w='100%' colorScheme='blue' leftIcon={<FiArrowLeft />}>Back</Button>
                </Link>
            </VStack>
        </Form>
    )
};

export default AddForm;