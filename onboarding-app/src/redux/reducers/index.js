import { combineReducers } from 'redux';
import githubUsers from './githubUsers';

const githubApp = combineReducers({
  githubUsers
})

export default githubApp;
