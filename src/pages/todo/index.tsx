import { FC } from "react";
import AddTask from "./actions/add_task";
import TasksList from "./table/tasksList";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import MainContent from "../../components/MainContent";

const Todo: FC = () => {
  return (
    <Layout>
      <Header />
      <Sidebar>
        <AddTask />
      </Sidebar>
      <MainContent>
        <TasksList />
      </MainContent>
    </Layout>
  );
};

export default Todo;
