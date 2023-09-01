import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <Fragment>
      <p>{props.parts} {props.exercises}</p>
    </Fragment>
  )
}

const Content = (props) => {

  return (  
    <div>
      <Part parts={props.part1} exercises={props.exercises1}/>
      <Part parts={props.part2} exercises={props.exercises2} />
      <Part parts={props.part3} exercises={props.exercises3} />
    </div>
  )
}


const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'  
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

  ReactDOM.render(<App />, document.getElementById('root'))

  /* 
  Desafortunadamente, toda la aplicación está en el mismo componente. Refactorice el código para que conste de tres componentes nuevos: Header, Content y Total. Todos los datos aún residen en el componente App, que pasa los datos necesarios a cada componente mediante props. Header se encarga de representar el nombre del curso, Content representa las partes y su número de ejercicios y Total representa el número total de ejercicios.

  El cuerpo del componente App será aproximadamente como sigue:


  */
  /*
   const App = () => {
     // const-definitions
   
     return (
       <div>
         <Header course={course} />
         <Content />
         <Total  />
       </div>
     )
   }
   */
  /* 
  1.2: información del curso, paso 2

  Refactorice el componente Content para que no represente ningún nombre de partes o su número de ejercicios por sí mismo. En su lugar, solo representa tres componentes Part de los cuales cada uno representa el nombre y el número de ejercicios de una parte. 

  const Content =  {
    return (
      <div>
        <Part />
        <Part />
        <Part />
      </div>
    )
  }
  */
