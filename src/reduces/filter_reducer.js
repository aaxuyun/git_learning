import Immutable from 'immutable';
import {FilterActions} from  '../actions/filter_actions';

let initFilterState = Immutable.fromJS({
  filter:""
});
export let FilterReducer = (state=initFilterState,action) => {
    switch (action.type) {
        case FilterActions.FILTRE_TODO:
            return state
                .set('filter',action.filter);
        default:
            return state;
    }
};