import { useState, ChangeEvent, FormEvent } from "react";

const useForm = (callback: any, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  // onChange
  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  // onSubmit
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback(); // triggering the callback
  };

  // return values
  return { onChange, onSubmit, values };
};

export default useForm;
