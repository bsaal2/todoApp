import { Todo, IAction } from './reducer';

const ADD_TODO = 'ADD_TODO'
const MARK_TODO_COMPLETE = 'MARK_TODO_COMPLETE';

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

export {
    ADD_TODO,
    MARK_TODO_COMPLETE,
    addTodo,
    markTodoComplete,
}