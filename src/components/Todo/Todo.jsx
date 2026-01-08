function Todo({ editTodo, deleteTodo, text, isFinished }){
    return(
        <div>
            <input type="checkbox" checked={isFinished}/>
            <span> {text}</span>
            <button onClick={editTodo}>Edit</button>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    );
}
export default Todo;