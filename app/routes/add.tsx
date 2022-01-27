import { Flex, Heading, Icon } from '@chakra-ui/react';
import AddForm from '~/components/todo/AddForm';
import { FiEdit2 } from "react-icons/fi";
import { ActionFunction, json, redirect, useActionData, useLoaderData } from 'remix';
import { createNewTodo } from '~/utils/todo.services';
import { Todo } from '@prisma/client';
import { ErrorData } from '~/type/error';

const badRequest = (data: ErrorData) =>
  json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const text = form.get('text')
  if (text == null) {
    const err : ErrorData = {
      msg: 'Please fill this form'
    }
    return badRequest(err)

  } else {
    const newTodo: Todo = {
      id: 0,
      text: String(text),
      done: false
    }

    await createNewTodo(newTodo)
    return redirect('/')
  }
}

const Add = () => {
  const error = useActionData<ErrorData>()

  return (
    <Flex w='100%' p={4} direction='column'>
      <Heading size='md' mb={4}><Icon as={FiEdit2} mr={2} />Add new item</Heading>
      <AddForm error={error}/>
    </Flex>
  );
};

export default Add