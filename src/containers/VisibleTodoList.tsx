import { FC, MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoList from '../components/TodoList.js';
import { IState } from '../redux/reducer.js';
import { markTodoComplete } from '../redux/actionCreator.js';

const getAllTodoIds = (state: IState) => state.todos.allTodoIds;
const getAllTodoList = (state: IState) => getAllTodoIds(state).map((eachTodoId) => state.todos.todoById[eachTodoId]);

const VisibleTodoList:FC = () => {
    const dispatch = useDispatch();
    const todoList = useSelector(getAllTodoList);
    console.log(todoList);

    const markAsComplete = (event: MouseEvent, id: number) => {
        console.log('clicked', event, id);
        event.preventDefault();
        dispatch(markTodoComplete(id));
    }

    return(<TodoList todos={todoList} onClickHandler={markAsComplete} />);
}

export default VisibleTodoList;