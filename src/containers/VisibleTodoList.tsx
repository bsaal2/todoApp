import { FC, MouseEvent, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "../components/TodoList.js";
import TextInput from "../components/TextInput.js";
import { Todo } from "../redux/reducer.js";
import { toggleTodo } from "../redux/actionCreator.js";
import { getAllTodos } from "../redux/selectors.js";

const filterTodoList = (search: string, todoList: Array<Todo>) =>
  search
    ? todoList.filter((each) => each.name.toLowerCase().includes(search))
    : todoList;

const VisibleTodoList: FC = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useDispatch();
  const todoList = useSelector(getAllTodos);
  console.log(todoList);

  const filteredTodoList = useMemo(
    () => filterTodoList(search, todoList),
    [search, todoList]
  );

  const onSearchChange = (searchTerm: string) => {
    setSearch(searchTerm.toLowerCase());
  };

  const markAsComplete = (event: MouseEvent<HTMLButtonElement>, id: number) => {
    console.log("clicked", event, id);
    event.preventDefault();
    dispatch(toggleTodo(id));
  };

  return (
    <>
      <section className="search">
        <TextInput
          type="search"
          name="search"
          value={search}
          placeholder="Search here..."
          onChange={onSearchChange}
        />
      </section>

      <TodoList todos={filteredTodoList} onClickHandler={markAsComplete} />
    </>
  );
};

export default VisibleTodoList;
