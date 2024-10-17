import { Todo, IAction } from './reducer';

const ADD_TODO = 'ADD_TODO'
const MARK_TODO_COMPLETE = 'MARK_TODO_COMPLETE';
const TOGGLE_TODO = 'TOGGLE_TODO';

const addTodo = (payload: Omit<Todo, 'id'>): IAction => {
    return {
        type: ADD_TODO,
        payload
    }
}

const markTodoComplete = (todoId: number): IAction => {
    return {
        type: MARK_TODO_COMPLETE,
        todoId,
    }
}

const toggleTodo = (todoId: number): IAction => {
    return {
        type: TOGGLE_TODO,
        todoId,
    }
}

export {
    ADD_TODO,
    MARK_TODO_COMPLETE,
    TOGGLE_TODO,
    addTodo,
    markTodoComplete,
    toggleTodo,
}