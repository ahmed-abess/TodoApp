


const DissplayTodos=(props)=>{
    const {todos,deleteHandle,handleComplete}=props;

    return(
        <>{
            todos.map(
            (todo)=>{

                return(<div className="todo-item" key={todo.id}>
                    <p className={todo.isCompleted ? "text-comleted" : ""}>{todo.text}</p>
                   <div className="btn-item">
                       <button className="btn" onClick={()=>{deleteHandle(todo.id)}}>delete</button>
                       <button className="btn" onClick={()=>{handleComplete(todo.id)}}> {todo.isCompleted ? "Undo" : "Complete"}{" "}</button>
                   </div>
                </div>)
                }
        )
        }</>

    )
};
export default DissplayTodos
