import { css } from '@stitches/react'
import { useState } from 'react'

const Layout = css({
  display: 'flex',
  color: '#f1f1f1',
  backgroundColor: '#e1e',
  padding: '0.5rem',
  '&:checked': {
    color: '#e1e'
  }
})

type TaskProps = {
  text: string
}

export function Task(props: TaskProps) {
  return (
      <div className={Layout()}>
        <input type="checkbox" />
        <label>{ props.text }</label>
      </div>
  )
}