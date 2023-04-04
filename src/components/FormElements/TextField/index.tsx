import { FC, InputHTMLAttributes } from "react";
import "./css/styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
}

const TextField: FC<InputProps> = ({ name, label, ...otherProps }) => {
  return (
    <>
      <label htmlFor={name}> {label} </label>
      <input name={name} {...otherProps} className="input" />
    </>
  );
};

export default TextField;
