import { FC } from "react";
import "./css/styles.css";
import AddTask from "../../pages/todo/actions/add_task";

const Sidebar: FC = () => {
  return (
    <div className="Sidebar-component">
      <div className="Sidebar-title">Task manager</div>
      <div className="Form-container">
        <AddTask />
      </div>
    </div>
  );
};

export default Sidebar;
