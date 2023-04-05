import { FC } from "react";
import Table from "../../../components/Table";
import { TaskInterface as PropsInterface } from "../../../interfaces/TaskInterface";

interface TaskPropsInterface {
  tasks: PropsInterface["task"];
  editRow(): void;
  deleteTask(id: number): void;
}

const TasksList: FC<TaskPropsInterface> = ({ tasks, deleteTask, editRow }) => {
  return <Table tasks={tasks} deleteTask={deleteTask} editRow={editRow} />;
};

export default TasksList;
