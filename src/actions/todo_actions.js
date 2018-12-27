const ADD_TODOITEM="ADD_TODOITEM";
const TOOGLE_TODO="TOOGLE_TODO";
const REMOVE_TODO="REMOVE_TODO";
let nextTodoId = 0;

const addTodo= (text) => ({
        type:ADD_TODOITEM,
        text,
        id:nextTodoId++
});
const toogleTodo=(id)=>({
        type: TOOGLE_TODO,
        id
});
const removeTodo=(id)=>({
        type: REMOVE_TODO,
        id
});

export default {addTodo,toogleTodo,removeTodo,ADD_TODOITEM,TOOGLE_TODO,REMOVE_TODO};
