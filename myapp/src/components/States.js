import React from 'react'

const States = ({name,lang,population}) => { 
  //insteed of props object we can declare varibles {name,lang,popuylation}
  return (
    <div className='bg-warning'>
      <h1>{name}</h1>
      <h4>Language:{lang}</h4>
      <h4>Population:{population}</h4>
    </div>
  )
}

export default States
