
import './Task.css'

type TaskProps = {
  text: string
}

export function Task(props: TaskProps) {
  return (
      <div>
        <input type="checkbox"/>
        <label style={{
          backgroundColor: '#8257e6',
        }}>{ props.text }</label>
      </div>
  )
}