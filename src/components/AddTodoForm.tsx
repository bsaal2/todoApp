import { FC, ChangeEvent } from "react";
import Button from "./Button";
import TextBox from "./TextBox";

interface IAddTodoFormProps {
  onButtonClickHandler: () => void;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

const AddTodoForm: FC<IAddTodoFormProps> = ({
  onButtonClickHandler,
  onChange,
  value,
}) => {
  return (
    <section className="addTodo">
      <h1>Add new todo</h1>
      {value && (
        <p>
          <strong>Now adding:</strong> {value}
        </p>
      )}
      <TextBox
        placeholder="Add new todo"
        name="addTodo"
        onChange={onChange}
        value={value}
      />
      <br />
      <Button className="primary" onClickHandler={onButtonClickHandler}>
        Add Todo
      </Button>
    </section>
  );
};

export default AddTodoForm;
