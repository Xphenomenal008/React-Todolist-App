import React, { useContext } from "react";
import Mycontext from "./store/Mycontext";

const Tasks = () => {
  const mytasks = useContext(Mycontext).Tasks;
  const deletebtn=useContext(Mycontext).del
  const editbtn=useContext(Mycontext).edit
  const handleclick=(id)=>{
    deletebtn(id)
  }
  const handleedit=(id)=>{
    editbtn(id)
  }

  return (
    <>
      <div className="bg-yellow-500 p-4 min-h-12 rounded-lg shadow-lg mt-3">
        <h1 className="text-center text-2xl font-bold text-white mb-4">Task List</h1>
        <ul className="space-y-4">
          {mytasks &&
            mytasks.map((task) => {
              return (
                <li
                  key={task.id}
                  className="flex items-center justify-between p-3 bg-white rounded-lg shadow-md hover:shadow-lg"
                >
                  <span className="text-lg font-medium">{task.myvalue}</span>
                  <div className="flex space-x-2">
                    <button onClick={()=>handleedit(task.id)} className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition">
                      Edit
                    </button>
                    <button onClick={()=>handleclick(task.id)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Tasks;
