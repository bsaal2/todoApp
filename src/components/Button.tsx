import { FC, ReactNode } from "react";

interface IButtonProps {
  className: string;
  children: ReactNode;
  onClickHandler: () => void;
}

const Button: FC<IButtonProps> = ({ className, onClickHandler, children }) => {
  return (
    <button className={className} onClick={onClickHandler}>
      {children}
    </button>
  );
};

export default Button;
