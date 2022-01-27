import { LoaderFunction, redirect } from 'remix';
import { deleteTodo } from '~/utils/todo.services';

export const loader: LoaderFunction = async ({params}) => {
  await deleteTodo(Number(params.id))
  return redirect('/')
};