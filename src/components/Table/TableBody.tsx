import { FC } from "react";

const TableBody: FC = () => {
  return (
    <tbody>
      <tr>
        <td>1</td>
        <td>Buy groceries for next week</td>
        <td>In progress</td>
        <td>
          <span>
            <button>Edit</button>
            <button>Delete</button>
            <button>Finish</button>
          </span>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Renew car insurance</td>
        <td>In progress</td>
        <td>
          <span>
            <button>Edit</button>
            <button>Delete</button>
            <button>Finish</button>
          </span>
        </td>
      </tr>
    </tbody>
  );
};

export default TableBody;
