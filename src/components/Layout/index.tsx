import { FC } from "react";
import "./css/styles.css";

const Layout: FC = () => {
  return (
    <div className="Primary-layout">
      <div className="Header-component">
        <div className="Header-logo">Todo App</div>
      </div>
      <div className="Form-component">
        <div className="Form-title">Add Task</div>
        Form elements
      </div>
      <div className="Main-component">
        <div className="test-height">Main content</div>
      </div>
      <div className="Footer-component">Footer component</div>
    </div>
  );
};

export default Layout;
