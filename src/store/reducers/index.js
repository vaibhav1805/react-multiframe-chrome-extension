import { combineReducers } from 'redux'
import sidePanelReducer from './SidePanelReducer'
import primaryModalReducer from './PrimaryModalReducer';
import secondaryModalReducer from './SecondaryModalReducer';
import appReducer from './AppReducer';

export default combineReducers({
  root: appReducer,
  sidePanel: sidePanelReducer,
  primaryModal: primaryModalReducer,
  secondaryModal: secondaryModalReducer
})
