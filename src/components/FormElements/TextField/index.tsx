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
      <input
        type="text"
        name={name}
        {...otherProps}
        className="input-wrapper"
      />
    </>
  );
};

export default TextField;
