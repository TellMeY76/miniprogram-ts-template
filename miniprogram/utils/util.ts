const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

const formatNumber = (n: number) => {
  const s: string = n.toString()
  return s[1] ? s : '0' + s
}


const distanceNow = (dateString: string) => {
  let diffDays: number = 0;
  if (dateString) {
    const startDate: Date = new Date(dateString.replace(/\-/g, "/"));
    const endDateString: string = new Date().toLocaleDateString();
    diffDays = Math.floor((startDate.getTime() - new Date(endDateString).getTime()) / (1000 * 3600 * 24));
  }
  return diffDays;
};

const convertObjToMap = (obj: Object) => new Map(Object.entries(obj));

export { formatTime, distanceNow, convertObjToMap }