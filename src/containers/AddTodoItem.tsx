import { FC, useState, ChangeEvent } from 'react';
import AddTodoForm from '../components/AddTodoForm';

const AddTodoItem: FC = () => {
    const [todo, setTodo] = useState<string>('');

    const onButtonClickHandler = () => {
        console.log('clicked button');
    }

    const onInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log('on input change', event);
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