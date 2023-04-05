import { FC } from "react";
import "./css/styles.css";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import { TaskInterface as PropsInterface } from "../../interfaces/TaskInterface";

interface TaskPropsInterface {
  tasks: PropsInterface["task"];
  editRow(): void;
  deleteTask(id: number): void;
}

const Table: FC<TaskPropsInterface> = ({ tasks, deleteTask, editRow }) => {
  return (
    <div className="Table-container">
      <table>
        <TableHeader />
        <TableBody tasks={tasks} deleteTask={deleteTask} editRow={editRow} />
      </table>
    </div>
  );
};

export default Table;
