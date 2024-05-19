import React, {FC, useEffect, useState} from 'react';
import {TodosResponseModel} from "../../models/response- models/TodosResponseModel";
import {getAllTodosByUserId} from "../../services/todos.api.service";
import {log} from "util";
import {TodoBasicModel} from "../../models/basic-models/TodoBasicModel";
import TodoComponent from "../todo-component/TodoComponent";
interface IProps{
    userId:number
}
const TodosComponent:FC<IProps> = ({userId}) => {
    const [todos,setTodos] = useState<TodoBasicModel[]>([]);
    console.log(userId)
    useEffect(()=>{
        getAllTodosByUserId(userId).then(value=>setTodos(value.todos) )}
    ,[userId])
    return (
        <div>
            {
todos.map(todo=><TodoComponent key={todo.id} todo={todo}/> )
            }
            
        </div>
    );
};

export default TodosComponent;