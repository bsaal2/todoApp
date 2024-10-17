import { FC, useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import AddTodoForm from '../components/AddTodoForm';
import { addTodo } from '../redux/actionCreator.ts';
import { IAction } from '../redux/reducer.ts';

const AddTodoItem: FC = () => {
    const [todo, setTodo] = useState<string>('');
    const dispatch = useDispatch();

    const onButtonClickHandler = () => {
        dispatch<IAction>(addTodo({ name: todo, state: 'draft' }));
        setTodo('');
    }

    const onInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTodo(event.target.value);
    }

    return (
        <AddTodoForm 
            value={todo} 
                onChange={onInputChange} 
                    onButtonClickHandler={onButtonClickHandler} />
    )
}

export default AddTodoItem;