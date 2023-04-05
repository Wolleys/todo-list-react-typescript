import { FC, Dispatch, SetStateAction } from "react";
import { TaskInterface as PropsInterface } from "../../interfaces/TaskInterface";

interface TaskPropsInterface {
  tasks: PropsInterface["task"];
  setTasks: Dispatch<SetStateAction<PropsInterface["task"]>>;
  editRow(): void;
}

const TableBody: FC<TaskPropsInterface> = ({ tasks, setTasks, editRow }) => {
  const deleteTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const renderTableBody = (): JSX.Element[] => {
    return tasks.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.description}</td>
          <td>In progress</td>
          <td>
            <span>
              <button onClick={() => editRow()}>Edit</button>
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
