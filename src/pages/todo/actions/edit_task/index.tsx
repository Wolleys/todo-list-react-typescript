import { FC, Dispatch, SetStateAction, FormEvent } from "react";
import TextField from "../../../../components/FormElements/TextField";
import SubmitBtn from "../../../../components/FormElements/Button/submitBtn";

interface TaskPropsInterface {
  setEditing: Dispatch<SetStateAction<boolean>>;
}

const EditTask: FC<TaskPropsInterface> = ({ setEditing }) => {
  const editTask = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <>
      <h6>Edit task</h6>
      <form onSubmit={editTask}>
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
