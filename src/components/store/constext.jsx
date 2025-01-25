import React, { Children, useEffect, useState } from 'react'
import Mycontext from './Mycontext'


const Constext = (props) => {
    const [Tasks,setTasks]=useState(()=>{
   let value=localStorage.getItem("tasks")  
   return value?JSON.parse(value):[]
    })
    console.log(Tasks)
    console.log( JSON.parse(localStorage.getItem("tasks")))
    
    const edit = (id) => {
        const newar = Tasks.find((idy) => {
          return idy.id == id;
        });
      
        if (!newar) {
          console.error("Task not found!");
          return;
        }
      
        const prompty = prompt("Enter new value", newar.myvalue);
      
        setTasks((prev) =>
          prev.map((task) => {
            if (task.id === id) {
              return { ...task, myvalue: prompty }; // Correctly return the updated task
            }
            return task; // Return the unchanged task
          })
        );
      };
      
    const del=(id)=>{
        const newtasks=Tasks.filter((task)=>{
            return task.id!=id
        })
        setTasks(newtasks)
    }

    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(Tasks))
      },[Tasks])
      
    
    return(
        <Mycontext.Provider value={{setTasks:setTasks,Tasks:Tasks,del:del,edit:edit}}>
        {props.children}
        </Mycontext.Provider>
    )

  
}

export default Constext
