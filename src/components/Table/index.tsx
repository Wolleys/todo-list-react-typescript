import { FC, Dispatch, SetStateAction } from "react";
import "./css/styles.css";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import { TaskInterface as PropsInterface } from "../../interfaces/TaskInterface";

interface TaskPropsInterface {
  task: PropsInterface["task"];
  setTask: Dispatch<SetStateAction<PropsInterface["task"]>>;
}

const Table: FC<TaskPropsInterface> = ({ task, setTask }) => {
  return (
    <div className="Table-container">
      <table>
        <TableHeader />
        <TableBody task={task} setTask={setTask} />
      </table>
    </div>
  );
};

export default Table;
