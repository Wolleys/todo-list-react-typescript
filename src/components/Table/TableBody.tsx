import { FC } from "react";
import EditBtn from "../FormElements/Button/editBtn";
import DeleteBtn from "../FormElements/Button/deleteBtn";
import FinishBtn from "../FormElements/Button/finishBtn";
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
              <EditBtn onClick={() => editRow()}>Edit</EditBtn>
              <DeleteBtn onClick={() => deleteTask(item.id)}>Delete</DeleteBtn>
              <FinishBtn>Finish</FinishBtn>
            </span>
          </td>
        </tr>
      );
    });
  };

  return <tbody>{renderTableBody()}</tbody>;
};

export default TableBody;
