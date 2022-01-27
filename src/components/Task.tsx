type TaskProps = {
  text: string
}

export function Task(props: TaskProps) {
  return (
      <p>{ props.text }</p>
  )
}