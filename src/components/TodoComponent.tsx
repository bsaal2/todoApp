import { FC, MouseEvent } from 'react';
import Button from './Button.js';
import { Todo } from '../redux/reducer';
import './TodoComponent.css';

interface ITodo {
    todo: Todo
    onClickHandler: (event: MouseEvent, id: number) => void
}

const TodoComponent: FC<ITodo> = ({ todo, onClickHandler }) => (
    <li>
        <span className={todo.state}>
          {todo.name}     
        </span>
        {' '}
        { todo.state === 'draft' && <Button className='complete-state' onClickHandler={(event: MouseEvent) => onClickHandler(event, todo.id)}>Mark as complete</Button> }
    </li>
);

export default TodoComponent;