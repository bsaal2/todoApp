import { FC, ReactNode, MouseEvent } from "react";

interface IButtonProps {
  className: string;
  children: ReactNode;
  onClickHandler: (event: MouseEvent<HTMLButtonElement>, data?: any) => void;
}

const Button: FC<IButtonProps> = ({ className, onClickHandler, children }) => {
  return (
    <button className={className} onClick={onClickHandler}>
      {children}
    </button>
  );
};

export default Button;
