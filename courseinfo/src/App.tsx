import React from "react";
import CoursePart from './types';
import Content from './components/Content';
import Total from './components/Total';
import Header from './components/Header';

const App = () => {
  const courseName = "Half Stack application development";
  // const courseParts = [
  //   {
  //     name: "Fundamentals",
  //     exerciseCount: 10
  //   },
  //   {
  //     name: "Using props to pass data",
  //     exerciseCount: 7
  //   },
  //   {
  //     name: "Deeper type usage",
  //     exerciseCount: 14
  //   }
  // ];

  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is the easy course part",
      type: "normal"
    },
    {
      name: "Advanced",
      exerciseCount: 7,
      description: "This is the hard course part",
      type: "normal"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      type: "groupProject"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
      type: "submission"
    }
    ,{
      name: "Backend development",
      exerciseCount: 21,
      description: "Typing the backend",
      requirements: ["nodejs", "jest"],
      type: "special"
    }
  ]
  // const assertNever = (value: never): never => {
  //   throw new Error(
  //     `Unhandled discriminated union member: ${JSON.stringify(value)}`
  //   );
  // };

  // const Header = (props: { name: string }) => {
  //   return <h1>{props.name}</h1>;
  // };
  // // const Content = (props: { parts: { name: string; exerciseCount: number ;description:string}[] }) => {
  // const Content = ({parts}:{ parts:CoursePart[]}) => {
  //   return(
  //     <div>
  //     {courseParts.map((part, i) =>
  //       <Part key={i} part={part} />
  //     )}
  //   </div>
  //   )
  //   // return <>{
  //   //     parts.forEach(part => {
  //   //     switch (part.type) {
  //   //       case "normal":
  //   //         return <Part part={part} />;
  //   //       case "groupProject":
  //   //         return <Part part={part} />;
  //   //       case "submission":
  //   //         return <Part part={part} />;
  //   //       case "special":
  //   //         return <Part part={part} />;
  //   //       default:
  //   //         return assertNever(part);
  //   //     }
  
  //   //   // <div>
  //   //   //   <Part part={parts[0]} />
  //   //   //   <Part part={parts[1]} />
  //   //   //   <Part part={parts[2]} />
  //   //   // </div>
  //   //   })}</>;
  // };
  // const Total = (props: { parts: { name: string; exerciseCount: number }[] }) => {
  //   return (
  //     <p>
  //       Number of exercises{" "}
  //       {props.parts.reduce((carry, part) => carry + part.exerciseCount, 0)}
  //     </p>
  //   );
  // };
  // const Part = ({part}:{part:CoursePart}):JSX.Element => {
  //     switch(part.type){
  //       case "normal":
  //         return <div><h2>{part.name} {part.exerciseCount}</h2><p>{part.description}</p></div>;
  //       case "groupProject":
  //         return <div><h2>{part.name} {part.exerciseCount}</h2><p>project exercises {part.groupProjectCount}</p></div>;
  //       case "submission":
  //         return <div><h2>{part.name} {part.exerciseCount}</h2><p>{part.description}</p><p>{part.exerciseSubmissionLink}</p></div>;
  //       case "special":
  //         return <div><h2>{part.name} {part.exerciseCount}</h2><p>{part.description}</p><p>{part.requirements}</p></div>;
  //       default:
  //         return assertNever(part);

       
  //     }
  //   // return (
  //   //   <p>
  //   //     {part.name} {part.exerciseCount} 
  //   //     {/* {part.description} */}
  //   //   </p>
  //   // );
  // };


  return (
    <div>
      <Header name={courseName} />
      <Content parts={ courseParts} />
      <Total parts={ courseParts} />
    </div>
  );
};

export default App;