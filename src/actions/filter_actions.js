const FILTRE_TODO="FILTER_TODO";

const filterTodo=(filter)=>({
        type:FILTER_TODO,
        filter
});

export default {FILTRE_TODO,filterTodo};