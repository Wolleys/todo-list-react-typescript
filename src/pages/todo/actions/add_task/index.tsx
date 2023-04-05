import {
  FC,
  ChangeEvent,
  useState,
  Dispatch,
  SetStateAction,
  FormEvent,
} from "react";
import TextField from "../../../../components/FormElements/TextField";
import SubmitBtn from "../../../../components/FormElements/Button/submitBtn";
import { TaskInterface as PropsInterface } from "../../../../interfaces/TaskInterface";

interface TaskPropsInterface {
  tasks: PropsInterface["task"];
  setTasks: Dispatch<SetStateAction<PropsInterface["task"]>>;
}

const AddTask: FC<TaskPropsInterface> = ({ tasks, setTasks }) => {
  const initialValues = {
    id: 0,
    description: "",
    deadline: 0,
  };

  const [input, setInput] = useState(initialValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const addTask = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!input.description || input.deadline <= 0) return;
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        description: input.description,
        deadline: input.deadline,
      },
    ]);
    setInput(initialValues);
  };

  return (
    <>
      <h6>Add task</h6>
      <form onSubmit={addTask}>
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
