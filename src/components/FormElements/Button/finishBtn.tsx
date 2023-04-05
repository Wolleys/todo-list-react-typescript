import { FC } from "react";
import "./css/styles.css";
import { ButtonInterface } from "./interface/ButtonInterface";

const FinishBtn: FC<ButtonInterface> = (props) => {
  const { children, ...otherProps } = props;
  return (
    <button {...otherProps} className="Finish-btn">
      {children}
    </button>
  );
};

export default FinishBtn;
