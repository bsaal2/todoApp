import { Reducer, Action, UnknownAction } from 'redux';
import { ADD_TODO, MARK_TODO_COMPLETE, TOGGLE_TODO } from './actionCreator.ts';

export type TodoState = 'draft' | 'completed';

export interface Todo {
    id: number;
    name: string;
    state: TodoState;
}
export interface IAction extends Action, UnknownAction {
    payload?: Omit<Todo, 'id'>;
};

export interface IState {
    todos: {
        allTodoIds: Array<number>;
        todoById: {
            [key: string | number]: Todo
        }
    }
}

const initialState: IState = {
    todos: {
        allTodoIds: [],
        todoById: {}
    }
}

let nextTodo = 0;

const TodoReducer: Reducer<IState, IAction> = (state = initialState, action: IAction) => {
    switch(action.type) {
        case ADD_TODO: {
            if (action.payload) {
                return {
                    todos: {
                        allTodoIds: [...state.todos.allTodoIds, ++nextTodo],
                        todoById: {
                            ...state.todos.todoById,
                            [nextTodo]: { id: nextTodo, ...action.payload },
                        }
                    }
                }
            }
            return state;
        }

        case MARK_TODO_COMPLETE: {
            if (action.todoId && typeof action.todoId === 'number') {
                return {
                    todos: {
                        ...state.todos,
                        todoById: {
                             ...state.todos.todoById, 
                             [action.todoId]: {
                                ...state.todos.todoById[action.todoId],
                                state: 'completed'
                             }
                        }
                    }
                }
            }
            return state;
        }

        case TOGGLE_TODO: {
            if (action.todoId && typeof action.todoId === 'number') {
                return {
                    todos: {
                        ...state.todos,
                        todoById: {
                            ...state.todos.todoById,
                            [action.todoId]: {
                                ...state.todos.todoById[action.todoId],
                                state: state.todos.todoById[action.todoId].state === 'draft' ? 'completed' : 'draft'
                            }
                        }
                    }
                }
            }
            return state
        }

        default:
            return state;
    }
}

export default TodoReducer;