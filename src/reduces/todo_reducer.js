import Immutable from 'immutable';
import TodoActions from '../actions/todo_actions';

const initTodoState=Immutable.fromJS({
    todos:[]
});

export default function todoReducer(state=initTodoState,action){
    switch(action.type){
        case TodoActions.ADD_TODOITEM:
            return state
                .update('todos',list=>list.push(
                    Immutable.map({
                        id:state.get('todos').length+1,
                        text:action.text,
                        isCompleted:false
                    })
                    )
                );
        case TodoActions.TOOGLE_TODO:
            return state
                .update("todo",todo=>todo.map(item=>{
                        item.get("id" )=== action.id ? item.update("isCompleted",value => !value) :item;
                    }
                ));
        case TodoActions.REMOVE_TODO:
            return state
                .update('todo',todo => todo.filter(item=>item.get("id")!== action.id));
        default:
            return state;
    }
};
