import { Todo } from "@prisma/client";
import { db } from "~/utils/db.server";

// get
export const getAllTodo = async (where?:any)=>{
    const data = await db.todo.findMany({
        where: where
    })
    return data
}

export const getTodoByID = async (id:number)=>{
    const data = await db.todo.findUnique({
        where:{
            id:id
        }
    })
    return data
}

export const getTodoCount = async ()=>{
    const all = await db.todo.count()
    const done = await db.todo.count({
        where:{
            done: true
        }
    })
    return {
        total: all,
        done: done
    }
}

// post
export const createNewTodo = async (data:Todo)=>{
    const todo = await db.todo.create({
        data: {
            text: data.text
        }
    })

    return todo
}

// put
export const updateTodo = async (id:number,updateData: any)=>{
    const todo = await db.todo.update({
        where:{id:id},
        data: updateData
    })

    return todo
}

// delete
export const deleteTodo = async (id:number)=>{
    const todo = await db.todo.delete({
        where: {id:id}
    })

    return todo
}