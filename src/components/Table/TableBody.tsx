import { FC } from "react";
import { TaskInterface as PropsInterface } from "../../interfaces/TaskInterface";

interface TaskPropsInterface {
  tasks: PropsInterface["task"];
  editRow(): void;
  deleteTask(id: number): void;
}

const TableBody: FC<TaskPropsInterface> = ({ tasks, deleteTask, editRow }) => {
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
