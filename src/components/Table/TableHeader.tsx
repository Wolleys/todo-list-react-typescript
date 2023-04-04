import { FC } from "react";

const TableHeader: FC = () => {
  return (
    <thead>
      <tr>
        <th>No.</th>
        <th>Todo item</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
