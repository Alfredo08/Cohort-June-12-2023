import closeCircleImage from './../../assets/images/close-circle.png';
import './todoItem.css';

const TodoItem = (props) => {
    return (
        <div className="todoItem">
            <h3> {props.description} </h3>
            <img onClick={(e) => props.removeTodo(props.id)} src={closeCircleImage} alt="Delete button" />
        </div>
    );
};

export default TodoItem;