import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className='Header'>
        <div className="logoHeader">
            <div className="heading">To Do</div>
        </div>
        <div className="menu">
            <div className="daily"><Link to="/daily">Daily</Link></div>
            <div className="weekly"><Link to="/weekly">Weekly</Link></div>
            <div className="tasks"><Link to="/tasks">Tasks</Link></div>
        </div>
    </div>
  )
}

export default Header