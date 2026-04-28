import { createStore } from 'redux';
import { libraryReducer } from './libraryReducer';

export const store = createStore(libraryReducer);