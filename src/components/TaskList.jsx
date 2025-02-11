import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { v4 as uuidv4 } from "uuid";
import DisplayTasks from "./DisplayTasks";
const TaskList = () => {
  const [taskInput, setTaskInput] = useState("");
  const dispatch = useDispatch(); //This dispatches actions (add, delete, toggle) to the Redux store
  const handleAddTask = () => {
    if (taskInput.trim() === "") {
      console.log("taskInput is empty!!⚠️");
      return; //trim will remove spaces before and after the string value. It's a check for whether the input value is empty
    }
    dispatch(addTask({ id: uuidv4(), text: taskInput, completed: false }));
    setTaskInput(""); //Clear task input after task is added
  };
  return (
    <>
      <div className="w-[100%] mx-auto p-5 bg-gray-800 text-white rounde-lg flex flex-col">
        <div className="flex mb-2 shadow-(5px 5px 5px) p-2 bg-green-400 rounded">
          <h2 className=" text-xl font-bold mb-4 mx-auto rounded p-3 ">
            To-Do-List
          </h2>
        </div>
        <div className="flex mb-4">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Enter a task..."
            className="flex-1 p-2 rounded-l bg-gray-700 border border-gray-600 focus:outline-none border-transparent focus:border-gray-400"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 px-4 py-2 rounded-r hover:bg-blue-600 duration-300"
          >
            Add
          </button>
        </div>
        <DisplayTasks />
      </div>
    </>
  );
};

export default TaskList;
