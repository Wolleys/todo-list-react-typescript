import { FC, ReactNode } from "react";
import "./css/styles.css";

type LayoutInterface = {
  children: ReactNode;
};

const Layout: FC<LayoutInterface> = ({ children }) => {
  return <div className="Primary-layout">{children}</div>;
};

export default Layout;
