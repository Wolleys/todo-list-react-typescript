import { FC, ChangeEvent, useState, FormEvent } from "react";
import TextField from "../../../../components/FormElements/TextField";
import SubmitBtn from "../../../../components/FormElements/Button/submitBtn";

interface TaskPropsInterface {
  addTask(item: {}): void;
}

const AddTask: FC<TaskPropsInterface> = ({ addTask }) => {
  const initialFormState = { id: 0, description: "", deadline: 0 };
  const [input, setInput] = useState(initialFormState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const add = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!input.description || input.deadline <= 0) return;

    addTask(input);
    setInput(initialFormState);
  };

  return (
    <>
      <h6>Add task</h6>
      <form onSubmit={add} autoComplete="off">
        <TextField
          required
          type="text"
          name="description"
          onChange={handleChange}
          value={input.description}
          placeholder="Enter task here!"
        />
        <br />
        <TextField
          required
          type="number"
          name="deadline"
          value={input.deadline}
          onChange={handleChange}
          placeholder="Enter deadline (in days)"
        />
        <br />
        <SubmitBtn> Add new task </SubmitBtn>
      </form>
    </>
  );
};

export default AddTask;
