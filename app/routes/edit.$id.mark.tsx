import { LoaderFunction, redirect } from "remix";
import { getTodoByID, updateTodo } from "~/utils/todo.services";

export const loader: LoaderFunction = async ({params}) => {
    // get
    const id = Number(params.id)
    const todo = await getTodoByID(id)
    const toggleTodo = {
        done : !todo?.done
    }

    await updateTodo(id,toggleTodo)
    return redirect('/')
}