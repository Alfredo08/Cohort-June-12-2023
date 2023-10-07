import { useState } from "react";

const TodoForm = (props) => {

    const [newDescription, setNewDescription] = useState("");
    const [newId, setNewId] = useState(-1);
    const [newStatus, setNewStatus] = useState("");

    const addNewTodo = (event) => {
        event.preventDefault();
        const newTodo = {
            description: newDescription,
            status: newStatus,
            id: Number(newId)
        };
        props.addingTodo(newTodo);
    }

    const handleDescription = (event) => {
        setNewDescription(event.target.value);
    }

    const handleId = (event) => {
        setNewId(event.target.value);
    }

    const handleStatus = (event) => {
        setNewStatus(event.target.value);
    }

    return(
        <form>
            <div>
                <label htmlFor="todoDescription">
                    Description:
                </label>
                <input 
                    value={newDescription}
                    type="text" 
                    id="todoDescription"
                    onChange={handleDescription}/>
            </div>
            <div>
                <label htmlFor="todoId">
                    Id:
                </label>
                <input 
                    value={newId}
                    type="number" 
                    id="todoId"
                    onChange={handleId}/>
            </div>
            <div>
                <label htmlFor="todoStatus">
                    Status
                </label>
                <input 
                    type="text" 
                    id="todoStatus"
                    value={newStatus}
                    onChange={handleStatus}/>
            </div>
            <button class="btn" onClick={(event) => addNewTodo(event)}>
                Add Todo
            </button>
        </form>
    );
}

export default TodoForm;