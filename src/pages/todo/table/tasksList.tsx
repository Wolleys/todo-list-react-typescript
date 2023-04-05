import { FC, Dispatch, SetStateAction } from "react";
import Table from "../../../components/Table";
import { TaskInterface as PropsInterface } from "../../../interfaces/TaskInterface";

interface TaskPropsInterface {
  tasks: PropsInterface["task"];
  setTasks: Dispatch<SetStateAction<PropsInterface["task"]>>;
  editRow(): void;
}

const TasksList: FC<TaskPropsInterface> = ({ tasks, setTasks, editRow }) => {
  return <Table tasks={tasks} setTasks={setTasks} editRow={editRow} />;
};

export default TasksList;
