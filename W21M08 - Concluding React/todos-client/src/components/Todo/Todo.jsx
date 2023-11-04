
const Todo = (props) => {
    return(
        <div>
            <h1> Id: {props.todo.id} </h1>
            <h2> {props.todo.description} </h2>
            <p> {props.todo.status} </p>
        </div>
    );
}

export default Todo;