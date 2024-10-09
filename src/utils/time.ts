import dayjs from "dayjs";

export const formatDuration = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};

export const formatYear = (date: string) => {
  return dayjs(date, "YYYY-MM-DD").format("YYYY");
};
