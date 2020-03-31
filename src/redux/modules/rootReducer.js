import { combineReducers } from 'redux';

import token from './token/reducer';
import album from './albums/reducer';
import searching from './searching/reducer';

export default combineReducers({ token, album, searching });
