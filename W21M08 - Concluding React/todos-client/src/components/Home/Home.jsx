import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import {Routes, Route} from 'react-router-dom';

const Home = (props) => {
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);

    const updateListOfTodos = (newTodo) => {
        setTodos(prevTodos => [...prevTodos, newTodo]);
    }

    const logout = () => {
        console.log("Thank you for visitng our page, you will now logout");
        navigate('/login');
    }

    useEffect(() => {
        const fetchTodos = async () => {
            const URL = `http://localhost:8080/api/todos/getByUserId/${props.userInfo.userName}`;
            const settings = {
                method: "GET",
                headers: {
                    "api-token": props.userInfo.token
                }
            };

            const response = await fetch(URL, settings);
            const data = await response.json();

            setTodos(data.todos);
        } 
        fetchTodos();
    }, []);

    return(
        <div>
            <h1>
                Welcome back {props.userInfo.firstName} {props.userInfo.lastName}
            </h1>
            <button className="btn btn-info" onClick={() => logout()}>
                Logout with handler
            </button>
            {todos.map((todo, index) => {
                return <Todo todo={todo} key={index}/>
            })}

            <Link to="/home/new/todo">
                Add todo
            </Link>
            <Outlet context={[updateListOfTodos]}/>
        </div>
    );
}

export default Home;