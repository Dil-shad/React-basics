import React from 'react'
import homeCss from "./Home.module.css";
import Child  from './Child';
import btnCss from './Button.module.css'

const Home = () => {
  const headingStyle = { color: "blue" };

  return (
    <div>
      <h1 className={homeCss.header}>Home</h1>
      <h1 style={{ color: "red" }}>Home Component</h1>
      <h2 style={headingStyle}>this is for variable css</h2>
      <Child />
      <button className={btnCss.loginBtn} type="button">Log in</button>
      <button className={btnCss.logoutBtn} type="button">Log out</button>
  

    </div>
  )
}

export default Home