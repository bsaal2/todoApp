import { FC, MouseEvent } from 'react';
import TodoComponent from './TodoComponent.js';
import { Todo } from '../redux/reducer.js';

interface ITodoList {
    todos: Array<Todo>;
    onClickHandler: (event: MouseEvent<HTMLButtonElement>, id: number) => void
}

const TodoList: FC<ITodoList> = ({ todos, onClickHandler }) => {
    const todoList = todos.map((eachTodo) => <TodoComponent key={eachTodo.id} todo={eachTodo} onClickHandler={onClickHandler} />);

    return(
        <section className="todolist">
            <h1>My Todo List</h1>
            { !todoList.length && (<p>Please add your todo list!</p>) }
            <ul>{ todoList }</ul>
        </section>
    )
}

export default TodoList;