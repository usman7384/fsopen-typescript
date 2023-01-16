const Total = (props: { parts: { name: string; exerciseCount: number }[] }) => {
    return (
      <div>
        <h2>Number of exercises{" "}</h2>
        <p>
        {props.parts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
      </div>
    );
  };

  export default Total;