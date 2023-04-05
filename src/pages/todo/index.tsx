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

  const [tasks, setTasks] = useState<TaskInterface["task"]>(taskData);
  const [editing, setEditing] = useState<boolean>(false);

  // CRUD operations
  const addTask = (task: any): void => {
    task.id = tasks.length + 1;
    setTasks([...tasks, task]);
  };

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id: number, updatedTask: any): void => {
    setEditing(false);
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const editRow = (): void => {
    setEditing(true);
  };

  return (
    <Layout>
      <Header />
      <Sidebar>
        {editing ? (
          <EditTask setEditing={setEditing} updateTask={updateTask} />
        ) : (
          <AddTask addTask={addTask} />
        )}
      </Sidebar>
      <MainContent>
        <TasksList tasks={tasks} editRow={editRow} deleteTask={deleteTask} />
      </MainContent>
      <Footer />
    </Layout>
  );
};

export default Todo;
