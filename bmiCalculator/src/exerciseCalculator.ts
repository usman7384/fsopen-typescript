interface exerciseValues {
  value: number;
  array: number[];
}

const parseArguments = (args: Array<string>): exerciseValues => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.slice(2).every((e) => !isNaN(Number(e)))) {
    const array = args.slice(3).map((a) => Number(a));
    const value = Number(args[2]);
    return {
      value,
      array,
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

interface ResultObject {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const ratingDescriptionList = [
  "Bad",
  "not too bad but could be better",
  "Excellent",
];

const calculateExercises = (
  exerciseTimes: Array<number>,
  target: number
): ResultObject => {
  const periodLength = exerciseTimes.length;
  const trainingDays = exerciseTimes.filter((n) => n > 0).length;
  const success = exerciseTimes.every((n) => n >= target);
  const successDays = exerciseTimes.filter((n) => n >= target).length;
  const average = exerciseTimes.reduce((x, y) => x + y) / periodLength;

  let ratingIndex;
  if (successDays === periodLength) ratingIndex = 3;
  else if (successDays >= periodLength / 2) ratingIndex = 2;
  else ratingIndex = 1;

  const ratingDescription = ratingDescriptionList[ratingIndex - 1];

  return {
    periodLength,
    trainingDays,
    success,
    target,
    rating: ratingIndex,
    ratingDescription,
    average,
  };
};

try {
  const { value, array } = parseArguments(process.argv);
  console.log(calculateExercises(array, value));
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}

export default calculateExercises;
