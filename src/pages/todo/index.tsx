import { FC, useState } from "react";
import AddTask from "./actions/add_task";
import TasksList from "./table/tasksList";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import MainContent from "../../components/MainContent";
import { TaskInterface } from "../../interfaces/TaskInterface";

const Todo: FC = () => {
  const taskData = [
    { id: 1, description: "Buy groceries for next week", deadline: 8 },
    { id: 2, description: "Renew car insurance", deadline: 5 },
  ];

  const [task, setTask] = useState<TaskInterface["task"]>(taskData);

  return (
    <Layout>
      <Header />
      <Sidebar>
        <AddTask />
      </Sidebar>
      <MainContent>
        <TasksList task={task} setTask={setTask} />
      </MainContent>
      <Footer />
    </Layout>
  );
};

export default Todo;
