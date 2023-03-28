import moment from "moment";

const MomentDiff = (start: any, end: any) => {
  const startTime = moment(start);
  const endTime = moment(end);
  const years = startTime.diff(endTime, "years");
  const months = startTime.diff(endTime, "months");
  const days = startTime.diff(endTime, "days");
  const hour = startTime.diff(endTime, "hour");
  const minutes = startTime.diff(endTime, "minutes");
  const seconds = startTime.diff(endTime, "seconds");

  if (years > 0 && years !== 1) return years + "년전";
  else if (months > 0 && months !== 1) return months + "달전";
  else if (days > 0 && days !== 1) return days + "일전";
  else if (hour > 0 && hour !== 1) return hour + "시간전";
  else if (minutes > 0 && minutes !== 1) return minutes + "분전";
  else if (seconds > 0 && seconds !== 1) return seconds + "초전";
  else return 0;
};

export default MomentDiff;
