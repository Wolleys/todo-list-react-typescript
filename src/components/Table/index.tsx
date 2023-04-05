import { FC, Dispatch, SetStateAction } from "react";
import "./css/styles.css";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import { TaskInterface as PropsInterface } from "../../interfaces/TaskInterface";

interface TaskPropsInterface {
  tasks: PropsInterface["task"];
  setTasks: Dispatch<SetStateAction<PropsInterface["task"]>>;
  editRow(): void;
}

const Table: FC<TaskPropsInterface> = ({ tasks, setTasks, editRow }) => {
  return (
    <div className="Table-container">
      <table>
        <TableHeader />
        <TableBody tasks={tasks} setTasks={setTasks} editRow={editRow} />
      </table>
    </div>
  );
};

export default Table;
