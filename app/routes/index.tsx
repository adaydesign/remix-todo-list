import { Flex } from "@chakra-ui/react";
import { LoaderFunction, useLoaderData } from "remix";
import Footer from "~/components/layout/Footer";
import TodoList from "~/components/todo/TodoList";
import { Todo } from "@prisma/client";
import { getAllTodo, getTodoCount } from "~/utils/todo.services";
import ProgressBar from "~/components/todo/ProgressBar";

type LoaderData = {
  list: Array<Todo>
  total: number
  done: number
}

export const loader: LoaderFunction = async ({ request }) => {

  const url = new URL(request.url);
  const done = url.searchParams.get("done");

  let filter = {}
  if(done==='done'){
    filter={
      done:true
    }
  }else if(done==='todo'){
    filter={
      done:false
    }
  }
  const listData = await getAllTodo(filter)

  const count = await getTodoCount()

  const data: LoaderData = {
    list: listData,
    total: count.total,
    done: count.done
  }

  return data
}


export default function Index() {

  const data = useLoaderData<LoaderData>()

  // cal done
  const total = data.list.length
  const done = data.list?.filter(i => i.done)?.length

  return (
    <Flex w='100%' direction='column'>
      <ProgressBar done={data.done} total={data.total} />
      <TodoList data={data.list} />
      <Footer />
    </Flex>
  );
}
