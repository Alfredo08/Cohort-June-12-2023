import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const TodoForm = (props) => {
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();
    const [updateListOfTodos] = useOutletContext();
    const updateDescription = (event) => {
        setDescription(event.target.value);
    }

    const updateStatus = (event) => {
        setStatus(event.target.value);
    }

    const updateId = (event) => {
        setId(event.target.value);
    }

    const addTodo = async (event) => {
        event.preventDefault();
        const URL = "http://localhost:8080/api/todos/new";
        const settings = {
            method: 'POST',
            body: JSON.stringify({
                description: description,
                status: status,
                id: id,
                userName: localStorage.getItem('userName')
            }),
            headers: {
                'Content-type': 'application/json',
                'api-token': localStorage.getItem('token')
            }
        }

        const response = await fetch(URL, settings);
        const data = await response.json();
        updateListOfTodos(data);
        navigate('/home');
    }

    return(
        <form onSubmit={addTodo}>
            <div>
                <label className="form-label" htmlFor="description">
                    Description: 
                </label>
                <input 
                    className="form-control" 
                    type="text" 
                    id="description" 
                    name="description" 
                    value={description}
                    onChange={updateDescription}/>
            </div>
            <div>
                <label className="form-label" htmlFor="status">
                    Status: 
                </label>
                <input 
                    className="form-control" 
                    type="text" 
                    id="status" 
                    name="status" 
                    value={status}
                    onChange={updateStatus}/>
            </div>
            <div>
                <label className="form-label" htmlFor="id">
                    Todo id: 
                </label>
                <input 
                    className="form-control" 
                    type="text" 
                    id="id" 
                    name="id" 
                    value={id}
                    onChange={updateId}/>
            </div>
            <button className="btn btn-success">
                Add todo
            </button>
        </form>
    );
}

export default TodoForm;