const FILTRE_TODO="FILTER_TODO";

export  const filterTodo=(id)=>{
    return {
        type:FILTER_TODO,
        id
    }
}