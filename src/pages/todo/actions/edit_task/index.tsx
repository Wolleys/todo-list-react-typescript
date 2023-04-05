import { FC, Dispatch, SetStateAction, FormEvent } from "react";
import TextField from "../../../../components/FormElements/TextField";
import SubmitBtn from "../../../../components/FormElements/Button/submitBtn";

interface TaskPropsInterface {
  setEditing: Dispatch<SetStateAction<boolean>>;
  updateTask(id: number, updatedTask: any): void;
}

const EditTask: FC<TaskPropsInterface> = ({ setEditing, updateTask }) => {
  const update = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    updateTask(1, { id: 1, description: "Buy groceries for next..", deadline: 2 })
  };

  return (
    <>
      <h6>Edit task</h6>
      <form onSubmit={update}>
        <TextField
          type="text"
          name="description"
          placeholder="Enter task here!"
        />
        <br />
        <TextField
          type="number"
          name="deadline"
          placeholder="Enter deadline (in days)"
        />
        <br />
        <SubmitBtn> Update task </SubmitBtn>
        <button type="button" onClick={() => setEditing(false)}>
          Cancel
        </button>
      </form>
    </>
  );
};

export default EditTask;
