import { FC, ChangeEvent } from "react";
import Button from "./Button";
import TextBox from "./TextBox";

interface IAddTodoItemProps {
  onClickHandler: () => void;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

const AddTodoItem: FC<IAddTodoItemProps> = ({
  onClickHandler,
  onChange,
  value,
}) => {
  return (
    <section>
      <TextBox
        placeholder="Add new todo"
        name="addTodo"
        onChange={onChange}
        value={value}
      />
      <Button className="primary" onClickHandler={onClickHandler}>
        Add Todo
      </Button>
    </section>
  );
};

export default AddTodoItem;
