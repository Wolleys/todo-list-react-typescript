import { FC, ReactNode } from "react";
import "./css/styles.css";

type SidebarInterface = {
  children: ReactNode;
};

const Sidebar: FC<SidebarInterface> = ({ children }) => {
  return (
    <div className="Sidebar-component">
      <div className="Sidebar-title">Task manager</div>
      <div className="Form-container">{children}</div>
    </div>
  );
};

export default Sidebar;
