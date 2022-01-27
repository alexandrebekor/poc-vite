import { useState } from "react"
import { Task } from "./components/Task"

function App() {
  const [tasks, setTasks] = useState<string[]>([])

  const addTask = () => {
    setTasks([...tasks, "new item"])
  }

  return (
    <div>
      {tasks.map((task, id) => {
        return <Task key={id} text={`${task} ${id}`} />
      })}
      <input name="description" type="text" />
      <button onClick={addTask}>Adicinar Tarefa</button>
    </div>
  )
}

export default App
