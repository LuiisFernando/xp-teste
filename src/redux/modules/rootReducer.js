import { combineReducers } from 'redux';

import token from './token/reducer';
import album from './albums/reducer';

export default combineReducers({ token, album });
