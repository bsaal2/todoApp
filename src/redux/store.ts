import { legacy_createStore as createStore} from 'redux';
import TodoReducer from './reducer.ts';

const store = createStore(TodoReducer);

export default store;