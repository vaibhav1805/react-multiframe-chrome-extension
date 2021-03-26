import {SWITCH_VIEW} from '../Actions';

const initialState = {
  viewId: 0
}

export default function(state = initialState, action){
    switch(action.type){
        case SWITCH_VIEW:
          return {
            ...state,
            viewId: action.viewId
          };
        default:
          return state;
    }
}
