export function singleNumTimeFormat(number: number): string {
  return number < 10 ? `0${number}` : `${number}`;
}

// Gets time formatted in HH:MM:SS
// If hours or minutes is zero - they do not appear
export function timeFormat(
  hours: number,
  minutes: number,
  seconds: number
): string {
  return `${hours !== 0 ? `${singleNumTimeFormat(hours)}:` : ""}${
    minutes !== 0 ? `${singleNumTimeFormat(minutes)}:` : ""
  }${singleNumTimeFormat(seconds)}`;
}
