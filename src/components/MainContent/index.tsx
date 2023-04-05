import { FC, ReactNode } from "react";
import "./css/styles.css";

type MainContentInterface = {
  children: ReactNode;
};

const MainContent: FC<MainContentInterface> = ({ children }) => {
  return <div className="Main-component">{children}</div>;
};

export default MainContent;
