import { FC, Dispatch, SetStateAction } from "react";
import { TaskInterface as PropsInterface } from "../../interfaces/TaskInterface";

interface TaskPropsInterface {
  task: PropsInterface["task"];
  setTask: Dispatch<SetStateAction<PropsInterface["task"]>>;
}

const TableBody: FC<TaskPropsInterface> = ({ task, setTask }) => {
  const deleteTask = (id: number): void => {
    setTask(task.filter((task) => task.id !== id));
  };

  const renderTableBody = (): JSX.Element[] => {
    return task.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.description}</td>
          <td>In progress</td>
          <td>
            <span>
              <button>Edit</button>
              <button onClick={() => deleteTask(item.id)}>Delete</button>
              <button>Finish</button>
            </span>
          </td>
        </tr>
      );
    });
  };

  return <tbody>{renderTableBody()}</tbody>;
};

export default TableBody;
