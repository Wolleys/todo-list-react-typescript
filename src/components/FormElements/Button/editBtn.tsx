import { FC } from "react";
import "./css/styles.css";
import { ButtonInterface } from "./interface/ButtonInterface";

const EditBtn: FC<ButtonInterface> = (props) => {
  const { children, ...otherProps } = props;
  return (
    <button {...otherProps} className="Edit-btn">
      {children}
    </button>
  );
};

export default EditBtn;
