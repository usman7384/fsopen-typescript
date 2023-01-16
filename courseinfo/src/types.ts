export interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}

interface NewCoursePartBase extends CoursePartBase {
  description: string;
}

interface CourseNormalPart extends NewCoursePartBase {
  type: "normal";
}

interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}

interface CourseSubmissionPart extends NewCoursePartBase {
  type: "submission";
  exerciseSubmissionLink: string;
}

interface CourseSpecialPart extends NewCoursePartBase {
  type: "special";
  requirements: string[];
}

type CoursePart =
  | CourseNormalPart
  | CourseProjectPart
  | CourseSubmissionPart
  | CourseSpecialPart;

export default CoursePart;
