export default function convertToValidBarChartData(data: number[]) {
  const convertedData = data?.map((digit) => ({ uv: digit }));
  return convertedData;
}
