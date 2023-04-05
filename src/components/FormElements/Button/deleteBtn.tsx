import { FC } from "react";
import "./css/styles.css";
import { ButtonInterface } from "./interface/ButtonInterface";

const DeleteBtn: FC<ButtonInterface> = (props) => {
  const { children, ...otherProps } = props;
  return (
    <button {...otherProps} className="Delete-btn">
      {children}
    </button>
  );
};

export default DeleteBtn;
