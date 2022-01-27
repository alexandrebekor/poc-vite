import { useState } from "react"
import { Task } from "./components/Task"

function App() {
  const [tasks, setTasks] = useState<string[]>([])
  const [description, setDescription] = useState<string>()

  const addTask = () => {
    if(description) {
      setTasks([...tasks, description])
      setDescription('')
    }
  }

  return (
    <div>
      {tasks.map((task, id) => {
        return <Task key={id} text={task} />
      })}
      <input
        name="description"
        type="text"
        onChange={e => setDescription(e.target.value)}
        value={description} />
      <button onClick={addTask}>Adicinar Tarefa</button>
    </div>
  )
}

export default App
