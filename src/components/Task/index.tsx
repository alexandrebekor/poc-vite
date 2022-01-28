import { css } from '@stitches/react'
import { useState } from 'react'

const Layout = css({
  display: 'flex',
  color: '#f1f1f1',
  backgroundColor: '#e1e',
  padding: '0.5rem'
})

const Label = css({
  textDecoration: 'line-through'
})

type TaskProps = {
  text: string
}

export function Task(props: TaskProps) {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(!checked)
  }

  return (
      <div className={Layout()}>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <label className={ checked ? Label() : '' }>{ props.text }</label>
      </div>
  )
}