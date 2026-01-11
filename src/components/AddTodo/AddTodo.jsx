import { useContext, useState } from "react";
import TodoContext from '../../context/TodoContext';
function AddTodo(){
    const { dispatch } = useContext(TodoContext);
    const [ todoText, setTodoText ] = useState('');

    function addTodos(todoText){
        dispatch({type: 'add_todo', payload: {todoText}});
    }

    return(
        <>
            <input type="text"
                    placeholder="add next todo..."
                    onChange={(e) => setTodoText(e.target.value)}
                    value={todoText}
            />
            <button onClick={() =>{
                addTodos(todoText);
                setTodoText('');
            }}> Submit </button>
        </>
    )
}
export default AddTodo;
