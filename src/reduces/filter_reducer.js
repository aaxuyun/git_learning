import {immutable} from 'immutable';
import {filterActions} from  '../actions/filter_actions';

const initFilterState = immutable.fromJS({
  filter:""
});
export let filterReducer = (state=initFilterState,action) => {
    switch (action.type) {
        case filterActions.FILTRE_TODO:
            return state
                .set('filter',action.filter);
        default:
            return state;
    }
};