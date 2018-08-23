export default {
  formateData(times) {
    if (!times) {
      return
    } else {
      let time = new Date(times)
      let y = time.getFullYear();
      let m = time.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      let d = time.getDate();
      d = d < 10 ? ('0' + d) : d;
      let h = time.getHours();
      h = h < 10 ? ('0' + h) : h;
      let minute = time.getMinutes();
      let second = time.getSeconds();
      minute = minute < 10 ? ('0' + minute) : minute;
      second = second < 10 ? ('0' + second) : second;
      return `${y}-${m}-${d}  ${h} : ${minute} : ${second}`
    }
  }
}