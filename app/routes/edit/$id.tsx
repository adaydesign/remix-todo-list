import { Flex, Heading, Icon } from '@chakra-ui/react';
import { Todo } from '@prisma/client';
import { FiEdit3 } from "react-icons/fi";
import { ActionFunction, LoaderFunction, redirect, useActionData, useLoaderData } from 'remix';
import EditForm from '~/components/todo/EditForm';
import { ErrorData } from '~/type/error';
import { getTodoByID, updateTodo } from '~/utils/todo.services';

export const action: ActionFunction = async ({request})=>{
  const form = await request.formData();
  const id = Number(form.get('id'))
  const text = form.get('text')
  const done = String(form.get('done'))

  if (text == null) {
    const todo = await getTodoByID(id)
    const err : ErrorData = {
      msg: 'Please fill this form'
    }
    return err

  }else{
    const editTodo:Todo = {
      id:id,
      text: String(text),
      done: done === 'true' ? true : false
    } 
  
    await updateTodo(id,editTodo)
    return redirect('/')
  }

}

type EditFormData = {
  todo: Todo | null
}

export const loader: LoaderFunction = async ({params}) => {
  const todo = await getTodoByID(Number(params.id))
  const data : EditFormData = {
    todo: todo
  }
  return data
};

const Edit = () => {
  const data = useLoaderData<EditFormData>()
  const error = useActionData<ErrorData>()
  return (
    <Flex w='100%' p={4} direction='column'>
      <Heading size='md' mb={4}><Icon as={FiEdit3} mr={2} />Edit item</Heading>
      <EditForm editTodo={data.todo!} error={error}/>
    </Flex>
  );
};

export default Edit