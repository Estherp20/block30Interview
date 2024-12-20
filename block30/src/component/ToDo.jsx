import { React } from "react"
import { useState } from "react"

export default function ToDo(){
    const [tasks, setTasks] = useState('');
    const [taskList, setTaskList] = useState([]);

    function addSomething(){
        setTaskList([...taskList, tasks])
    }
   

    return(
    <>
    <h2>ToDo list</h2>
    <form onSubmit={(e) => {
        e.preventDefault();
        addSomething();
    }}>
    <label>add Items
        <input onChange={(e) => setTasks(e.target.value)}></input>
    </label>
    <br />
    <button type="submit">Submit</button>
    </form>
    {taskList.map((task)=>{
        return (
            <div key={task}>
                {task}
            </div>
    
        )
    })}
    </>
)

}
