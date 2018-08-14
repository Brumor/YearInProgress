import {combineReducers} from 'redux';
import {goals} from './goals';
import {textinput} from './textinput';

export default combineReducers({
  goals,
  textinput
})
