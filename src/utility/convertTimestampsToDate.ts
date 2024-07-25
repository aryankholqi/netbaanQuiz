export default function convertTimestampsToDate(timestamp: number) {
  const date = new Date(timestamp).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h24",
    
  });
  return date;
}
