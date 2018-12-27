import Immutable from 'immutable';
import TodoActions from '../actions/todo_actions';

export let initTodoState=Immutable.fromJS({
    todos:[]
});

export default function todoReducer(state=initTodoState,action){
    switch(action.type){
        case TodoActions.ADD_TODOITEM:
            return state
                .update('todos',list=>list.push(
                    Immutable.Map({
                        id:action.id,
                        text:action.text,
                        isCompleted:false
                    })
                    )
                );
        case TodoActions.TOOGLE_TODO:
            return state
                .update("todos",todos=>todos.map(item=>{
                        return (item.get("id")=== action.id) ? item.update("isCompleted", value =>!value):item;
                    }
                ));
        case TodoActions.REMOVE_TODO:
            return state
                .update('todos',todos => todos.filter(item=>item.get("id")!== action.id));
        default:
            return state;
    }
};