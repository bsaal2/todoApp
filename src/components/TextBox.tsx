import { FC, ChangeEvent } from "react";

interface ITextBoxProps {
  placeholder?: string;
  name?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

const TextBox: FC<ITextBoxProps> = ({
  placeholder = "",
  name = "",
  onChange,
  value,
}) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    ></textarea>
  );
};

export default TextBox;
