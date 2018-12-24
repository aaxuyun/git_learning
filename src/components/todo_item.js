const TodoItem =(id,text,isCompleted,toogleTodo,removeTodo)=>{
        let style;
        if (isCompleted) {
            style = {
                "width": "100px",
                "height": "20px",
                "textDecoration": "line-through"
            }
        } else {
            style = {
                "width": "100px",
                "height": "20px"
            }
        };
        return (

            <div>
                <a onClick={toogleTodo(id)} style={style}>{text}</a>
                <div onClick={removeTodo(id)}>删除</div>
            </div>
        )

};

export default TodoItem;



