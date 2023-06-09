import { FC } from "react";
import "./css/styles.css";
import { ButtonInterface } from "./interface/ButtonInterface";

const SubmitBtn: FC<ButtonInterface> = (props) => {
  const { children, ...otherProps } = props;
  return (
    <button {...otherProps} className="Submit-btn">
      {children}
    </button>
  );
};

export default SubmitBtn;
