import { FC, Dispatch, SetStateAction } from "react";
import Table from "../../../components/Table";
import { TaskInterface as PropsInterface } from "../../../interfaces/TaskInterface";

interface TaskPropsInterface {
  task: PropsInterface["task"];
  setTask: Dispatch<SetStateAction<PropsInterface["task"]>>;
}

const TasksList: FC<TaskPropsInterface> = ({ task, setTask }) => {
  return <Table task={task} setTask={setTask} />;
};

export default TasksList;
