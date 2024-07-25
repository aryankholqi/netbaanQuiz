export const getGradeColor = (grade: string) => {
  const colorForGoodGrades = "#6e1322";
  const colorForBadGrades = "#3e1b1b";
  const goodGrades = ["A", "B", "C", "D"];
  const badGrades = ["F", "E"]; //* you can add more bad grades here

  if (goodGrades.includes(grade)) {
    return colorForGoodGrades;
  } else if (badGrades.includes(grade)) {
    return colorForBadGrades;
  } else {
    return colorForBadGrades; //? also if your grades was not in each array, we recognize it as bad grade
  }
};
