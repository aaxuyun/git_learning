const ADD_TODOITEM="ADD_TODOITEM";
const TOOGLE_TODO="TOOGLE_TODO";
const REMOVE_TODO="REMOVE_TODO";


export const addTodo= (text) => {
    return {
        type:ADD_TODOITEM,
        text
    }
};
export const toogleTodo=(id)=>{
    return {
        type: TOOGLE_TODO,
        id
    }
};
export const removeTodo=(id)=>{
    return {
        type: REMOVE_TODO,
        id
    }
};


