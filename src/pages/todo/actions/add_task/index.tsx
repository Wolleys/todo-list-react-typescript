import { FC } from "react";
import useForm from "../../../../hooks/useForm";
import TextField from "../../../../components/FormElements/TextField";
import SubmitBtn from "../../../../components/FormElements/Button/submitBtn";

const AddTask: FC = () => {
  const initialState = {
    id: 0,
    description: "",
    deadline: 0,
  };

  const { onChange, onSubmit, values: input } = useForm(addTask, initialState);

  async function addTask() {
    console.log(input);
  }

  return (
    <>
      <h6>Add task</h6>
      <form onSubmit={onSubmit}>
        <TextField
          required
          type="text"
          name="description"
          onChange={onChange}
          placeholder="Enter task here!"
        />
        <br />
        <TextField
          required
          type="number"
          name="deadline"
          onChange={onChange}
          placeholder="Enter deadline (in days)"
        />
        <br />
        <SubmitBtn> Add new task </SubmitBtn>
      </form>
    </>
  );
};

export default AddTask;
