import { FC } from "react";
import "./css/styles.css";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import MainContent from "../MainContent";

const Layout: FC = () => {
  return (
    <div className="Primary-layout">
      <Header />
      <Sidebar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Layout;
