import { useState } from "react"
import { todoItems } from "./../../assets/mock-data/todoItems";
import TodoItem from "../todoitem/TodoItem";
import TodoForm from "../todoform/TodoForm";

const TodosList = () => {
    const [listOfTodos, setListOfTodos] = useState(todoItems);
    console.log(listOfTodos);
    
    const removingItemFromListOfTodos = (todoId) => {
 
        const indexOfTodo = listOfTodos.findIndex((todo) => todo.id === todoId);
        const currentListOfTodos = [...listOfTodos]; // A new array is created here!
        currentListOfTodos[indexOfTodo].status = "complete";

        setListOfTodos(currentListOfTodos);
    }

    const addingTodo = (newTodo) => {
        setListOfTodos(prevList => [...prevList, newTodo]);
    }

    const filteredListOfTodos = listOfTodos.filter((todo) => todo.status === "in_progress");


    return(
        <div>
            <div className="todosList">
                {filteredListOfTodos.map((todo, index) => {
                    return (
                        <TodoItem status={todo.status} 
                                description={todo.description} 
                                id={todo.id}
                                removeTodo={removingItemFromListOfTodos}
                                key={index}/>
                    );
                })}
            </div>
            <TodoForm addingTodo={addingTodo}/>
        </div>
    );
};

export default TodosList;