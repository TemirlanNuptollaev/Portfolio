import React from 'react'
import './MyButton.css'

function MyButton(props) {
  return (
    <a href={props.link} className="Mybtn">
      <div className='text'>Buy</div>
    </a>

  )
}

export default MyButton