import { FC, MouseEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoList from '../components/TodoList.js';
import TextInput from '../components/TextInput.js';
import { IState, Todo } from '../redux/reducer.js';
import { toggleTodo } from '../redux/actionCreator.js';

const getAllTodoIds = (state: IState) => state.todos.allTodoIds;
const getAllTodoList = (state: IState) => getAllTodoIds(state).map((eachTodoId) => state.todos.todoById[eachTodoId]);
const filterTodoList = (search: string, todoList: Array<Todo>) => todoList.filter((each) => each.name.toLowerCase().includes(search))

const VisibleTodoList:FC = () => {
    const [search, setSearch] = useState<string>('');
    const dispatch = useDispatch();
    const todoList = useSelector(getAllTodoList);
    console.log(todoList);
    const filteredTodoList = search ? filterTodoList(search, todoList) : todoList;

    const onSearchChange = (searchTerm: string) => {
        setSearch(searchTerm.toLowerCase());
    }

    const markAsComplete = (event: MouseEvent<HTMLButtonElement>, id: number) => {
        console.log('clicked', event, id);
        event.preventDefault();
        dispatch(toggleTodo(id));
    }

    return(
        <>
            <section className='search'>
             <TextInput 
                type='search' 
                name='search' 
                value={search} 
                placeholder='Search here...'
                onChange={onSearchChange} />
            </section>
    
            <TodoList todos={filteredTodoList} onClickHandler={markAsComplete} />
        </>
    
    );
}

export default VisibleTodoList;