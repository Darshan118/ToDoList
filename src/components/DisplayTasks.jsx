import { deleteTask, toggleTask } from "../redux/taskSlice";
import { useSelector, useDispatch } from "react-redux";

const DisplayTasks = () => {
  const tasksList = useSelector((state) => state.tasksList.tasks);
  const dispatch = useDispatch();
  return (
    <>
      <ul>
        {tasksList
          .slice() //to create a copy inorder to avoid mutation of original tasksList
          .sort((a, b) => a.completed - b.completed) //sorting ascending order in this case incomplete first
          .map((task) => {
            return (
              <li
                key={task.id}
                className="flex justify-between p-2 border-b border-gray-600"
              >
                <span
                  className={`cursor-pointer ${
                    task.completed ? "line-through text-gray-400" : ""
                  }`}
                  onClick={() => dispatch(toggleTask(task.id))}
                >
                  {" "}
                  {task.text}
                </span>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => dispatch(deleteTask(task.id))}
                >
                  ✖
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default DisplayTasks;
