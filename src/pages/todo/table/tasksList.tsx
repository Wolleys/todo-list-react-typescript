import { FC, Dispatch, SetStateAction } from "react";
import Table from "../../../components/Table";
import { TaskInterface as PropsInterface } from "../../../interfaces/TaskInterface";

interface TaskPropsInterface {
  task: PropsInterface["task"];
  setTask: Dispatch<SetStateAction<PropsInterface["task"]>>;
  editRow(): void
}

const TasksList: FC<TaskPropsInterface> = ({ task, setTask, editRow }) => {
  return <Table task={task} setTask={setTask} editRow={editRow} />;
};

export default TasksList;
