import React from 'react'
import homeCss from "./Home.module.css";
import Child  from './Child';
import btnCss from './Button.module.css'

const Home = () => {
  const headingStyle = { color: "blue" };

  return (
    <div>
      <h1 className={homeCss.header}>Home</h1>
      
    </div>
  )
}

export default Home