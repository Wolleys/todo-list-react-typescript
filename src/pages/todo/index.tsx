import { FC, useState } from "react";
import AddTask from "./actions/add_task";
import TasksList from "./table/tasksList";
import EditTask from "./actions/edit_task";
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
  const [editing, setEditing] = useState<boolean>(false);

  const updateTask = (): void => {
    setEditing(false);
  };

  const editRow = (): void => {
    setEditing(true);
  };

  return (
    <Layout>
      <Header />
      <Sidebar>
        {editing ? <EditTask setEditing={setEditing} /> : <AddTask task={task} setTask={setTask} />}
      </Sidebar>
      <MainContent>
        <TasksList task={task} editRow={editRow} setTask={setTask} />
      </MainContent>
      <Footer />
    </Layout>
  );
};

export default Todo;
