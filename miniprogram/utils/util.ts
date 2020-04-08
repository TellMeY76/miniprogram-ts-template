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
  const s = n.toString()
  return s[1] ? s : '0' + s
}

const distanceNow = (startDate: string) => {
  let differenceDay = 0;
  if (startDate) {
    const date = new Date(startDate.replace(/\-/g, "/"));
    const endDate = new Date().toLocaleDateString();
    differenceDay = Math.floor((date.getTime() - new Date(endDate).getTime()) / (1000 * 3600 * 24));
  }
  return differenceDay;
};

export { formatTime, distanceNow }