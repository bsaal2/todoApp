import { FC, MouseEvent } from 'react';
import Button from './Button.js';
import { Todo } from '../redux/reducer';
import './TodoComponent.css';

interface ITodo {
    todo: Todo
    onClickHandler: (event: MouseEvent<HTMLButtonElement>, id: number) => void
}

const TodoComponent: FC<ITodo> = ({ todo, onClickHandler }) => {
    const buttonLabel = todo.state === 'draft' ? 'Mark complete' : 'Reset';

    return <li>
        <span className={todo.state}>
          {todo.name} {todo.state}
        </span>
        {' '}
        <Button className='complete-state' 
            onClickHandler={(event: MouseEvent<HTMLButtonElement>) => onClickHandler(event, todo.id)}>
                { buttonLabel }
        </Button>
    </li>
};

export default TodoComponent;