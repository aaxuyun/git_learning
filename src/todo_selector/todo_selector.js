const getTodos=(state)=>{
    // if(state.filter === "completed"){
    //     return state.get("todos").filter(item=>item.isCompleted).toJS();
    // }else if(state.filter === "uncompleted"){
    //     return state.get("todos").filter(item=>!item.isCompleted).toJS();
    // }
    return state.get('todos').toJS();
};

export default {getTodos};