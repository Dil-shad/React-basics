import React from 'react'

const States = ({States}) => { 
  //insteed of props object we can declare varibles {name,lang,popuylation}
  return (
    <div>
      {States.map((s)=>(
        <div className='bg-warning'>
        <h1>{s.name}</h1>
        <h4>Language:{s.language}</h4>
        <h4>Population:{s.population}</h4>
      </div>

      ))
    }
    </div>
   
  )
}

export default States
