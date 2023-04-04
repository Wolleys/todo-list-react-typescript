import { FC } from "react";
import "./css/styles.css";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table: FC = () => {
  return (
    <div className="Table-container">
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
};

export default Table;
