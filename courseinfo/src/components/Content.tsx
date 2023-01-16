import CoursePart from "../types";
import Part from "./Part";

const Content = ({ parts }: { parts: CoursePart[] }) => {
  return (
    <div>
      {parts.map((part, i) => (
        <Part key={i} part={part} />
      ))}
    </div>
  );
};

export default Content;
