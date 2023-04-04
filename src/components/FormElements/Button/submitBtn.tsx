import { FC, ReactNode } from "react";
import "./css/styles.css";

interface ButtonProps {
    children: ReactNode;
}

const SubmitBtn: FC<ButtonProps> = (props) => {
    const { children, ...otherProps } = props;
    return <button {...otherProps} className="Submit-btn">{children}</button>;
};

export default SubmitBtn;
